import styled from "@emotion/styled"
import { COLORS, TRANSITION, FONT_WEIGHTS } from "utils/constants"

const Link = styled.a`
  text-decoration: none;
  transition: ${TRANSITION};
  border-bottom: ${COLORS.gold} 2px solid;
  background-color: transparent;
  color: ${COLORS.white};
  font-weight: ${FONT_WEIGHTS.bold};
  &:hover {
    background-color: ${COLORS.semiGold};
  }
`

export default Link
