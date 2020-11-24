export interface SelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Selector({ children, ...props }: SelectorProps) {
  return (
    <div
      display="flex"
      fontSize="sm"
      borderWidth="1"
      rounded="md"
      position="relative"
      py="2"
      sx={{
        label: {
          display: "block",
          flex: 1,
          lineHeight: 1.2,
          mr: "-10ch",
          pl: 4,
        },
        select: {
          position: "relative",
          zIndex: 10,
          width: "auto",
          border: 0,
          fontSize: "sm",
          fontWeight: "semibold",
          p: 0,
          pl: "12ch",
          pr: 8,
          background: "none",
        },
      }}
      {...props}
    >
      {children}
    </div>
  )
}
