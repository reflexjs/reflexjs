import * as React from "react"
import { Select, Option } from "@reflexjs/components"
import presets from "./presets"

export const PresetSelector = ({ onChange, ...props }) => (
  <Select
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
)
