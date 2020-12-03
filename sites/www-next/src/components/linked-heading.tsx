import Slugger from "github-slugger"
const slugger = new Slugger()

interface LinkedHeadingProps {
  is: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children?: React.ReactNode
}

export function LinkedHeading({
  is: Component,
  children,
  ...props
}: LinkedHeadingProps) {
  const id = slugger.slug(children)
  return (
    <Component
      id={id}
      variant={`heading.${Component}`}
      fontWeight="semibold"
      _hover={{
        a: {
          visibility: "visible",
        },
      }}
      sx={{
        ":before": {
          display: "block",
          height: "6rem",
          marginTop: "-6rem",
          visibility: "hidden",
          content: "''",
        },
      }}
      {...props}
    >
      {children}
      <a
        href={`#${id}`}
        aria-label="anchor"
        ml="2"
        color="primary"
        display
        fontWeight="normal"
        visibility="hidden"
      >
        #
      </a>
    </Component>
  )
}
