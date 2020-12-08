import styled from "@emotion/styled"
import { MEDIA_QUERIES } from "utils/constants"

const Styled = styled.div`
  .container {
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

  .my-picture {
    border-radius: 8px;
    height: 400px;
    align-self: center;
  }

  .my-picture,
  .right-side-bar {
    @media (max-width: ${MEDIA_QUERIES["mobile"]}px) {
      display: none;
    }
  }
`

export default Styled
