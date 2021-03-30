const remark = require("remark")
const mdx = require("remark-mdx")
const frontmatter = require("remark-frontmatter")
const searchable = require("remark-mdx-searchable")

module.exports = (doc) => {
  const result = remark()
    .use(frontmatter)
    .use(mdx)
    .use(searchable)
    .processSync(doc)

  return result.data
}
