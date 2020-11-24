import Link from "next/link"
import hydrate from "next-mdx-remote/hydrate"
import { Icon } from "reflexjs"
import { Layout, SidebarNav, mdxComponents } from "."
import { MdxContent } from "../utils/get-mdx-content"
import { NavItem } from "./sidebar-nav"

export interface DocPageProps {
  doc: MdxContent
  manifest: NavItem[]
}

export function DocPage({ doc, manifest }: DocPageProps) {
  const content = hydrate(doc.mdx, {
    components: mdxComponents,
  })

  return (
    <Layout>
      <div variant="container">
        <div
          display="grid"
          col="1|180px 1fr|180px 1fr|250px 1fr"
          gap="null|6|6|20"
        >
          <aside
            position="static|sticky"
            top="14"
            h={(theme) => `calc(100vh - ${theme.space[14]})`}
            overflow="scroll"
            py="6|12"
            borderRightWidth="0|1"
          >
            <SidebarNav items={manifest} />
          </aside>
          <div py="10" className="DocSearch-content">
            <h1 variant="heading.h1">{doc.data.title}</h1>
            {doc.data.excerpt ? (
              <p variant="text.lead" mt="2">
                {doc.data.excerpt}
              </p>
            ) : null}
            <hr my="6" />
            {content}
            <div
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              py="10"
            >
              {doc.data.prev ? (
                <Link href={doc.data.prev.url} passHref>
                  <a variant="button.link">
                    <Icon
                      name="chevron"
                      size="5"
                      mr="2"
                      transform="rotate(180deg)"
                    />
                    {doc.data.prev.title}
                  </a>
                </Link>
              ) : null}
              {doc.data.next ? (
                <Link href={doc.data.next.url} passHref>
                  <a variant="button.link" ml="auto">
                    {doc.data.next.title}{" "}
                    <Icon name="chevron" size="5" ml="2" />
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
