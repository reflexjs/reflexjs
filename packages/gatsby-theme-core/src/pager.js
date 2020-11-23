/** @jsx jsx */
import { jsx, Flexbox } from "reflexjs"
import { Icon } from "./icon"

export const Pager = ({ previousPagePath, nextPagePath, ...props }) => (
  <Flexbox
    justifyContent="space-between"
    alignItems="center"
    my="4|6|10"
    {...props}
  >
    {previousPagePath && (
      <a to={previousPagePath} textDecoration="none" variant="button.link">
        <Icon name="arrow-left" mr="2" /> Previous
      </a>
    )}
    {nextPagePath && (
      <a
        to={nextPagePath}
        textDecoration="none"
        ml="auto"
        variant="button.link"
      >
        Next <Icon name="arrow-right" ml="2" />
      </a>
    )}
  </Flexbox>
)
