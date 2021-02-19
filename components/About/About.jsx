import StyledAbout from "./About.styles"
import { UList, ListItem } from "components/List"
import { ContentContainer, SectionContainer, CenteredContainer } from "components/Containers"
import { Heading, Paragraph } from "components/Typography"
import { COLORS } from "utils/constants"

const About = () => (
  <StyledAbout>
    <SectionContainer>
      <img src="images/AboutMeLeftSideBar.svg" className="left-side-bar" />
      <img src="images/AboutMeRightSideBar.svg" className="right-side-bar" />
      <ContentContainer numColumns={2}>
        <div className="container">
          <Heading>About Me</Heading>
          <div>
            <Paragraph>
              I’m a software engineer that loves building products that simplify people's lives, and seeing the impact my code brings to the world.
            </Paragraph>
            <Paragraph>
              I reckon learning is a never-ending process in life which is the reason I passionately embrace self-enriching learning experiences and it's the
              only way that enables me to keep up with the changing technology landscape every day.
            </Paragraph>
            <Paragraph>Here are some things I'm experienced with:</Paragraph>
            <UList style={{ color: COLORS.white }}>
              <ListItem>Javascript</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Nextjs</ListItem>
              <ListItem>Gatsby</ListItem>
              <ListItem>Node</ListItem>
              <ListItem>Express</ListItem>
              <ListItem>GraphQL</ListItem>
              <ListItem>Postgres</ListItem>
              <ListItem>Cloud Computing</ListItem>
            </UList>
          </div>
        </div>
        <CenteredContainer>
          <img
            src="https://i.imgur.com/fXtZucP.jpeg"
            className="my-picture"
          />
        </CenteredContainer>
      </ContentContainer>
    </SectionContainer>
  </StyledAbout>
)

export default About
