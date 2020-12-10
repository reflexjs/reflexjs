interface HeroBlockProps extends React.HTMLAttributes<HTMLElement> {
  subheading?: React.ReactNode
  heading?: React.ReactNode
  text?: React.ReactNode
  image?: React.ImgHTMLAttributes<HTMLImageElement>
  imagePosition?: "left" | "right"
  buttons?: React.ReactNode
  children?: React.ReactNode
}

export default function Block({
  subheading,
  heading,
  text,
  image,
  imagePosition = "right",
  buttons,
  children,
  ...props
}: HeroBlockProps) {
  return (
    <section py="6|12|20" {...props}>
      <div variant="container">
        <div
          display="grid"
          gridAutoFlow="dense"
          col="1|1|2"
          gap="8|8|12"
          alignItems="center"
        >
          {image && (
            <img
              colStart={`null|null|${imagePosition === "left" ? 1 : 2}`}
              w="full"
              rounded="lg"
              overflow="hidden"
              {...image}
            />
          )}
          <div
            d="flex"
            flexDirection="column"
            alignItems="center|flex-start"
            textAlign="center|left"
          >
            {subheading && <p variant="subheading">{subheading}</p>}
            {heading && (
              <h1 variant="heading.h1" lineHeight="1">
                {heading}
              </h1>
            )}
            {text && (
              <p variant="text.lead" mt="4">
                {text}
              </p>
            )}
            {buttons}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
