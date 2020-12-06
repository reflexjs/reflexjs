import * as React from "react"
import { Grid } from "reflexjs"

interface ToggleProps {
  text: string
  size: string | number
}

interface ResponsiveTogglesProps extends React.HTMLAttributes<HTMLDivElement> {
  toggles: ToggleProps[]
  handler: React.Dispatch<React.SetStateAction<string | number>>
}

export function ResponsiveToggles({
  toggles,
  handler,
  ...props
}: ResponsiveTogglesProps) {
  const [activeSize, setActiveSize] = React.useState("xl")

  return (
    <Grid
      col={toggles.length}
      bg="border"
      gap="1px"
      p="1px"
      rounded="md"
      overflow="hidden"
      {...props}
    >
      {toggles.map(({ text, size }, index) => (
        <button
          key={text}
          id={`button-${text}`}
          bg={activeSize === text ? "secondary" : "background"}
          color={activeSize === text ? "white" : "text"}
          fontSize="sm"
          border="0"
          m="0"
          py="2"
          px="3"
          rounded="0"
          roundedLeft={index === 0 && "md"}
          roundedRight={index === toggles.length - 1 && "md"}
          onClick={() => {
            setActiveSize(text)
            handler(size)
          }}
        >
          {text}
        </button>
      ))}
    </Grid>
  )
}
