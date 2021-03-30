/** @jsx jsx */
import { jsx } from "reflexjs"
import * as React from "react"
import { useNav } from "@reflexjs/gatsby-theme-nav"
import { Link } from "@reflexjs/gatsby-theme-core"
import { useLocation } from "@reach/router"

const getLinkIds = (links) => {
  const ids = []

  links.forEach(({ url, items }) => {
    if (url) {
      const [, id] = url.split("#")
      if (id) ids.push(id)
    }

    if (items) {
      ids.push(...getLinkIds(items))
    }
  })

  return ids
}

export const DocSubNav = ({ items, observe, onClick, ...props }) => {
  const { pathname } = useLocation()
  const [activeItem, setActiveItem] = React.useState(false)

  let linkIds = []
  if (observe) {
    linkIds = getLinkIds(items)
  }

  React.useEffect(() => {
    if (typeof window === `undefined` || !("IntersectionObserver" in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    linkIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
      }
    })

    return () => {
      linkIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          observer.unobserve(el)
        }
      })
    }
  }, [linkIds])

  return (
    <ul listStyle="none" p="0" {...props}>
      {items.map(({ value, url, type, items: _items }, key) => {
        const isActiveParent = url === pathname
        const isActiveItem = activeItem === url.split("#")[1]
        return (
          <li key={key} mb="8">
            {type === "link" && (
              <Link
                href={url}
                color={isActiveItem ? "primary" : "text"}
                fontWeight="semibold"
                onClick={() => onClick()}
                activeStyle={{
                  color: "primary",
                }}
              >
                {value}
              </Link>
            )}
            {_items && (
              <DocSubNav
                items={_items}
                mt="2"
                listStyle="none"
                p="0"
                observe={isActiveParent}
                onClick={onClick}
                sx={{
                  li: {
                    mb: 1,
                    a: {
                      fontWeight: "normal",
                      fontSize: "md",
                    },
                  },
                }}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}

export const DocNav = ({ onClick, ...props }) => {
  const [nav] = useNav("doc")

  return nav ? (
    <nav {...props}>
      <ul
        display="grid"
        listStyle="none"
        p="0"
        row={`repeat(${nav.items.length}, auto)`}
        gap="2"
        m="0"
      >
        {nav.items.map(({ value, url, items }, index) => (
          <li key={index}>
            {url ? (
              <Link
                href={url}
                w="100%"
                display="flex"
                justifyContent="center"
                fontWeight="semibold"
                color="text"
                activeStyle={{
                  color: "primary",
                }}
              >
                {value}
              </Link>
            ) : (
              <h4
                variant="heading.h4"
                my="4"
                fontSize="xl"
                borderTopWidth={index !== 0 && "1px"}
                pt={index !== 0 && 4}
              >
                {value}
              </h4>
            )}
            {items && <DocSubNav items={items} onClick={onClick} />}
          </li>
        ))}
      </ul>
    </nav>
  ) : null
}
