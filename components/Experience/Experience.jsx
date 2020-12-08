import { useState } from "react"
import Styled, { WorkContainer, WorkButtons, Dot, WorkButton, RoundedImageContainer } from "./Experience.styles"
import Text from "components/Text"
import { UList, ListItem } from "components/List"
import { Heading, Paragraph } from "components/Typography"
import { ContentContainer, SectionContainer } from "components/Containers"
import { COLORS, jobs } from "utils/constants"

const Experience = () => {
  const [selectedIndex, setIndex] = useState(0)
  const onSelectJob = (selectedIndex) => setIndex(selectedIndex)
  const selectedJob = jobs[selectedIndex] || jobs[0]

  return (
    <Styled>
      <SectionContainer primary>
        <img src="images/ExpLeftSideBar.svg" className="left-side-bar" />
        <img src="images/ExpRightSideBar.svg" className="right-side-bar" />
        <ContentContainer style={{ gridGap: 30 }}>
          <div className="intro">
            <Heading>Experience</Heading>
            <div className="margin-bottom">
              <Paragraph size="xlarge" weight="bold" color="lightWhite" inverted>
                Here are a few places I've worked
              </Paragraph>
            </div>
          </div>
          <WorkContainer>
            <WorkButtons>
              {jobs.map(({ company }, index) => (
                <WorkButton onClick={() => onSelectJob(index)} key={index}>
                  <Dot active={index === selectedIndex} />
                  {company}
                </WorkButton>
              ))}
            </WorkButtons>
            <div className="work-details">
              <div>
                <Text color="white" size="xxlarge" weight="bold">
                  {selectedJob.jobTitle}{" "}
                </Text>
                <Text color="pinkish" size="xxlarge" weight="bold">
                  <a href={selectedJob.url}>@ {selectedJob.company}</a>
                </Text>
              </div>
              <div className="flex-row">
                <RoundedImageContainer>
                  <img className="img" src={selectedJob.logo} alt="company-logo" />
                </RoundedImageContainer>
                <Text color="lightWhite" size="medium">
                  {selectedJob.dates}
                </Text>
              </div>
              <div>
                <Text color="lightWhite" size="medium">
                  <UList columns={1} style={{ color: COLORS.white }}>
                    {selectedJob.bullets.map((bullet) => (
                      <ListItem color="white">{bullet}</ListItem>
                    ))}
                  </UList>
                </Text>
              </div>
            </div>
          </WorkContainer>
        </ContentContainer>
      </SectionContainer>
    </Styled>
  )
}

export default Experience
