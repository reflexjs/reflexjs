import { generateMetatags } from "../generate-metatags"

test("set default metatags from node", () => {
  const node = {
    title: "Itaque quaerat hic fugit repellendus.",
    excerpt: "Dolore voluptatum vitae dolor.",
    image: "placeholder.jpg",
    slug: "/foo/bar-baz",
  }

  expect(generateMetatags(node)).toMatchObject({
    title: "Itaque quaerat hic fugit repellendus.",
    description: "Dolore voluptatum vitae dolor.",
    image: "placeholder.jpg",
    og: {
      title: "Itaque quaerat hic fugit repellendus.",
      description: "Dolore voluptatum vitae dolor.",
      image: "placeholder.jpg",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Itaque quaerat hic fugit repellendus.",
      description: "Dolore voluptatum vitae dolor.",
      image: "placeholder.jpg",
    },
  })
})

test("allows default metatags to be overridden", () => {
  const node = {
    title: "Itaque quaerat hic fugit repellendus.",
    excerpt: "Dolore voluptatum vitae dolor.",
    image: "placeholder.jpg",
    metatags: {
      title: "Error laborum aliquam culpa officiis totam dolore.",
      description: "Quos aut suscipit tempora.",
      og: {
        title: "Odit dolorem debitis excepturi suscipit explicabo.",
        type: "book",
      },
      twitter: {
        card: "summary",
      },
    },
  }

  expect(generateMetatags(node)).toMatchObject({
    title: "Error laborum aliquam culpa officiis totam dolore.",
    description: "Quos aut suscipit tempora.",
    image: "placeholder.jpg",
    og: {
      title: "Odit dolorem debitis excepturi suscipit explicabo.",
      description: "Quos aut suscipit tempora.",
      image: "placeholder.jpg",
      type: "book",
    },
    twitter: {
      title: "Error laborum aliquam culpa officiis totam dolore.",
      description: "Quos aut suscipit tempora.",
      image: "placeholder.jpg",
      card: "summary",
    },
  })
})

test("use default from aliases if fields are not provided", () => {
  const node = {
    name: "atque occaecati",
    picture: "avatar.jpg",
    description: "Recusandae illum nobis atque adipisci quam consequatur.",
  }

  expect(generateMetatags(node)).toMatchObject({
    title: "atque occaecati",
    description: "Recusandae illum nobis atque adipisci quam consequatur.",
    image: "avatar.jpg",
    og: {
      title: "atque occaecati",
      description: "Recusandae illum nobis atque adipisci quam consequatur.",
      image: "avatar.jpg",
      type: "article",
    },
    twitter: {
      title: "atque occaecati",
      description: "Recusandae illum nobis atque adipisci quam consequatur.",
      image: "avatar.jpg",
      card: "summary_large_image",
    },
  })
})

test("allows defaults to be set", () => {
  const node = {
    title: "Itaque quaerat hic fugit repellendus.",
    excerpt: "Dolore voluptatum vitae dolor.",
    image: "placeholder.jpg",
  }

  expect(
    generateMetatags(node, {
      og: { type: "website" },
      twitter: { card: "summary" },
    })
  ).toMatchObject({
    title: "Itaque quaerat hic fugit repellendus.",
    description: "Dolore voluptatum vitae dolor.",
    image: "placeholder.jpg",
    og: {
      title: "Itaque quaerat hic fugit repellendus.",
      description: "Dolore voluptatum vitae dolor.",
      image: "placeholder.jpg",
      type: "website",
    },
    twitter: {
      title: "Itaque quaerat hic fugit repellendus.",
      description: "Dolore voluptatum vitae dolor.",
      image: "placeholder.jpg",
      card: "summary",
    },
  })
})

test("allows defaults to be overridden", () => {
  const node = {
    title: "Itaque quaerat hic fugit repellendus.",
    excerpt: "Dolore voluptatum vitae dolor.",
    image: "placeholder.jpg",
  }

  expect(
    generateMetatags(
      node,
      {
        title: "Default title",
        og: { type: "website" },
        twitter: { card: "summary" },
      },
      {
        title: "Overriden title",
        pathname: "/foo",
        og: {
          type: "book",
        },
      }
    )
  ).toMatchObject({
    title: "Overriden title",
    description: "Dolore voluptatum vitae dolor.",
    image: "placeholder.jpg",
    pathname: "/foo",
    og: {
      title: "Overriden title",
      description: "Dolore voluptatum vitae dolor.",
      pathname: "/foo",
      image: "placeholder.jpg",
      type: "book",
    },
    twitter: {
      title: "Overriden title",
      description: "Dolore voluptatum vitae dolor.",
      image: "placeholder.jpg",
      pathname: "/foo",
      card: "summary",
    },
  })
})
