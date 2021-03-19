import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Icon } from "reflexjs"

import { ModeToggle } from "@/components/mode-toggle"

export interface NavbarProps {
  branding?: {
    name: string
    icon?: string
  }
  links?: {
    title: string
    href: string
    activePathNames?: string[]
  }[]
}

export function Navbar({ branding, links, ...props }: NavbarProps) {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <header
      position="static|sticky"
      top="0"
      bg="background"
      opacity="0.85"
      py="8"
      zIndex="1000"
      backdropFilter="saturate(100%) blur(10px)"
      {...props}
    >
      <div variant="container.lg">
        <div display="flex" alignItems="center">
          {branding && (
            <Link href="/" passHref>
              <a
                display="flex"
                alignItems="center"
                _hover={{
                  color: "link",
                }}
              >
                {branding.icon && <Icon name={branding.icon} size="8" mr="2" />}
                <span fontWeight="semibold" fontSize="3xl|2xl">
                  {branding.name}
                </span>
              </a>
            </Link>
          )}
          <NavLinks links={links} display="none|grid" />
          <ModeToggle ml="8" />
          <button
            display="flex|none"
            p="2"
            size="14"
            ml="auto"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Icon name="menu-alt" size="10" />
          </button>
        </div>
      </div>
      <div
        position="absolute"
        zIndex="1000"
        bg="background"
        top="24"
        left="4"
        right="4"
        px="4"
        rounded="xl"
        overflow="scroll"
        boxShadow="3xl"
        border="1px solid"
        borderColor="border"
        transform={`scale(${showMenu ? 1 : 0.95})`}
        visibility={showMenu ? "visible" : "hidden"}
        opacity={showMenu ? 1 : 0}
        transition="all .25s ease-in"
        transformOrigin="100% 0"
        maxHeight="95vh"
        display="block|none"
      >
        <NavLinks links={links} py="8" />
      </div>
    </header>
  )
}

export function NavLinks({ links, ...props }: { links: NavbarProps["links"] }) {
  const { pathname, asPath } = useRouter()
  return links.length ? (
    <div
      display="grid"
      col={`1|repeat(${links.length}, auto)`}
      gap="8"
      ml="auto"
      {...props}
    >
      {links.map((link, index) => {
        const isActive =
          pathname === link.href ||
          asPath === link.href ||
          link.activePathNames?.includes(pathname)
        return (
          <Link key={index} href={link.href} passHref>
            <a
              variant="text"
              textAlign="left|center"
              fontSize="xl|md"
              px="4|0"
              fontWeight={isActive ? "semibold" : "normal"}
              _hover={{
                color: "link",
              }}
            >
              {link.title}
            </a>
          </Link>
        )
      })}
    </div>
  ) : null
}
