const fs = require("fs-extra")
const glob = require("glob")
const { parse, basename } = require("path")

const getPagePath = (category) => `./content/pages/${category}.mdx`

// Copy all blocks from www for testing.
fs.copySync("../../sites/www/library/blocks", "./content/blocks")

const categories = glob.sync("./content/blocks/*").map((path) => {
  return basename(path)
})

// Write the categories to fixtures.
fs.outputJSONSync("./cypress/fixtures/categories.json", categories)

const paths = glob.sync("./content/blocks/**/*.mdx").map((path) => {
  const { name, dir } = parse(path)
  return {
    name,
    category: basename(dir),
  }
})

// Setup category pages.
categories.forEach((category) => {
  const path = getPagePath(category)
  const data = `---\ntitle: ${category}\n---\n# ${category}\n`

  // Delete page.
  fs.removeSync(path)

  // Write file.
  fs.outputFileSync(path, data)
})

// Create pages for each category.
paths.forEach(({ name, category }) => {
  const path = getPagePath(category)
  const data = `\n\n${name}\n<Block src="${category}/${name}" />\n`
  fs.appendFileSync(path, data)
})
