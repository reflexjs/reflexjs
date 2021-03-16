export interface ContentGridProps {
  children: React.ReactNode
}

export function LayoutGrid({ children, ...props }: ContentGridProps) {
  if (!children) return null

  return (
    <div
      display="grid"
      gridTemplateColumns="[full-start] minmax(5vw,auto) [wide-start] minmax(auto,80px) [main-start] min(638px,calc(100% - 10vw)) [main-end] minmax(auto,80px) [wide-end] minmax(5vw,auto) [full-end]"
      py="10|12"
      sx={{
        "> *": {
          gridColumn: "main-start/main-end",
        },
        "> pre, > figure": {
          gridColumn: "main-start/main-end|wide-start/wide-end",
        },
      }}
      {...props}
    >
      {children}
    </div>
  )
}
