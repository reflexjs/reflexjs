const React = require("react")
require(`dotenv`).config()

exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  options
) => {
  const { apiKey, indexName, inputSelector, debug } = options

  setHeadComponents([
    <link
      key="docsearch-css"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
    />,
  ])

  setPostBodyComponents([
    <script
      key="docsearch-js"
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
    />,
  ])
}
