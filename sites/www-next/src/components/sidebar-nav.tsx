/** @jsx jsx */
import Link from "next/link"
import { useRouter } from "next/router"
import { jsx, Icon } from "reflexjs"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion"

export interface NavItem {
  title: string
  url?: string
  items?: NavItem[]
}

export interface SidebarNavProps {
  items: NavItem[]
}

export function SidebarNav({ items }: SidebarNavProps) {
  const { asPath } = useRouter()

  const headingStyles = {
    w: "full",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "lg",
    fontWeight: "semibold",
    cursor: "pointer",
    color: "text",
    _hover: {
      color: "primary",
    },
  }

  return items.length ? (
    <>
      {items.map((item, index) => (
        <div key={index} mb="10">
          {item.url ? (
            <Link href={item.url} passHref>
              <a
                {...headingStyles}
                color={asPath === item.url ? "primary" : "text"}
              >
                {item.title}
              </a>
            </Link>
          ) : null}
          {item.items?.length ? (
            <Accordion collapsible defaultIndex={0}>
              <AccordionItem>
                <AccordionButton
                  {...headingStyles}
                  _hover={{
                    svg: {
                      visibility: "visible",
                    },
                  }}
                  sx={{
                    "&[aria-expanded=true] > svg": {
                      transform: "rotate(90deg)",
                    },
                  }}
                >
                  {item.title}
                  <Icon
                    name="chevron"
                    size={4}
                    ml="auto"
                    opacity="0.5"
                    visibility="hidden"
                  />
                </AccordionButton>
                <AccordionPanel>
                  {item.items.map((_item, _index) => (
                    <Link href={_item.url} passHref key={_index}>
                      <a
                        display="flex"
                        my="2"
                        fontSize="sm"
                        color={asPath === _item.url ? "primary" : "text"}
                        _hover={{
                          color: "primary",
                        }}
                      >
                        {_item.title}
                      </a>
                    </Link>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ) : null}
        </div>
      ))}
    </>
  ) : null
}
