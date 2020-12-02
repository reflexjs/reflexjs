import packageInfo from "reflexjs/package.json"
import Link from "next/link"
import { NavbarLink, DocSearch } from "."
import { docs, site } from "@config"
import { Icon } from "reflexjs"
import { AnimatePresence, motion } from "framer-motion"
import { SidebarNav } from "./sidebar-nav"

export function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false)

  return (
    <header
      borderBottomWidth="1px"
      position="relative|sticky"
      top="0"
      zIndex="1000"
      sx={{
        ":after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "full",
          h: "100%",
          zIndex: 10,
          bg: "background",
          opacity: "0.85",
          backdropFilter: "saturate(100%) blur(10px)",
        },
      }}
    >
      <div
        variant="container.md"
        display="flex"
        alignItems="center"
        h="20|14"
        position="relative"
        zIndex="1000"
      >
        <Link href="/" passHref>
          <a
            display="flex"
            textDecoration="none"
            color="text"
            alignItems="center"
            fontSize="3xl|4xl|xl"
            fontWeight="semibold"
            mr="0|0|0|10"
          >
            {site.name}
          </a>
        </Link>
        <div
          display="none|none|none|inline-grid"
          col={`repeat(${site.links.length}, minmax(0,auto))`}
          gap="8"
        >
          {site.links.map((link) => (
            <NavbarLink
              key={link.url}
              href={link.url}
              external={link.external}
              activePathNames={link.activePathNames}
            >
              {link.title}
            </NavbarLink>
          ))}
        </div>
        <div display="flex" ml="auto">
          <DocSearch mx="4" />
          <a
            href="https://github.com/reflexjs/reflex"
            target="_blank"
            rel="noreferrer"
            display="none|none|none|flex"
            alignItems="center"
            color="text"
            _hover={{
              color: "primary",
            }}
          >
            <svg
              size="8|5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <small fontWeight="light" ml="2">
              v{packageInfo.version}
            </small>
          </a>
          <button
            display="block|block|block|none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <Icon name="menu-alt" size="10" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {showMenu ? (
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -50,
            }}
            transition={{
              ease: "easeInOut",
            }}
            sx={{
              px: 6,
              top: "24|18",
              position: "absolute",
              w: "full",
            }}
          >
            <div
              boxShadow="xl"
              borderWidth="1"
              rounded="lg"
              bg="background"
              w="full"
              h="85vh"
              overflow="scroll"
            >
              <div
                display="grid"
                row={`repeat(${site.links.length}, minmax(0,auto))`}
                gap="2|2|2|8"
                zIndex="100"
                position="relative"
                py="4|4|4|0"
              >
                {site.links.map((link) => (
                  <NavbarLink
                    key={link.url}
                    href={link.url}
                    external={link.external}
                    activePathNames={link.activePathNames}
                    fontWeight="medium"
                    fontSize="2xl"
                  >
                    {link.title}
                  </NavbarLink>
                ))}
              </div>
              <div p="6" borderTopWidth="1">
                <SidebarNav items={docs.manifest} />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
