import { Heading, Paragraph } from "components/Typography"
import { SectionContainer, ContentContainer } from "components/Containers"
import { COLORS, contactLinks } from "utils/constants"
import redirect from "utils/redirect"
import Link from "components/Link"
import { ContactCards, ContactCard, Details } from "./Contact.styles"

const Contact = () => {
  return (
    <SectionContainer>
      <ContentContainer style={{ gridGap: 0 }} numColumns={1}>
        <Heading>Contact</Heading>
        <Details>
          <Paragraph size="xlarge" weight="bold" style={{ marginBottom: 0 }}>
            Get in touch via{" "}
            <Link style={{ color: COLORS.pinkish }} href="mailto:raoufswe@gmail.com">
              email
            </Link>{" "}
            or find me online
          </Paragraph>
          <ContactCards>
            {contactLinks.map((node) => (
              <ContactCard onClick={() => redirect(node.profile)}>
                <img src={node.logo} />
              </ContactCard>
            ))}
          </ContactCards>
        </Details>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Contact
