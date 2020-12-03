/** @jsx jsx */
import { jsx, Grid, Flexbox } from "reflexjs"
import { useTheme, CopyButton } from "@reflexjs/gatsby-theme-core"

export const Palette = () => {
  const {
    theme: { colors },
  } = useTheme()

  return (
    <Grid col="repeat(5, 1fr)" gap="8">
      {Object.keys(colors).map(
        (name, index) =>
          typeof colors[name] === "string" && (
            <div key={index}>
              <div
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
                <span>
                  {name} ({colors[name]})
                </span>
                <CopyButton variant="icon" color="text" value={name} />
              </Flexbox>
            </div>
          )
      )}
    </Grid>
  )
}
