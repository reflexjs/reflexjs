interface CalloutProps {
  type: "success" | "warning" | "info" | "error"
  children?: React.ReactNode
}

export function Callout({ type = "info", children }: CalloutProps) {
  return (
    <div
      borderLeftWidth={4}
      bg="muted"
      p="4"
      sx={{
        "> p": {
          m: 0,
        },
      }}
    >
      {children}
    </div>
  )
}
