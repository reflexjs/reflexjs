import * as React from "react"
import { Div, Span, H4, Cite, H3, P, Button } from "@reflexjs/components"
import { useMetatags } from "./use-metatags"
import { useImage, Image } from "@reflexjs/gatsby-plugin-image"

export const MetatagsPreviewGoogle = ({ title, description, location }) => {
  const { host, pathname } = location
  const chunks = pathname.split("/").slice(1, -1)

  return (
    <Div
      position="relative"
      sx={{
        "*": {
          fontFamily: "arial,sans-serif",
        },
      }}
    >
      <Cite
        color="#202124"
        fontSize="14px"
        pt="1px"
        lineHeight="1"
        fontStyle="normal"
      >
        {host}
        {chunks.length && (
          <Span color="#5f6368">{` › ${chunks.join(" › ")}`}</Span>
        )}
      </Cite>
      <H3
        fontSize="20px"
        pt="4px"
        lineHeight="1.2"
        m="0"
        mb="5px"
        fontWeight="normal"
        color="#1a0dab"
      >
        {title}
      </H3>
      <Span d="block" fontSize="14px" color="#4d5156" lineHeight="1.4">
        {description}
      </Span>
    </Div>
  )
}

export const MetatagsPreviewFacebook = ({
  title,
  description,
  image,
  location,
}) => {
  const { host } = location
  const [thumbnail] = useImage(image)
  return (
    <Div
      fontSize="14px"
      border="1px solid #dadde1"
      sx={{
        "*": {
          fontFamily: "Helvetica, Arial, sans-serif",
        },
      }}
      w="400px"
    >
      {thumbnail && (
        <Image fluid={thumbnail.childImageSharp.fluid} w="100%" h="200px" />
      )}
      <Div borderTop="1px solid #dadde1" p="10px 12px" bg="#f2f3f5">
        <Span fontSize="12px" color="#606770" textTransform="uppercase">
          {host}
        </Span>
        <H4
          fontSize="16px"
          lineHeight="20px"
          mt="5px"
          mb="0"
          color="#1d2129"
          fontWeight="600"
        >
          {title}
        </H4>
        <P color="#606770" fontSize="14px" mt="3px" mb="0" lineHeight="20px">
          {description}
        </P>
      </Div>
    </Div>
  )
}

export const MetatagsPreviewTwitter = ({
  title,
  description,
  image,
  location,
}) => {
  const { host } = location
  const [thumbnail] = useImage(image)
  return (
    <Div
      fontSize="14px"
      rounded="6px"
      overflow="hidden"
      border="1px solid #e1e8ed"
      sx={{
        "*": {
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif`,
        },
      }}
      w="400px"
    >
      {thumbnail && (
        <Image fluid={thumbnail.childImageSharp.fluid} w="100%" h="200px" />
      )}
      <Div borderTop="1px solid #dadde1" p="10px 12px">
        <H4
          fontSize="14px"
          lineHeight="18px"
          mt="0"
          mb="2px"
          color="#18283E"
          fontWeight="700"
        >
          {title}
        </H4>
        <P color="#18283E" fontSize="14px" mt="4px" mb="0" lineHeight="18px">
          {description}
        </P>
        <Span
          d="block"
          fontSize="14px"
          color="#8899A6"
          textTransform="lowercase"
          mt="3px"
        >
          {host}
        </Span>
      </Div>
    </Div>
  )
}

export const MetatagsSection = ({ heading, children, ...props }) => (
  <Div mb="30px" {...props}>
    <H4
      fontSize="16px"
      color="black"
      fontWeight="semibold"
      mt="0"
      position="relative"
      overflow="hidden"
    >
      <Span bg="white" pr="10px">
        {heading}
      </Span>
      <Span h="1px" w="100%" bg="#ebece9" position="absolute" top="50%" />
    </H4>
    {children}
  </Div>
)

export const MetatagsDebugger = ({ location }) => {
  const { pathname } = location
  const [metatags] = useMetatags(pathname)
  const [isOpen, setIsOpen] = React.useState(false)

  if (!metatags) return null

  return (
    <React.Fragment>
      <Div
        bg="white"
        position="fixed"
        top="20px"
        bottom="70px"
        right="20px"
        maxW="440px"
        p="20px"
        zIndex="10000"
        boxShadow="0 1px 20px 8px rgba(0,0,0, .1), 0 1px 2px 0 rgba(0,0,0, .06)"
        border="1px solid #ebece9"
        rounded="5px"
        transform={`scale(${isOpen ? 1 : 0.95})`}
        visibility={isOpen ? "visible" : "hidden"}
        opacity={isOpen ? 1 : 0}
        transition="all .2s ease-in"
        transformOrigin="100% 100%"
        overflow="scroll"
      >
        <H4 fontSize="14px" mt="0" color="#585757" fontWeight="normal">
          Metatags preview
        </H4>
        <MetatagsSection heading="Google">
          <MetatagsPreviewGoogle {...metatags} location={location} />
        </MetatagsSection>
        <MetatagsSection heading="Twitter">
          <MetatagsPreviewTwitter {...metatags.twitter} location={location} />
        </MetatagsSection>
        <MetatagsSection heading="Facebook">
          <MetatagsPreviewFacebook {...metatags.og} location={location} />
        </MetatagsSection>
      </Div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        position="fixed"
        bottom="20px"
        right="20px"
        fontSize="14px"
        p="10px 12px"
        zIndex="10000"
      >
        {!isOpen ? "Metatags" : "Close"}
      </Button>
    </React.Fragment>
  )
}
