import { Scene, TokenLine } from "@components"

export const themeScenes: Scene[] = [
  {
    theme: (
      <>
        <TokenLine value="const theme = {" />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    primary: "#06f"`} />
        <TokenLine value="  }," />
        <TokenLine />
        <TokenLine value={`  fontSizes: {`} />
        <TokenLine value={`    sm: "0.8rem",`} />
        <TokenLine value={`    lg: "2.4rem"`} />
        <TokenLine value="  }" />
        <TokenLine />
        <TokenLine value={`  radii: {`} />
        <TokenLine value={`    sm: "1rem",`} />
        <TokenLine value={`    xl: "4rem"`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<button>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button color="white" px="8" py="3">
        Button
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value="const theme = {" />
        <TokenLine value={`  colors: {`} />
        <TokenLine
          value={`    primary: "#06f"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value="  }," />
        <TokenLine />
        <TokenLine value={`  fontSizes: {`} />
        <TokenLine value={`    sm: "0.8rem",`} />
        <TokenLine value={`    lg: "2.4rem"`} />
        <TokenLine value="  }" />
        <TokenLine />
        <TokenLine value={`  radii: {`} />
        <TokenLine value={`    sm: "1rem",`} />
        <TokenLine value={`    xl: "4rem"`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<button>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button color="white" px="8" py="3">
        Button
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value="const theme = {" />
        <TokenLine value={`  colors: {`} />
        <TokenLine
          value={`    primary: "#06f"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value="  }," />
        <TokenLine />
        <TokenLine value={`  fontSizes: {`} />
        <TokenLine value={`    sm: "0.8rem",`} />
        <TokenLine value={`    lg: "2.4rem"`} />
        <TokenLine value="  }" />
        <TokenLine />
        <TokenLine value={`  radii: {`} />
        <TokenLine value={`    sm: "1rem",`} />
        <TokenLine value={`    xl: "4rem"`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<button`} />
        <TokenLine
          value={`  bg="`}
          suffix={`"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            shade: "primary",
          }}
        />
        <TokenLine value={`>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button color="white" px="8" py="3" bg="primary">
        Button
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value="const theme = {" />
        <TokenLine value={`  colors: {`} />
        <TokenLine
          value={`    primary: "#06f"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value="  }," />
        <TokenLine />
        <TokenLine value={`  fontSizes: {`} />
        <TokenLine value={`    sm: "0.8rem",`} />
        <TokenLine
          value={`    lg: "2.4rem"`}
          token={{
            name: "theme.fontSizes.lg",
            value: "lg",
            adjustPosition: true,
            shade: "secondary",
          }}
        />
        <TokenLine value="  }" />
        <TokenLine />
        <TokenLine value={`  radii: {`} />
        <TokenLine value={`    sm: "1rem",`} />
        <TokenLine value={`    xl: "4rem"`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<button`} />
        <TokenLine
          value={`  bg="`}
          suffix={`"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            shade: "primary",
          }}
        />
        <TokenLine value={`>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button color="white" px="8" py="3" bg="primary">
        Button
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value="const theme = {" />
        <TokenLine value={`  colors: {`} />
        <TokenLine
          value={`    primary: "#06f"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value="  }," />
        <TokenLine />
        <TokenLine value={`  fontSizes: {`} />
        <TokenLine value={`    sm: "0.8rem",`} />
        <TokenLine
          value={`    lg: "2.4rem"`}
          token={{
            name: "theme.fontSizes.lg",
            value: "lg",
            adjustPosition: true,
            shade: "secondary",
          }}
        />
        <TokenLine value="  }" />
        <TokenLine />
        <TokenLine value={`  radii: {`} />
        <TokenLine value={`    sm: "1rem",`} />
        <TokenLine value={`    xl: "4rem"`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<button`} />
        <TokenLine
          value={`  bg="`}
          suffix={`"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            shade: "primary",
          }}
        />
        <TokenLine
          value={`  fontSize="`}
          suffix={`"`}
          token={{
            name: "theme.fontSizes.lg",
            value: "lg",
            shade: "secondary",
          }}
        />
        <TokenLine value={`>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button color="white" px="8" py="3" bg="primary" fontSize="2.4rem">
        Button
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value="const theme = {" />
        <TokenLine value={`  colors: {`} />
        <TokenLine
          value={`    primary: "#06f"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value="  }," />
        <TokenLine />
        <TokenLine value={`  fontSizes: {`} />
        <TokenLine value={`    sm: "0.8rem",`} />
        <TokenLine
          value={`    lg: "2.4rem"`}
          token={{
            name: "theme.fontSizes.lg",
            value: "lg",
            adjustPosition: true,
            shade: "secondary",
          }}
        />
        <TokenLine value="  }" />
        <TokenLine />
        <TokenLine value={`  radii: {`} />
        <TokenLine value={`    sm: "1rem",`} />
        <TokenLine
          value={`    xl: "4rem"`}
          token={{
            name: "theme.radii.xl",
            value: "xl",
            adjustPosition: true,
            shade: "accent",
          }}
        />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<button`} />
        <TokenLine
          value={`  bg="`}
          suffix={`"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            shade: "primary",
          }}
        />
        <TokenLine
          value={`  fontSize="`}
          suffix={`"`}
          token={{
            name: "theme.fontSizes.lg",
            value: "lg",
            shade: "secondary",
          }}
        />
        <TokenLine value={`>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button color="white" px="8" py="3" bg="primary" fontSize="2.4rem">
        Button
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value="const theme = {" />
        <TokenLine value={`  colors: {`} />
        <TokenLine
          value={`    primary: "#06f"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value="  }," />
        <TokenLine />
        <TokenLine value={`  fontSizes: {`} />
        <TokenLine value={`    sm: "0.8rem",`} />
        <TokenLine
          value={`    lg: "2.4rem"`}
          token={{
            name: "theme.fontSizes.lg",
            value: "lg",
            adjustPosition: true,
            shade: "secondary",
          }}
        />
        <TokenLine value="  }" />
        <TokenLine />
        <TokenLine value={`  radii: {`} />
        <TokenLine value={`    sm: "1rem",`} />
        <TokenLine
          value={`    xl: "4rem"`}
          token={{
            name: "theme.radii.xl",
            value: "xl",
            adjustPosition: true,
            shade: "accent",
          }}
        />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<button`} />
        <TokenLine
          value={`  bg="`}
          suffix={`"`}
          token={{
            name: "theme.colors.primary",
            value: "primary",
            shade: "primary",
          }}
        />
        <TokenLine
          value={`  fontSize="`}
          suffix={`"`}
          token={{
            name: "theme.fontSizes.lg",
            value: "lg",
            shade: "secondary",
          }}
        />
        <TokenLine
          value={`  rounded="`}
          suffix={`"`}
          token={{
            name: "theme.radii.xl",
            value: "xl",
            shade: "accent",
          }}
        />
        <TokenLine value={`>`} />
        <TokenLine value={`  Button`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button
        color="white"
        px="8"
        py="3"
        bg="primary"
        fontSize="2.4rem"
        rounded="4rem"
      >
        Button
      </button>
    ),
  },
]
