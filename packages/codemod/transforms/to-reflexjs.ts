import { API, FileInfo, JSXAttribute } from "jscodeshift"
import matter from "gray-matter"

const MAPPING = {
  A: "a",
  Abbr: "abbr",
  Address: "address",
  Area: "area",
  Article: "article",
  Aside: "aside",
  Audio: "audio",
  B: "b",
  Base: "base",
  Bdi: "bdi",
  Bdo: "bdo",
  Blockquote: "blockquote",
  Body: "body",
  Br: "br",
  Button: "button",
  Canvas: "canvas",
  Caption: "caption",
  Cite: "cite",
  Code: "code",
  Col: "col",
  Colgroup: "colgroup",
  Data: "data",
  Datalist: "datalist",
  Dd: "dd",
  Del: "del",
  Details: "details",
  Dfn: "dfn",
  Dialog: "dialog",
  Div: "div",
  Dl: "dl",
  Dt: "dt",
  Em: "em",
  Embed: "embed",
  Fieldset: "fieldset",
  Figcaption: "figcaption",
  Figure: "figure",
  Footer: "footer",
  Form: "form",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  Head: "head",
  Header: "header",
  Hr: "hr",
  Html: "html",
  I: "i",
  Iframe: "iframe",
  Img: "img",
  Input: "input",
  Ins: "ins",
  Kbd: "kbd",
  Label: "label",
  Legend: "legend",
  Li: "li",
  Main: "main",
  Map: "map",
  Mark: "mark",
  Meta: "meta",
  Meter: "meter",
  Nav: "nav",
  Ol: "ol",
  Optgroup: "optgroup",
  Option: "option",
  Output: "output",
  P: "p",
  Param: "param",
  Path: "path",
  Picture: "picture",
  Pre: "pre",
  Progress: "progress",
  Q: "q",
  Rp: "rp",
  Rt: "rt",
  Ruby: "ruby",
  S: "s",
  Samp: "samp",
  Section: "section",
  Select: "select",
  Small: "small",
  Source: "source",
  Span: "span",
  Strong: "strong",
  Style: "style",
  Sub: "sub",
  Summary: "summary",
  Sup: "sup",
  Svg: "svg",
  Table: "table",
  Tbody: "tbody",
  Td: "td",
  Template: "template",
  Textarea: "textarea",
  Tfoot: "tfoot",
  Th: "th",
  Thead: "thead",
  Time: "time",
  Title: "title",
  Tr: "tr",
  Track: "track",
  U: "u",
  Ul: "ul",
  Video: "video",
  Wbr: "wbr",
  ButtonLink: "a",
  Container: "div",
}

const PROPS_MAPPING = {
  d: "display",
}

const PSEUDO_CLASSES_MAPPING = {
  hover: "_hover",
  focus: "_focus",
}

function nodeIsOfIdentifierTypes(node: any, types: string[]): boolean {
  return (
    node.value &&
    node.value?.name?.type === "JSXIdentifier" &&
    types.includes(node.value.name.name)
  )
}

function findNodeAttributePath(node, attribute: string): JSXAttribute {
  return node.value.attributes.find((node) => {
    if (node?.name?.name === attribute) {
      return node.value
    }
  })
}

