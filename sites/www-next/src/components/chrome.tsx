export interface ChromeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

export function Chrome({ width, children, ...props }: ChromeProps) {
  const borderWidth = width !== "100%" && 1
  const marginY = width !== "100%" && 4
  return (
    <div borderWidth={borderWidth} w={width} my={marginY} mx="auto" {...props}>
      {children}
    </div>
  )
}
