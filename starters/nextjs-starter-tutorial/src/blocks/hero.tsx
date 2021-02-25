import Image from "next/image"

export default function Block({
  heading,
  text = null,
  image = null,
  ...props
}) {
  return (
    <section py="6|12|20" {...props}>
      <div variant="container" textAlign="center" py="16">
        {heading && <h1 variant="heading.h1">{heading}</h1>}
        {text && (
          <p variant="text.lead" mt="2">
            {text}
          </p>
        )}
        {image && (
          <div mt="6" rounded="lg">
            <Image src={image} width="500" height="350" />
          </div>
        )}
      </div>
    </section>
  )
}
