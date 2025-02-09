import styled from "@emotion/styled"
import { MEDIA_QUERIES, PRIMARY_BG, MARGIN } from "utils/constants"

export const SectionContainer = styled.div`
  z-index: -5;
  background: ${({ primary }) => (primary ? PRIMARY_BG : "#172128")};
  padding: ${MARGIN.default};
  @media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
    padding: ${MARGIN.small};
  }
`
export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  display: grid;
  grid-gap: 70px;
  grid-template-columns: ${({ numColumns }) => `repeat(${numColumns}, 1fr)`};
  @media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`
export const CenteredContainer = styled.div`
  display: flex;
  place-content: center;
`
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-gap: 70px;
  grid-template-rows: 1fr;
  ${(props) =>
    `@media (max-width: ${MEDIA_QUERIES[props.mediaSize || "mobile"]}px) {
        grid-template-columns: minmax(200px, 1fr);
      } `};
`
