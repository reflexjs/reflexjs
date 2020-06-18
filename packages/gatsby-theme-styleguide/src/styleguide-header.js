import * as React from "react"
import { Link, useColorMode } from "@reflexjs/gatsby-theme-core"
import { Nav, Ul, Li, Header, Button, Svg } from "@reflexjs/components"
import { useStyleguide } from "./use-styleguide"

export const StyleguideHeader = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const styleguides = useStyleguide()

  return (
    <Header
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      <Nav>
        <Ul
          d="inline-grid"
          col={`repeat(${styleguides.length}, auto)`}
          gap="4"
          listStyle="none outside none"
          m="0"
          p="0"
        >
          {styleguides.map(({ title, slug }, index) => (
            <Li key={index}>
              <Link
                to={slug}
                textDecoration="none"
                d="inline-flex"
                mb="2"
                color="text"
                fontWeight="semi"
                activeStyle={{
                  color: "primary",
                }}
              >
                {title}
              </Link>
            </Li>
          ))}
        </Ul>
      </Nav>
      <Button
        onClick={() =>
          setColorMode(colorMode === "default" ? "dark" : "default")
        }
        border="0"
        bg="transparent"
        p="0"
        color="text"
        hoverColor="primary"
        sx={{
          ":focus": {
            outline: "none",
          },
        }}
      >
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </Svg>
      </Button>
    </Header>
  )
}
