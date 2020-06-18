import * as React from "react"
import { useTutorial } from "./use-tutorial"
import { Ul, Li } from "@reflexjs/components"
import { Link } from "@reflexjs/gatsby-theme-core"

export const Progress = ({ current }) => {
  const tutorials = useTutorial()

  return (
    <Ul
      listStyle="none"
      d="inline-grid"
      m="0"
      p="0"
      gap={["2", "2", "4"]}
      col={`repeat(${tutorials.length}, auto)`}
    >
      {tutorials.map((tutorial, index) => {
        const isCompleted = tutorial.weight < current
        return (
          <Li key={index}>
            <Link
              href={tutorial.slug}
              opacity={isCompleted ? 0.5 : 1}
              px="2"
              rounded="md"
              color="text"
              hoverBg="muted"
              activeStyle={{
                bg: "text",
                color: "white",
                opacity: 1,
              }}
            >
              {tutorial.weight + 1}
            </Link>
          </Li>
        )
      })}
    </Ul>
  )
}
