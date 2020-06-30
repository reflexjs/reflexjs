import { generateMetatags } from ".."

test("set default metatags from node", () => {
  const node = {
    title: "Itaque quaerat hic fugit repellendus.",
    excerpt: "Dolore voluptatum vitae dolor.",
    image: "placeholder.jpg",
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
      title: "Itaque quaerat hic fugit repellendus.",
      description: "Dolore voluptatum vitae dolor.",
      image: "placeholder.jpg",
      card: "summary_large_image",
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

test("allows default to be overridden", () => {
  const node = {
    title: "Itaque quaerat hic fugit repellendus.",
    excerpt: "Dolore voluptatum vitae dolor.",
    image: "placeholder.jpg",
  }

  expect(
    generateMetatags(node, { type: "website" }, { card: "summary" })
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
