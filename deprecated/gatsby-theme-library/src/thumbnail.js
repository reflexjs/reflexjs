/** @jsx jsx */
import { jsx, VisuallyHidden } from "reflexjs"
import { Link } from "@reflexjs/gatsby-theme-core"
import Image from "gatsby-image"
import { useCloudinaryImage } from "./use-cloudinary-image"

export const Thumbnail = ({ screenshots, slug, mode, name, ...props }) => {
  const image = useCloudinaryImage(screenshots[mode])
  return (
    <Link
      to={slug}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      overflow="hidden"
      borderWidth="1px"
      borderColor="border"
      rounded="xl"
      mt="5px"
      transition="all .15s ease-in"
      boxShadow="xl"
      minH="60px"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "2xl",
      }}
      {...props}
    >
      {image && <Image fluid={image.fluid} sx={{ w: "100%" }} alt={name} />}
      <VisuallyHidden>View {name}</VisuallyHidden>
    </Link>
  )
}
