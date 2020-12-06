interface CalloutProps {
  type?: "primary" | "accent"
  children?: React.ReactNode
}

export function Callout({ type = "accent", children }: CalloutProps) {
  return (
    <div
      borderTopWidth="4"
      borderTopColor={type}
      rounded="md"
      bg="muted"
      p="4"
      sx={{
        "> p": {
          m: 0,
          fontSize: "md",
        },
      }}
    >
      {children}
    </div>
  )
}
