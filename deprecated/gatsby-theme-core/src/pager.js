/** @jsx jsx */
import { jsx, Flexbox } from "reflexjs"
import { Icon } from "./icon"
import { Link } from "./link"

export const Pager = ({ previousPagePath, nextPagePath, ...props }) => (
  <Flexbox
    justifyContent="space-between"
    alignItems="center"
    my="4|6|10"
    {...props}
  >
    {previousPagePath && (
      <Link to={previousPagePath} textDecoration="none" variant="button.link">
        <Icon name="arrow-left" mr="2" /> Previous
      </Link>
    )}
    {nextPagePath && (
      <Link
        to={nextPagePath}
        textDecoration="none"
        ml="auto"
        variant="button.link"
      >
        Next <Icon name="arrow-right" ml="2" />
      </Link>
    )}
  </Flexbox>
)
