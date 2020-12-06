import { AnimatedScenes, Scene } from "."

export interface AnimatedSectionProps {
  heading: string
  headingColor?: string
  lead?: string
  text?: React.ReactNode
  scenes?: Scene[]
  children?: React.ReactNode
}

export function AnimatedSection({
  heading,
  headingColor = "text",
  lead,
  text,
  scenes,
  children,
  ...props
}: AnimatedSectionProps) {
  return (
    <section py="12|12|12|20" {...props}>
      <div variant="container.md" w="full">
        <h2
          variant="heading"
          color={headingColor}
          fontWeight="800"
          fontSize="5xl"
        >
          {heading}
        </h2>
        <p variant="text" fontSize="2xl" mt="3">
          {lead}
        </p>
      </div>
      <div variant="container" w="full">
        {scenes ? <AnimatedScenes scenes={scenes} /> : null}
        {children}
      </div>
      {text ? (
        <div variant="container.md" w="full" mt="10">
          <div maxW="800">
            <p
              variant="text.paragraph"
              m="0"
              sx={{
                code: {
                  fontSize: "md",
                  color: "link",
                },
              }}
            >
              {text}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
