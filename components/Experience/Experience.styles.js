import styled from "@emotion/styled"
import { COLORS, MEDIA_QUERIES, BORDER_RADIUS, TRANSITION } from "utils/constants"
import Button from "components/Button"

const Styled = styled.div`
  .intro {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .left-side-bar {
    position: absolute;
    left: 0;
    transform: translateY(-50px);
    opacity: 0.5;
  }

  .right-side-bar {
    position: absolute;
    right: 0;
    transform: translateY(-50px);
    opacity: 0.5;
  }

  .margin-bottom {
    margin-bottom: 25px;
  }

  .work-details {
    display: grid;
    grid-gap: 10px;
    grid-template-rows: auto auto 4fr;
    align-items: flex-start;
    > div {
      padding: 5px 0;
    }
  }

  .flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;

    .img {
      width: 35px;
      height: 35px;
      border-radius: 5px;
    }
  }
`
export default Styled

export const WorkContainer = styled.div`
  display: grid;
  grid-gap: 45px;
  grid-template-areas: "companies info";
  grid-template-columns: 1fr 3fr;
  @media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
    grid-template-areas: "companies" "info";
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`
export const WorkButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
    flex-direction: row;
    overflow-x: scroll;
    border-bottom: 1px ${COLORS.lightWhite} solid;
    padding: 10px 5px;
  }
`
export const Dot = styled.div`
  opacity: 0.5;
  transition: ${TRANSITION};
  display: inline-block;
  margin-right: 10px;
  vertical-align: center;
  height: 8px;
  width: 8px;
  background-color: ${[(props) => (props.active ? COLORS.pinkish : COLORS.lightGray)]};
  border-radius: 50%;
`
export const WorkButton = styled(Button)`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: ${BORDER_RADIUS.button};
  transition: ${TRANSITION};
  padding: 10px 30px;
  border: none;
  color: ${COLORS.lightGray};
  &:hover {
    background-color: ${COLORS.semiWhite};
    color: ${COLORS.white};
  }
  &:focus {
    color: ${COLORS.pinkish};
  }
  @media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
    margin-bottom: 0px;
    margin-right: 10px;
  }
`

export const RoundedImageContainer = styled.div`
  display: inline-block;
  border-radius: 10px;
  height: 45px;
  width: 45px;
  background-color: ${COLORS.lightWhite};
  padding: 5px;
  margin-right: 15px;
`
