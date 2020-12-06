import { Div, Input, Option, Select, Textarea } from "@reflexjs/components"

export default function () {
  return (
    <Div>
      <Input type="email" placeholder="Email" />
      <Select>
        <Option>One</Option>
        <Option>Two</Option>
      </Select>
      <Textarea name="message" />
    </Div>
  )
}