import { Source } from "types"
import { Selector, SelectorProps } from "."

export interface SourceSelectorProps extends SelectorProps {
  sources: Source[]
  defaultSource?: string
  handleChange: (id: string) => void
}

export function SourceSelector({
  sources,
  defaultSource,
  handleChange,
  ...props
}: SourceSelectorProps) {
  return (
    <Selector {...props}>
      <label htmlFor="source-selector">Select source:</label>
      <select
        id="source-selector"
        value={defaultSource}
        onChange={(e) => {
          handleChange(e.currentTarget.value)
        }}
      >
        {sources.map((source) => (
          <option value={source.id} key={source.id}>
            {source.label}
          </option>
        ))}
      </select>
    </Selector>
  )
}
