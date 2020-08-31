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
    <script
      key="docsearch-init"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        var observer = new MutationObserver(function (mutations, instance) {
          var docuSearchElem = document.querySelector(
            "${inputSelector}"
          )
          if (docuSearchElem) {
            docsearch({
              apiKey: "${apiKey}",
              indexName: "${indexName}",
              inputSelector: "${inputSelector}",
              debug: ${debug === true ? "true" : "false"},
            })
            instance.disconnect()
            return
          }
        })
        document.addEventListener("DOMContentLoaded", function () {
          observer.observe(document, {
            childList: true,
            subtree: true,
          })
        })
        `,
      }}
    />,
  ])
}
