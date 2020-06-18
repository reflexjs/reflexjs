const { icons: feathericons } = require("feather-icons")
const fs = require("fs")

let icons = {}
for (const name in feathericons) {
  icons[name] = feathericons[name]
    .toSvg()
    .replace(/(width="(.*?)") height="(.*?)" /, ``)
}

fs.writeFile(`icons/feathericons.json`, JSON.stringify(icons), (err) => {
  if (err) throw err
  console.log(`Done writing to feathericons.json.`)
})
