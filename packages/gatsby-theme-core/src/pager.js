import * as React from "react"
import { Flexbox } from "@reflexjs/components"
import { ButtonLink } from "./button-link"
import { Icon } from "./icon"

export const Pager = ({ previousPagePath, nextPagePath, ...props }) => (
  <Flexbox
    justifyContent="space-between"
    alignItems="center"
    my="4|6|10"
    {...props}
  >
    {previousPagePath && (
      <ButtonLink to={previousPagePath} textDecoration="none" variant="link">
        <Icon name="arrow-left" mr="2" /> Previous
      </ButtonLink>
    )}
    {nextPagePath && (
      <ButtonLink
        to={nextPagePath}
        textDecoration="none"
        ml="auto"
        variant="link"
      >
        Next <Icon name="arrow-right" ml="2" />
      </ButtonLink>
    )}
  </Flexbox>
)
