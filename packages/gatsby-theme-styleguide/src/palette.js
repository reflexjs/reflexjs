import * as React from "react"
import { useThemeUI, CopyButton } from "@reflexjs/gatsby-theme-core"
import { Grid, Div, Span, Flexbox } from "@reflexjs/components"

export const Palette = () => {
  const {
    theme: { colors },
  } = useThemeUI()

  return (
    <Grid col="repeat(5, 1fr)" gap="8">
      {Object.keys(colors).map(
        (name, index) =>
          typeof colors[name] === "string" && (
            <Div key={index}>
              <Div
                h="150px"
                w="100%"
                rounded="md"
                bg={colors[name]}
                border="1px solid"
                borderColor="border"
              />
              <Flexbox
                justifyContent="space-between"
                alignItems="flex-start"
                mt="2"
                fontSize="sm"
              >
                <Span>
                  {name} ({colors[name]})
                </Span>
                <CopyButton variant="icon" color="text" value={name} />
              </Flexbox>
            </Div>
          )
      )}
    </Grid>
  )
}
