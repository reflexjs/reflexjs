/** @jsx jsx */
import { jsx } from "reflexjs"
import * as React from "react"

interface CardsBlockProps extends React.HTMLAttributes<HTMLElement> {
  subheading?: string
  heading?: string
  text?: string
  buttons?: React.ReactNode
  cards?: CardProps[]
  columns?: number
}

export default function Block({
  subheading,
  heading,
  text,
  buttons,
  cards,
  columns = 3,
  ...props
}: CardsBlockProps) {
  return (
    <section py="4|6|12|20" {...props}>
      <div variant="container">
        <div textAlign="center">
          {subheading && <p variant="subheading">{subheading}</p>}
          {heading && (
            <h2 variant="heading.h1" lineHeight="1">
              {heading}
            </h2>
          )}
          {text && (
            <p variant="text.lead" mt="2">
              {text}
            </p>
          )}
        </div>
        {cards && (
          <div display="grid" col={`1|2|${columns}`} gap="4|8" my="8|12">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        )}
        {buttons}
      </div>
    </section>
  )
}

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  heading: string
  text?: string
  link?: React.ReactNode
  image?: React.ImgHTMLAttributes<HTMLImageElement>
}

export function Card({ heading, text, image, link, ...props }: CardProps) {
  return (
    <div borderWidth="1" rounded="lg" p="6" {...props}>
      {image && <img w="full" mb="4" rounded="md" {...image} />}
      <h4 variant="heading.h4">{heading}</h4>
      {text && (
        <p variant="text.paragraph text.sm" mt="1">
          {text}
        </p>
      )}
      {link}
    </div>
  )
}
