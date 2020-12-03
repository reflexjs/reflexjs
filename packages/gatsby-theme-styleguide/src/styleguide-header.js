/** @jsx jsx */
import { jsx } from "reflexjs"
import { Link, useColorMode } from "@reflexjs/gatsby-theme-core"
import { useStyleguide } from "./use-styleguide"

export const StyleguideHeader = ({ ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const styleguides = useStyleguide()

  return (
    <header
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      {...props}
    >
      <nav>
        <ul
          display="inline-grid"
          col={`repeat(${styleguides.length}, auto)`}
          gap="4"
          listStyle="none outside none"
          m="0"
          p="0"
        >
          {styleguides.map(({ title, slug }, index) => (
            <li key={index}>
              <Link
                to={slug}
                textDecoration="none"
                display="inline-flex"
                mb="2"
                color="text"
                fontWeight="semi"
                activeStyle={{
                  color: "primary",
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        variant="button"
        onClick={() =>
          setColorMode(colorMode === "default" ? "dark" : "default")
        }
        border="0"
        bg="transparent"
        p="0"
        color="text"
        sx={{
          ":focus": {
            outline: "none",
          },
        }}
        _hover={{
          color: "primary",
        }}
      >
        <svg
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
        </svg>
      </button>
    </header>
  )
}
