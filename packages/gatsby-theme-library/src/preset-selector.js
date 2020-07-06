import * as React from "react"
import { Select, Option, VisuallyHidden, Label } from "@reflexjs/components"
import presets from "./presets"

export const PresetSelector = ({ onChange, ...props }) => (
  <React.Fragment>
    <VisuallyHidden>
      <Label htmlFor="preset-selector">Select preset</Label>
    </VisuallyHidden>
    <Select
      id="preset-selector"
      defaultValue={0}
      onChange={(e) => {
        onChange(e.currentTarget.value)
      }}
      {...props}
    >
      {presets.map(({ name }, index) => (
        <Option value={index} key={index}>
          {name}
        </Option>
      ))}
    </Select>
  </React.Fragment>
)
