import { Div, A, Svg, Path } from "@reflexjs/components"

export default function () {
  return (
    <Div d="inline-block|block">
      <A d="flex">Link</A>
      <Svg>
        <Path d="100 300" />
      </Svg>
    </Div>
  )
}