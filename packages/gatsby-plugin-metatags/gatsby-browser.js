const React = require("react")
const withDefaults = require("./options")
const { MetatagsDebugger } = require("./src/metatags-debugger")

exports.wrapPageElement = ({ element }, options) => {
  const { debug } = withDefaults(options)
  return (
    <React.Fragment>
      {element}
      {debug && window && <MetatagsDebugger location={window.location} />}
    </React.Fragment>
  )
}
