/** @jsx jsx */
import { jsx } from "./jsx-runtime"
import { ComponentWithStyleProps } from "./types"
import { useTheme } from "./react-jsx"

export interface MDXProviderComponents {
  /*eslint @typescript-eslint/no-explicit-any: "off" */
  [key: string]: React.ComponentType<any> | string | undefined
}

export const VisuallyHidden = (props: ComponentWithStyleProps<"div">) => (
  <span
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

export type IconProps = ComponentWithStyleProps<"svg">

export const Icon = ({ name, size = 4, ...props }: IconProps) => {
  const { theme } = useTheme()
  return theme?.icons?.[name] ? (
    <svg
      fill="currentColor"
      dangerouslySetInnerHTML={{
        __html: theme.icons[name],
      }}
      size={size}
      {...props}
    />
  ) : null
}
