import { isAbsoluteUrl, isRelativeUrl, filterNodes } from "../"

test("checks for absolute url", () => {
  expect(isAbsoluteUrl("https://example.com")).toBe(true)
  expect(isAbsoluteUrl("/example")).toBe(false)
})

test("checks for relative url", () => {
  expect(isRelativeUrl("https://example.com")).toBe(false)
  expect(isRelativeUrl("/example")).toBe(true)
})

test("can filter useStaticQuery data using filters", () => {
  const data = {
    allPost: {
      nodes: [
        {
          title: "Repellat quo ab numquam consequatur ratione.",
          featured: true,
          tags: [
            {
              name: "One",
            },
            {
              name: "Two",
            },
          ],
        },
        {
          title: "Et nulla dolores id repudiandae excepturi.",
          featured: true,
          tags: [
            {
              name: "One",
            },
          ],
        },
        {
          title: "Voluptas est dolorum.",
          featured: false,
          tags: [
            {
              name: "Three",
            },
          ],
        },
      ],
    },
  }

  // No filter.
  expect(filterNodes(data)).toHaveLength(3)

  // Filter by main property.
  expect(filterNodes(data, "Voluptas est dolorum.")).toHaveLength(1)
  expect(filterNodes(data, "Does not exist")).toHaveLength(0)

  // Using filters.
  expect(filterNodes(data, { featured: true })).toHaveLength(2)
  expect(filterNodes(data, { tags: [{ name: "One" }] })).toHaveLength(2)
})
