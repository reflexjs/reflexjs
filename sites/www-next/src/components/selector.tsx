export interface SelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Selector({ children, ...props }: SelectorProps) {
  return (
    <div
      fontSize="sm"
      borderWidth="1"
      rounded="md"
      position="relative"
      sx={{
        label: {
          display: "block",
          fontSize: "xs",
          position: "absolute",
          top: 2,
          left: 3,
          color: "gray",
        },
        select: {
          appearance: "none",
          position: "relative",
          zIndex: 10,
          width: "auto",
          border: 0,
          fontSize: "md",
          color: "text",
          fontWeight: "medium",
          pt: 7,
          pb: 2,
          px: 3,
          minW: 150,
          background: "none",
        },
      }}
      {...props}
    >
      {children}
    </div>
  )
}
