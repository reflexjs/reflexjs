import Link from "next/link"
import { useRouter } from "next/router"
import { Icon } from "reflexjs"
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
    fontFamily: "body",
    fontWeight: "semibold",
    cursor: "pointer",
    color: "text",
    _hover: {
      color: "primary",
    },
  }

  return items.length ? (
    <div>
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
                  borderTopWidth={index !== 0 && "1px"}
                  pt={index !== 0 && 4}
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
                    mr="4"
                    opacity="0.5"
                    visibility="hidden"
                  />
                </AccordionButton>
                <AccordionPanel>
                  {item.items.map((_item, _index) => (
                    <Link href={_item.url} passHref key={_index}>
                      <a
                        display="flex"
                        fontSize="md"
                        my="2"
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
    </div>
  ) : null
}
