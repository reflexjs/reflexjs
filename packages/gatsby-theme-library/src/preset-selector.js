/** @jsx jsx */
import { jsx, VisuallyHidden } from "reflexjs"
import * as React from "react"
import presets from "./presets"

export const PresetSelector = ({ onChange, ...props }) => (
  <React.Fragment>
    <VisuallyHidden>
      <label htmlFor="preset-selector">Select preset</label>
    </VisuallyHidden>
    <select
      id="preset-selector"
      defaultValue={0}
      onBlur={(e) => {
        onChange(e.currentTarget.value)
      }}
      {...props}
    >
      {presets.map(({ name }, index) => (
        <option value={index} key={index}>
          {name}
        </option>
      ))}
    </select>
  </React.Fragment>
)
