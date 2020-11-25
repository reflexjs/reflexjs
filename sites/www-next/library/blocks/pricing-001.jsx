import * as React from "react"
import { Icon } from "reflexjs"

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
          <div display="grid" col="1|2|3" mt="4|6|8" gap="4|6|0">
            {items.map((item, index) => (
              <Pricing key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export function Pricing({
  heading,
  price,
  description,
  list,
  isSelected,
  ...props
}) {
  return (
    <div
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderWidth={isSelected ? 4 : 1}
      borderColor={isSelected ? "primary" : "border"}
      rounded="lg"
      px="4|6|8"
      py={isSelected ? "4|6|16" : "4|6|8"}
      my={isSelected ? 0 : "0|0|8"}
      {...props}
    >
      <h3 variant="heading.h3" m="0">
        {heading}
      </h3>
      <p display="flex" alignItems="flex-end" mt="6">
        <span fontSize="6xl" fontWeight="semibold" lineHeight="none">
          ${price}
        </span>
        <span>/ month</span>
      </p>
      <p variant="text" textAlign="center" mt="6" mb="0">
        {description}
      </p>
      <ul listStyle="none" p="0" mt="4" flex="1">
        {list.map((listItem, index) => (
          <li
            key={index}
            fontWeight="semibold"
            display="flex"
            alignItems="center"
            mb="2"
          >
            <Icon name="check" mr="2" color="primary" />
            {listItem}
          </li>
        ))}
      </ul>
      <button
        variant={`button.${isSelected ? "primary" : "muted"}`}
        mt="8"
        w="full"
      >
        Select Plan
      </button>
    </div>
  )
}
