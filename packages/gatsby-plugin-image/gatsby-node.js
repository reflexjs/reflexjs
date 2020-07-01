const withDefaults = require("./theme-options")
const { ensureContentPath } = require("@reflexjs/gatsby-helpers")

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  const { imagesPath } = withDefaults(themeOptions)
  ensureContentPath(imagesPath, reporter)
}
