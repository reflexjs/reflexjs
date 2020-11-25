import * as React from "react"
import createPersistedState from "use-persisted-state"
import omit from "lodash.omit"
import {
  default as ReactIframe,
  FrameContextConsumer,
} from "react-frame-component"
import { CacheProvider, Global } from "@emotion/core"
import createCache from "@emotion/cache"
import {
  ThemeProvider,
  useColorMode,
  Icon,
  VisuallyHidden,
  css,
} from "reflexjs"
import { ThemeSelector, Chrome, ResponsiveToggles } from "."
import themes from "../../library/themes"

const usePreviewThemeId = createPersistedState("preview-theme")

export interface PreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  fullScreenPath?: string
  withThemeSelector?: boolean
  children?: React.ReactNode
}

export function Preview({
  withThemeSelector = true,
  fullScreenPath,
  children,
  ...props
}: PreviewProps) {
  const [colorMode] = useColorMode()
  const [previewThemeId, setPreviewThemeId] = usePreviewThemeId("base")
  const { theme } = themes.find((theme) => theme.id === previewThemeId)
  const [height, setHeight] = React.useState(500)
  const [width, setWidth] = React.useState("100%")
  const iframeRef = React.createRef()

  const handleResize = (iframe) => {
    if (iframe?.current?.node?.contentDocument?.body?.scrollHeight !== 0) {
      setHeight(iframe.current.node.contentDocument.body.scrollHeight)
    }
  }
  React.useEffect(() => handleResize(iframeRef), [children, width])

  // Reverse the color mode for the preset theme.
  let previewTheme = theme
  if (colorMode === "dark" && theme.colors?.modes?.dark) {
    previewTheme = {
      ...theme,
      initialColorModeName: "dark",
      colors: {
        ...theme.colors.modes.dark,
        modes: {
          light: {
            ...omit(theme.colors, ["modes"]),
          },
        },
      },
    }
  }

  return (
    <div px={({ container }) => container.px}>
      <div
        rounded="xl"
        borderWidth="3px"
        maxW={({ container }) => container.maxWidth + 120}
        mx="auto"
        overflow="hidden"
        {...props}
      >
        <div
          display="flex"
          p="4"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth="1"
        >
          {withThemeSelector && (
            <ThemeSelector
              themes={themes}
              defaultTheme={previewThemeId}
              handleChange={setPreviewThemeId}
              borderWidth="2px"
            />
          )}
          <ResponsiveToggles
            handler={setWidth}
            toggles={[
              { text: "xl", size: "100%" },
              { text: "lg", size: 1024 },
              { text: "md", size: 768 },
              { text: "sm", size: 375 },
            ]}
            ml="auto"
          />
          {fullScreenPath && (
            <a
              variant="button.sm"
              href={fullScreenPath}
              target="_blank"
              rel="noreferrer"
              borderWidth="1"
              rounded="md"
              px="2"
              ml="2"
            >
              <Icon name="maximize" size="4" />
              <VisuallyHidden>View fullscreen</VisuallyHidden>
            </a>
          )}
        </div>
        <div bg="muted" overflow="hidden">
          <Chrome width={width} bg="background">
            <div
              id="preview-wrapper"
              sx={{
                iframe: {
                  display: "block",
                },
              }}
            >
              <ReactIframe
                title="Preview"
                frameBorder={0}
                width="100%"
                height={height}
                ref={iframeRef}
                onLoad={() => handleResize(iframeRef)}
                initialContent="<!DOCTYPE html><html><head><link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;900&family=Lora&family=Merriweather:wght@300;400;700;900&display=swap'
            rel='stylesheet'
          /></head><body><div id='container'></div></body></html>"
              >
                <FrameContextConsumer>
                  {(frameContext) => {
                    const cache = createCache({
                      container: frameContext.document.head,
                      key: "preview",
                    })
                    return (
                      <CacheProvider value={cache}>
                        <ThemeProvider theme={previewTheme}>
                          <Global
                            styles={(theme) => {
                              const { root: body, global } = theme.styles
                              return css({
                                ...global,
                                body,
                              })(previewTheme)
                            }}
                          />
                          {children}
                        </ThemeProvider>
                      </CacheProvider>
                    )
                  }}
                </FrameContextConsumer>
              </ReactIframe>
            </div>
          </Chrome>
        </div>
      </div>
    </div>
  )
}
