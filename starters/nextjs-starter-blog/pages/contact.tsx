import { ContactForm } from "@/components/contact-form"
import { LayoutGrid } from "@/components/layout-grid"
import { Layout } from "@/components/layout"

export default function ContactPage() {
  return (
    <Layout>
      <LayoutGrid>
        <h1 variant="heading.h1">Contact</h1>
        <p variant="text.lead" mt="4" mb="8">
          Say hello at hello@example.com or use the contact form below!
        </p>
        <ContactForm />
      </LayoutGrid>
    </Layout>
  )
}
