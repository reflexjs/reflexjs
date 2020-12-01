import Link from "next/link"
import { useRouter } from "next/router"

export interface NavbarLinkProps {
  href: string
  activePathNames?: string[]
  children: React.ReactNode
}

export function NavbarLink({
  href,
  activePathNames,
  children,
  ...props
}: NavbarLinkProps) {
  const { pathname } = useRouter()
  const isActive = pathname === href || activePathNames?.includes(pathname)
  return (
    <Link href={href} passHref>
      <a
        textDecoration="none"
        color={isActive ? "link" : "text"}
        fontSize="lg|md"
        fontWeight={isActive ? "semibold" : "normal"}
        _hover={{
          color: "primary",
          textDecoration: "underline",
        }}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}
