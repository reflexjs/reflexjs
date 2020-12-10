import * as React from "react"

export function Footer({ copyright, ...props }) {
  return (
    <section py={[8, 10, 12]} {...props}>
      <div variant="container">
        {copyright && (
          <p variant="text.sm" textAlign="center" my="0">
            {copyright}
          </p>
        )}
      </div>
    </section>
  )
}
