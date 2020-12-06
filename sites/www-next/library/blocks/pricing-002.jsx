import * as React from "react"

export default function Block({ subheading, heading, text, items, ...props }) {
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
            <p variant="text.lead" mt="4">
              {text}
            </p>
          )}
        </div>
        {items && (
          <div
            display="grid"
            col="1|2|3"
            mt="4|6|8"
            gap="4|6|0"
            borderTopWidth="5"
            borderTopColor="primary"
          >
            {items.map((item, index) => (
              <Pricing key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export function Pricing({ heading, price, description, isSelected, ...props }) {
  return (
    <div
      bg={isSelected ? "muted" : "background"}
      textAlign="center"
      borderWidth="1px"
      px="4|4|8|10"
      py="8|8|12"
      {...props}
    >
      <h3 variant="heading.h2" m="0">
        {heading}
      </h3>
      <p variant="text.paragraph" mt="4" lineHeight="normal">
        {description}
      </p>
      <div display="flex" mt="6|8" alignItems="center" justifyContent="center">
        <span fontSize="6xl" fontWeight="semibold">
          ${price}
        </span>
        <span fontSize="xs" ml="4">
          per user <br /> per month
        </span>
      </div>
      <button
        variant={`button.${isSelected ? "primary" : "muted"}`}
        mt="6|8"
        w="100%"
      >
        Select Plan
      </button>
    </div>
  )
}
