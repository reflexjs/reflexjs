import Link from "next/link"
import { Icon } from "reflexjs"
import theme from "../theme"

export interface LinkedCardProps {
  href: string
  icon: keyof typeof theme.icons
}

export function LinkedCard({ href, icon, title, color, ...props }) {
  return (
    <Link href={href} passHref>
      <a
        display="flex"
        alignItems="center"
        borderWidth="1"
        p="4"
        rounded="lg"
        transition="all .15s ease-in"
        zIndex="100"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        {...props}
      >
        <Icon name={icon} color={color} size="10" />
        <p fontWeight="semibold" ml="2">
          {title}
        </p>
      </a>
    </Link>
  )
}
