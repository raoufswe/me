import styled from "@emotion/styled"
import { BORDER_RADIUS, SHADOW, TRANSITION, COLORS } from "utils/constants"

export const ContactCards = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-items: center;
  flex-wrap: wrap;
`
export const Details = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const ContactCard = styled.div`
  box-shadow: ${SHADOW};
  border-radius: ${BORDER_RADIUS.card};
  padding: 16px;
  max-height: 60px;
  max-width: 60px;
  transition: ${TRANSITION};
  background-color: ${COLORS.white};
  &:hover {
    transform: scale(1.06);
    cursor: pointer;
  }
`
