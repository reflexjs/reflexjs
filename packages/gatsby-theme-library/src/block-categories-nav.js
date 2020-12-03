/** @jsx jsx */
import { jsx } from "reflexjs"
import * as React from "react"

export const BlockCategoriesNav = ({ categories, onClick, ...props }) => (
  <>
    <h3 variant="heading.h3" my="4" fontSize="xl">
      Categories
    </h3>
    <ul listStyle="none" p="0" m="0" {...props}>
      {categories.map(({ slug, name }) => (
        <li key={name} mb="2">
          <a
            href={`#${slug}`}
            color="text"
            fontSize="md"
            onClick={(e) => {
              onClick(e)
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  </>
)
