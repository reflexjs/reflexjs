const fs = require("fs")
const path = require("path")
const remark = require("remark")
const mdx = require("remark-mdx")
const searchable = require("..")

const doc = fs.readFileSync(path.join(__dirname, "./fixture.mdx"), "utf8")

it("extracts searchable sections from mdx", () => {
  const result = remark().use(mdx).use(searchable).processSync(doc)

  expect(result.data).toMatchSnapshot()
})
