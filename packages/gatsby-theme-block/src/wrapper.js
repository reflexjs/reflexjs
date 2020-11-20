import * as React from "react"

export const Wrapper = ({ children, ...props }) => {
  const dynamicBlockIndex = Object.keys(props).find(
    (prop) => typeof props[prop] === "function"
  )
  if (dynamicBlockIndex) {
    // We have named exports.
    const { [dynamicBlockIndex]: DynamicBlock, ..._props } = props
    return <DynamicBlock {..._props}>{children}</DynamicBlock>
  }
  if (children) {
    const [_child, ...rest] = Array.isArray(children) ? children : [children]
    children = [
      React.cloneElement(_child, { ...props }),
      ...rest,
    ].map((child, index) => React.cloneElement(child, { key: index }))
    return <React.Fragment>{children}</React.Fragment>
  }
}
