/** @jsx jsx */
import { jsx } from "reflexjs"
import { useTutorial } from "./use-tutorial"
import { Link } from "@reflexjs/gatsby-theme-core"

export const Progress = ({ current }) => {
  const tutorials = useTutorial()

  return (
    <ul
      listStyle="none"
      display="inline-grid"
      m="0"
      p="0"
      gap={["2", "2", "4"]}
      col={`repeat(${tutorials.length}, auto)`}
    >
      {tutorials.map((tutorial, index) => {
        const isCompleted = tutorial.weight < current
        return (
          <li key={index}>
            <Link
              href={tutorial.slug}
              opacity={isCompleted ? 0.5 : 1}
              px="2"
              rounded="md"
              color="text"
              activeStyle={{
                bg: "text",
                color: "background",
                opacity: 1,
              }}
              _hover={{
                bg: "muted",
                color: "text",
              }}
            >
              {tutorial.weight + 1}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
