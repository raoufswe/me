import React from "react"
import StyledHero, { IntroButton } from "./Hero.styles.js"
import Text from "components/Text"
import { ContentContainer, SectionContainer, CenteredContainer } from "components/Containers"
import { Paragraph } from "components/Typography"

const Hero = () => (
  <StyledHero>
    <SectionContainer primary>
      <img src="images/HeroLeftSideBar.svg" className="hero-left-side-bar" />
      <img src="images/HeroRightSideBar.svg" className="hero-right-side-bar" />
      <ContentContainer numColumns={2}>
        <div className="intro margin-bottom">
          <Text color="white" size="large">
            Hi, my name is
          </Text>
          <Text color="white" style={{ fontSize: 56 }} weight="bold">
            Raouf
          </Text>
          <Text color="white" style={{ fontSize: 37 }} className="margin-bottom">
            Welcome to my garden.
          </Text>
          <div className="margin-bottom">
            <Paragraph inverted>
              I'm a software engineer specializing in building high-quality applications and websites. I’m currently a Product Engineer at Volcanic.
            </Paragraph>
          </div>
          <div>
            <a href="mailto:raoufswe@gmail.com">
              <IntroButton>GET IN TOUCH</IntroButton>
            </a>
          </div>
        </div>
        <CenteredContainer>
          <img className="hero-svg" src="images/HeroGraphic.svg" />
        </CenteredContainer>
      </ContentContainer>
    </SectionContainer>
  </StyledHero>
)

export default Hero