export default function transform(file: FileInfo, api: API): string {
  const j = api.jscodeshift
  const { data, content } = matter(file.source)
  const isMdx = Object.keys(data).length

  // TODO: Use a proper parser.
  let mdxContent =
    content.trim().charAt(0) === "<"
      ? `<CodeModeWrapper>${content}</CodeModeWrapper>`
      : content

  // Strip mdx comment.
  mdxContent = mdxContent.replace(/<!/gm, "// <!")

  const raw = isMdx ? mdxContent : file.source
  const root = j(raw)

  // Transforms `<Div />` to `<div />`.
  function transformComponentToJSX(node): void {
    if (!nodeIsOfIdentifierTypes(node, Object.keys(MAPPING))) return

    const { name } = node.value.name

    node.value.name.name = MAPPING[name]
  }

  // Transforms `<H1 />` to `<h1 variant="heading.h1" />`.
  function transformHeadingVariants(node): void {
    if (!nodeIsOfIdentifierTypes(node, ["H1", "H2", "H3", "H4", "H5", "H6"]))
      return

    const { name } = node.value.name

    const variants = [`heading.${name.toLowerCase()}`]

    // Check if node has a variant attribute.
    const variantNode = findNodeAttributePath(node, "variant")
    if (
      variantNode &&
      "value" in variantNode.value &&
      typeof variantNode.value.value === "string"
    ) {
      variants.push(variantNode.value.value)
      variantNode.value.value = variants.join(" ")
      return
    }

    node.value.attributes.unshift(
      j.jsxAttribute(
        j.jsxIdentifier("variant"),
        j.stringLiteral(variants.join(" "))
      )
    )
  }

  // Transforms `<Button variant="primary" />` to `<button variant="button.primary" />`.
  function transformButtonVariants(node): void {
    if (!nodeIsOfIdentifierTypes(node, ["Button", "ButtonLink"])) return

    const variants = [`button`]

    // Check if node has a variant attribute.
    const variantNode = findNodeAttributePath(node, "variant")
    if (
      variantNode &&
      "value" in variantNode.value &&
      typeof variantNode.value.value === "string"
    ) {
      variants.push(...variantNode.value.value.split(" "))
      variantNode.value.value = variants.join(".")
      return
    }

    node.value.attributes.unshift(
      j.jsxAttribute(
        j.jsxIdentifier("variant"),
        j.stringLiteral(variants.join(" "))
      )
    )
  }

  // Transforms `<Container />` to `<div variant="container" />`.
  function transformContainerVariants(node): void {
    if (!nodeIsOfIdentifierTypes(node, ["Container"])) return

    const variants = [`container`]

    node.value.attributes.unshift(
      j.jsxAttribute(
        j.jsxIdentifier("variant"),
        j.stringLiteral(variants.join(" "))
      )
    )
  }

  // Transforms `<input />` to `<input variant="input" />`.
  function transformInputVariants(
    node,
    types: string[],
    variant: string
  ): void {
    if (!nodeIsOfIdentifierTypes(node, types)) return

    node.value.attributes.unshift(
      j.jsxAttribute(j.jsxIdentifier("variant"), j.stringLiteral(variant))
    )
  }

  // Renames props.
  // Example `d` to `display`
  function transformProps(node): void {
    Object.keys(PROPS_MAPPING).forEach((name) => {
      if (name === "d" && nodeIsOfIdentifierTypes(node, ["Path"])) return
      const attrNode = findNodeAttributePath(node, name)
      if (
        attrNode &&
        "name" in attrNode.name &&
        typeof attrNode.name.name === "string"
      ) {
        attrNode.name.name = PROPS_MAPPING[name]
        return
      }
    })
  }

  function transformPseudoClasses(node): void {
    Object.keys(PSEUDO_CLASSES_MAPPING).forEach((name) => {
      const pseudoProps = []
      const otherProps = []
      node.value.attributes.forEach((node) => {
        return node.name && node.name.name.startsWith(name)
          ? pseudoProps.push(node)
          : otherProps.push(node)
      })
      if (!pseudoProps.length) {
        return
      }

      node.value.attributes = otherProps

      const values = []

      pseudoProps.forEach((prop) => {
        const propName = prop.name.name.replace(name, "")
        values.push(
          j.property(
            "init",
            j.identifier(propName.charAt(0).toLowerCase() + propName.slice(1)),
            j.literal(prop.value.value)
          )
        )
      })

      if (values.length) {
        node.value.attributes.push(
          j.jsxAttribute(
            j.jsxIdentifier(`_${name}`),
            j.jsxExpressionContainer(j.objectExpression(values))
          )
        )
      }
    })
  }

  // Removes component imports.
  function cleanComponentImports(node): void {
    if (node.value.source.value !== "@reflexjs/components") return

    node.value.source.value = "reflexjs"
    node.value.specifiers = node.value.specifiers.filter(
      (specifier) => !Object.keys(MAPPING).includes(specifier.imported.name)
    )

    if (node.value.specifiers.length === 0) {
      j(node).remove()
    }
  }

  root
    .find(j.JSXOpeningElement)
    .forEach(transformHeadingVariants)
    .forEach(transformButtonVariants)
    .forEach(transformContainerVariants)
    .forEach((node) => transformInputVariants(node, ["Input"], "input"))
    .forEach((node) => transformInputVariants(node, ["Textarea"], "textarea"))
    .forEach((node) => transformInputVariants(node, ["Select"], "select"))
    .forEach(transformProps)
    .forEach(transformPseudoClasses)
    .forEach(transformComponentToJSX)

  root.find(j.ImportDeclaration).forEach(cleanComponentImports)

  root.find(j.JSXClosingElement).forEach(transformComponentToJSX)

  const result = root.toSource({})

  if (!isMdx) return result

  mdxContent = mdxContent.replace(/\/<!-- preview/gm, "// <!-- preview")

  return matter.stringify(
    result.replace(/<\/?CodeModeWrapper>/g, "").replace(/\/\/ </gm, "<"),
    data
  )
}
