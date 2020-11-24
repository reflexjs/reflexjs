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
        flexDirection="column"
        alignItems="center"
        borderWidth="1"
        p="8"
        rounded="md"
        transition="all .15s ease-in"
        zIndex="100"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        {...props}
      >
        <Icon name={icon} color={color} size="12" />
        <p fontSize="xl" fontWeight="semibold" mt="2">
          {title}
        </p>
      </a>
    </Link>
  )
}
