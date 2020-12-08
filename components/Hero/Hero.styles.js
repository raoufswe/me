import styled from "@emotion/styled"
import { COLORS, MEDIA_QUERIES } from "utils/constants"
import Button from "components/Button"

const StyledHero = styled.div`
  .hero-left-side-bar {
    position: absolute;
    left: 0;
    opacity: 0.5;
  }
  .hero-right-side-bar {
    position: absolute;
    right: 0;
    opacity: 0.5;
  }
  .intro {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .margin-bottom {
    margin-bottom: 25px;
  }
  .hero-svg {
    @media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
      display: none;
    }
  }
  .hero-svg,
  .hero-left-side-bar {
    @media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
      display: none;
    }
  }
`

export const IntroButton = styled(Button)`
  background-color: ${COLORS.pinkish};
  padding: 20px 60px;
  letter-spacing: 2px;
`

export default StyledHero
