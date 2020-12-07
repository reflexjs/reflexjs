const glob = require("glob")
const fs = require("fs")
const { parse } = require("path")
const sharp = require("sharp")

try {
  const imagePathPrefix = `public/images/library`
  glob.sync(`${imagePathPrefix}/*[!.thumbnail].jpeg`).map((path) => {
    const { name } = parse(path)
    sharp(path)
      .resize(1400)
      .toFile(`${imagePathPrefix}/${name}-thumbnail.jpeg`, (error, info) => {
        if (error) return console.log(error)

        console.info(`✅ Created thumbnail for ${name}.`)
      })
  })
} catch (error) {
  console.error(error)
}
