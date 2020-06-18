import { allPropsName } from "./all-props-name"

const regex = new RegExp(`^(${allPropsName.join("|")})$`)

// Helper to omit props.
// See https://github.com/styled-system/styled-system/tree/master/packages/props.
export const omit = (props) => {
  const next = {}
  for (let key in props) {
    if (regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}

// Helper to pick props.
// See https://github.com/styled-system/styled-system/tree/master/packages/props.
export const pick = (props) => {
  const next = {}
  for (let key in props) {
    if (!regex.test(key)) continue
    next[key] = props[key]
  }
  return next
}

export const split = (props) => [pick(props), omit(props)]
