import { Scene, TokenLine, TokenProp } from "@components"

export const variantsScenes: Scene[] = [
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    primary: "#06f",`} />
        <TokenLine value={`    secondary: "#fb3640",`} />
        <TokenLine value={`  }`} />
        <TokenLine />
        <TokenLine value={`  button: {`} />
        <TokenLine value={`    rounded: "md",`} />
        <TokenLine value={`    cursor: "pointer",`} />
        <TokenLine value={`    px: 4,`} />
        <TokenLine value={`    px: 3,`} />
        <TokenLine />
        <TokenLine value={`    primary: {`} />
        <TokenLine value={`      bg: "primary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    secondary: {`} />
        <TokenLine value={`      bg: "secondary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    lg: {`} />
        <TokenLine value={`      px: 5`} />
        <TokenLine value={`      py: 4`} />
        <TokenLine value={`    }`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<button>Primary</button>`} />
      </>
    ),
    preview: (
      <button bg="#111" color="#fff">
        Primary
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    primary: "#06f",`} />
        <TokenLine value={`    secondary: "#fb3640",`} />
        <TokenLine value={`  }`} />
        <TokenLine />
        <TokenLine
          value={`  button: {`}
          token={{
            name: "theme.button",
            value: "button",
            adjustPosition: true,
          }}
        />
        <TokenLine value={`    rounded: "md",`} />
        <TokenLine value={`    cursor: "pointer",`} />
        <TokenLine value={`    px: 4,`} />
        <TokenLine value={`    px: 3,`} />
        <TokenLine />
        <TokenLine value={`    primary: {`} />
        <TokenLine value={`      bg: "primary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    secondary: {`} />
        <TokenLine value={`      bg: "secondary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    lg: {`} />
        <TokenLine value={`      px: 5`} />
        <TokenLine value={`      py: 4`} />
        <TokenLine value={`    }`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine value={`<button>Primary</button>`} />
      </>
    ),
    preview: (
      <button bg="#111" color="#fff">
        Primary
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    primary: "#06f",`} />
        <TokenLine value={`    secondary: "#fb3640",`} />
        <TokenLine value={`  }`} />
        <TokenLine />
        <TokenLine
          value={`  button: {`}
          token={{
            name: "theme.button",
            value: "button",
            adjustPosition: true,
          }}
        />
        <TokenLine value={`    rounded: "md",`} />
        <TokenLine value={`    cursor: "pointer",`} />
        <TokenLine value={`    px: 4,`} />
        <TokenLine value={`    px: 3,`} />
        <TokenLine />
        <TokenLine value={`    primary: {`} />
        <TokenLine value={`      bg: "primary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    secondary: {`} />
        <TokenLine value={`      bg: "secondary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    lg: {`} />
        <TokenLine value={`      px: 5`} />
        <TokenLine value={`      py: 4`} />
        <TokenLine value={`    }`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine
          value={`<button variant="`}
          suffix={`">`}
          token={{
            name: "theme.button",
            value: "button",
          }}
        />
        <TokenLine value={`  Primary`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button bg="#111" color="#fff" variant="button">
        Primary
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    primary: "#06f",`} />
        <TokenLine value={`    secondary: "#fb3640",`} />
        <TokenLine value={`  }`} />
        <TokenLine />
        <TokenLine
          value={`  button: {`}
          token={{
            name: "theme.button",
            value: "button",
            adjustPosition: true,
          }}
        />
        <TokenLine value={`    rounded: "md",`} />
        <TokenLine value={`    cursor: "pointer",`} />
        <TokenLine value={`    px: 4,`} />
        <TokenLine value={`    px: 3,`} />
        <TokenLine />
        <TokenLine
          value={`    primary: {`}
          token={{
            name: "theme.button.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value={`      bg: "primary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    secondary: {`} />
        <TokenLine value={`      bg: "secondary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    lg: {`} />
        <TokenLine value={`      px: 5`} />
        <TokenLine value={`      py: 4`} />
        <TokenLine value={`    }`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine
          value={`<button variant="`}
          suffix={`">`}
          token={{
            name: "theme.button",
            value: "button",
          }}
        />
        <TokenLine value={`  Primary`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <button bg="#111" color="#fff" variant="button">
        Primary
      </button>
    ),
  },
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    primary: "#06f",`} />
        <TokenLine value={`    secondary: "#fb3640",`} />
        <TokenLine value={`  }`} />
        <TokenLine />
        <TokenLine
          value={`  button: {`}
          token={{
            name: "theme.button",
            value: "button",
            adjustPosition: true,
          }}
        />
        <TokenLine value={`    rounded: "md",`} />
        <TokenLine value={`    cursor: "pointer",`} />
        <TokenLine value={`    px: 4,`} />
        <TokenLine value={`    px: 3,`} />
        <TokenLine />
        <TokenLine
          value={`    primary: {`}
          token={{
            name: "theme.button.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value={`      bg: "primary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    secondary: {`} />
        <TokenLine value={`      bg: "secondary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    lg: {`} />
        <TokenLine value={`      px: 5`} />
        <TokenLine value={`      py: 4`} />
        <TokenLine value={`    }`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine
          value={`<button variant="`}
          suffix={`">`}
          tokens={[
            {
              name: "theme.button",
              value: "button",
              animated: false,
            },
            {
              name: "theme.button.primary",
              value: "primary",
              shade: "primary",
            },
          ]}
        />
        <TokenLine value={`  Primary`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: <button variant="button.primary">Primary</button>,
  },
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    primary: "#06f",`} />
        <TokenLine value={`    secondary: "#fb3640",`} />
        <TokenLine value={`  }`} />
        <TokenLine />
        <TokenLine
          value={`  button: {`}
          token={{
            name: "theme.button",
            value: "button",
            adjustPosition: true,
          }}
        />
        <TokenLine value={`    rounded: "md",`} />
        <TokenLine value={`    cursor: "pointer",`} />
        <TokenLine value={`    px: 4,`} />
        <TokenLine value={`    px: 3,`} />
        <TokenLine />
        <TokenLine
          value={`    primary: {`}
          token={{
            name: "theme.button.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value={`      bg: "primary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    secondary: {`} />
        <TokenLine value={`      bg: "secondary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine
          value={`    lg: {`}
          token={{
            name: "theme.button.lg",
            value: "lg",
            adjustPosition: true,
            shade: "accent",
          }}
        />
        <TokenLine value={`      px: 5`} />
        <TokenLine value={`      py: 4`} />
        <TokenLine value={`    }`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine
          value={`<button variant="`}
          suffix={`">`}
          tokens={[
            {
              name: "theme.button",
              value: "button",
              animated: false,
            },
            {
              name: "theme.button.primary",
              value: "primary",
              shade: "primary",
            },
          ]}
        />
        <TokenLine value={`  Primary`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: <button variant="button.primary">Primary</button>,
  },
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    primary: "#06f",`} />
        <TokenLine value={`    secondary: "#fb3640",`} />
        <TokenLine value={`  }`} />
        <TokenLine />
        <TokenLine
          value={`  button: {`}
          token={{
            name: "theme.button",
            value: "button",
            adjustPosition: true,
          }}
        />
        <TokenLine value={`    rounded: "md",`} />
        <TokenLine value={`    cursor: "pointer",`} />
        <TokenLine value={`    px: 4,`} />
        <TokenLine value={`    px: 3,`} />
        <TokenLine />
        <TokenLine
          value={`    primary: {`}
          token={{
            name: "theme.button.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value={`      bg: "primary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine value={`    secondary: {`} />
        <TokenLine value={`      bg: "secondary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine
          value={`    lg: {`}
          token={{
            name: "theme.button.lg",
            value: "lg",
            shade: "accent",
            adjustPosition: true,
          }}
        />
        <TokenLine value={`      px: 5`} />
        <TokenLine value={`      py: 4`} />
        <TokenLine value={`    }`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine
          value={`<button variant="`}
          suffix={`">`}
          tokens={[
            {
              name: "theme.button",
              value: "button",
              animated: false,
            },
            {
              name: "theme.button.primary",
              value: "primary",
              animated: false,
              shade: "primary",
            },
            {
              name: "theme.button.lg",
              value: "lg",
              shade: "accent",
            },
          ]}
        />
        <TokenLine value={`  Primary`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: <button variant="button.primary.lg">Primary</button>,
  },
  {
    theme: (
      <>
        <TokenLine value={`const theme = {`} />
        <TokenLine value={`  colors: {`} />
        <TokenLine value={`    primary: "#06f",`} />
        <TokenLine value={`    secondary: "#fb3640",`} />
        <TokenLine value={`  }`} />
        <TokenLine />
        <TokenLine
          value={`  button: {`}
          token={{
            name: "theme.button",
            value: "button",
            adjustPosition: true,
          }}
        />
        <TokenLine value={`    rounded: "md",`} />
        <TokenLine value={`    cursor: "pointer",`} />
        <TokenLine value={`    px: 4,`} />
        <TokenLine value={`    px: 3,`} />
        <TokenLine />
        <TokenLine
          value={`    primary: {`}
          token={{
            name: "theme.button.primary",
            value: "primary",
            adjustPosition: true,
            shade: "primary",
          }}
        />
        <TokenLine value={`      bg: "primary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine
          value={`    secondary: {`}
          token={{
            name: "theme.button2.secondary",
            value: "secondary",
            adjustPosition: true,
            shade: "secondary",
          }}
        />
        <TokenLine value={`      bg: "secondary"`} />
        <TokenLine value={`    }`} />
        <TokenLine />
        <TokenLine
          value={`    lg: {`}
          token={{
            name: "theme.button.lg",
            value: "lg",
            adjustPosition: true,
            shade: "accent",
          }}
        />
        <TokenLine value={`      px: 5`} />
        <TokenLine value={`      py: 4`} />
        <TokenLine value={`    }`} />
        <TokenLine value={`  }`} />
        <TokenLine value={`}`} />
      </>
    ),
    code: (
      <>
        <TokenLine
          value={`<button variant="`}
          suffix={`">`}
          tokens={[
            {
              name: "theme.button",
              value: "button",
              animated: false,
            },
            {
              name: "theme.button.primary",
              value: "primary",
              animated: false,
              shade: "primary",
            },
            {
              name: "theme.button.lg",
              value: "lg",
              shade: "accent",
            },
          ]}
        />
        <TokenLine value={`  Primary`} />
        <TokenLine value={`</button>`} />
        <TokenLine />
        <TokenLine
          value={`<button variant="`}
          suffix={`">`}
          tokens={[
            {
              name: "theme.button",
              value: "button",
              animated: false,
            },
            {
              name: "theme.button2.secondary",
              value: "secondary",
              shade: "secondary",
            },
          ]}
        />
        <TokenLine value={`  Secondary`} />
        <TokenLine value={`</button>`} />
      </>
    ),
    preview: (
      <div>
        <button variant="button.primary.lg">Primary</button>
        <button variant="button.secondary" ml="4">
          Secondary
        </button>
      </div>
    ),
  },
]
