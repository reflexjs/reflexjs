/** @jsx jsx */
import { jsx } from "reflexjs"
import * as React from "react"
import { Link, Icon, useBreakpointIndex } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
import { useDropdown } from "./use-dropdown"
import { useNav } from "./use-nav"

export const NavMenuLink = ({
  value,
  url,
  type,
  isOpen,
  dropdown,
  depth,
  ...props
}) => {
  const activeStyle = {
    color: "primary",
  }

  props = {
    ...props,
  }

  const style = {
    color: "text",
    fontSize: "md",
    fontWeight: depth === 1 ? "light" : "normal",
    d: "block",
    w: "full",
    px: [4, 0],
    py: dropdown && 3,
    textAlign: ["left", !dropdown ? "left" : "center"],
  }

  const linkStyle = {
    ...style,
    ...(isOpen && activeStyle),
  }

  return type === "link" ? (
    <Link
      href={url}
      activeStyle={activeStyle}
      {...linkStyle}
      {...props}
      _hover={{
        color: "primary",
      }}
    >
      {value}
    </Link>
  ) : (
    <span {...style} {...props} cursor="auto">
      {value}
    </span>
  )
}

export const NavMenuSubNav = ({ items, dropdown, isOpen, ...props }) => {
  if (!items?.length) return null

  const [block] = items
  const isBlock = items[0].type === "block"

  const dropdownStyle = {
    position: [null, "absolute"],
    maxHeight: [isOpen ? "100vh" : 0, "none"],
    boxShadow: [null, "xl"],
    bg: ["muted", "background"],
    borderRadius: [null, "lg"],
    overflow: "hidden",
    opacity: [1, isOpen ? 1 : 0],
    visibility: ["visible", isOpen ? "visible" : "hidden"],
    transition: "all .15s ease-in",
    transform: ["none", "translateX(-50%)"],
    left: "50%",
    top: isOpen ? "100%" : "130%",
    zIndex: 500,
    border: [0, "1px solid"],
    borderColor: ["border", "border"],

    ul: {
      py: 2,
      minWidth: "180px",

      li: {
        mt: 0,

        a: {
          py: 2,
          px: 4,
          fontWeight: "normal",

          "&:hover": {
            bg: "muted",
          },
        },
      },
    },
  }

  const item = isBlock ? (
    <Block src={block.value} {...props} />
  ) : (
    <ul listStyle="none" p="0" m="0">
      {items.map((item, index) => (
        <NavMenuItem key={index} depth={1} dropdown={false} {...item} />
      ))}
    </ul>
  )

  return dropdown ? <div sx={dropdownStyle}>{item}</div> : item
}

export const NavMenuItem = ({
  value,
  url,
  items,
  type,
  dropdown,
  trigger,
  vertical,
  expand,
  depth = 0,
  ...props
}) => {
  const [dropdownRef, isOpen, open, close] = useDropdown()
  const isMobile = useBreakpointIndex() < 1
  if (!value) return null

  const usingHover = trigger === "hover"

  props = {
    ...props,
    ...(usingHover &&
      !isMobile && {
        onMouseEnter: open,
        onMouseLeave: close,
      }),
  }

  return (
    <li
      ref={dropdownRef}
      position="relative"
      borderBottomWidth={[depth === 0 && !vertical && dropdown ? 1 : 0, 0]}
      mt={[vertical || !dropdown ? 2 : 0, depth === 1 ? 2 : 0]}
      {...props}
    >
      <NavMenuLink
        value={value}
        url={url}
        type={type}
        cursor="pointer"
        dropdown={dropdown}
        depth={depth}
        isOpen={isOpen}
        {...(dropdown && !usingHover && { onClick: isOpen ? close : open })}
      />
      {expand && items?.length && (
        <>
          {dropdown && (
            <button
              variant="button.icon"
              onClick={() => (isOpen ? close() : open())}
              display={["block", "none"]}
              position="absolute"
              right="2"
              top="0"
              rounded="none"
              h="12"
              w="12"
            >
              <Icon name={isOpen ? "minus" : "plus"} />
            </button>
          )}
          <NavMenuSubNav
            items={items}
            dropdown={dropdown}
            depth={depth}
            isOpen={isOpen || !dropdown}
          />
        </>
      )}
    </li>
  )
}

export const NavMenu = ({
  name,
  dropdown = true,
  trigger = "hover",
  vertical = false,
  expand = true,
  style,
  ...props
}) => {
  const [nav] = useNav(name)

  if (!nav || !nav.items?.length) return null

  const gridStyle = `repeat(${nav.items.length}, auto)`

  style = {
    display: "grid",
    listStyle: "none",
    p: 0,
    row: [gridStyle, vertical ? gridStyle : "none"],
    col: [null, vertical ? "none" : gridStyle],
    gap: [vertical || !dropdown ? 8 : 0, vertical ? 8 : 4],
    my: 0,
    mx: [-4, 0],
    ...style,
  }

  return (
    <ul {...style} {...props}>
      {nav.items.map((item, index) => (
        <NavMenuItem
          key={index}
          dropdown={dropdown}
          trigger={trigger}
          vertical={vertical}
          expand={expand}
          {...item}
        />
      ))}
    </ul>
  )
}
