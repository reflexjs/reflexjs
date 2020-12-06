export function VisuallyHidden({ ...props }) {
  return (
    <div
      sx={{
        position: "absolute",
        top: "auto",
        overflow: "hidden",
        clipPath: "rect(1px, 1px, 1px, 1px)",
        width: "1px",
        height: "1px",
        whiteSpace: "nowrap",
      }}
      {...props}
    />
  )
}
