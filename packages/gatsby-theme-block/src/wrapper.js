import * as React from "react"

export const Wrapper = ({ children, ...props }) => {
  // We have named exports.
  const [DynamicBlock] = Object.values(props).filter(
    (prop) => typeof prop === "function"
  )
  if (DynamicBlock) {
    return <DynamicBlock {...props}>{children}</DynamicBlock>
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
