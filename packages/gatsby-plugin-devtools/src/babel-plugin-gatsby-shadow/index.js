const { isAbsolute, relative, join } = require("path")

const DATA_SOURCE_ATTRIBUTE = "data-source"
const DATA_SHADOW_ATTRIBUTE = "data-shadow"

module.exports = ({ types: t }) => {
  const createAttribute = (name, value) => {
    return t.jSXAttribute(t.jSXIdentifier(name), t.stringLiteral(value))
  }

  const isShadowableCandidate = (path) =>
    path.parentPath.parentPath.isReturnStatement() ||
    t.isJSXFragment(path.parentPath.parent) ||
    !hasJSXComponentParent(path)

  return {
    visitor: {
      JSXOpeningElement(path, state) {
        debugger
        if (isJSXFragment(path)) {
          return
        }

        const { sources } = state.opts

        if (isShadowableCandidate(path)) {
          const { filename, cwd } = state.file.opts

          // Find gatsby plugin.
          const plugins = sources.filter((source) => {
            const rel = relative(source.resolve, filename)
            return rel && !rel.startsWith("..") && !isAbsolute(rel)
          })

          if (!plugins.length) return

          const [{ name, resolve }] = plugins
          const sourcePath = relative(cwd, filename)
          const shadowPath = join(
            "src",
            name,
            relative(`${resolve}/src`, filename)
          )

          path.node.attributes.push(
            createAttribute(DATA_SOURCE_ATTRIBUTE, sourcePath)
          )
          path.node.attributes.push(
            createAttribute(DATA_SHADOW_ATTRIBUTE, shadowPath)
          )
        }
      },
    },
  }
}

const getNodeNameFromPath = (path) => {
  const openingElement = path.openingElement || path.container?.openingElement

  if (!openingElement) return null

  return (
    (openingElement.name && openingElement.name.name) ||
    (openingElement.name.property && openingElement.name.property.name)
  )
}

const isJSXFragment = (path) => getNodeNameFromPath(path) === "Fragment"

const hasJSXComponentParent = (path) => {
  const parentName = getNodeNameFromPath(path.parentPath.parent)
  return (
    path.parentPath.parentPath.isJSXElement() &&
    parentName === parentName.toLowerCase()
  )
}
