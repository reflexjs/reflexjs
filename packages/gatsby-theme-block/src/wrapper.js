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
    const _child = Array.isArray(children) ? children[0] : children
    const _children = React.cloneElement(_child, { ...props })
    return <React.Fragment>{_children}</React.Fragment>
  }
}
