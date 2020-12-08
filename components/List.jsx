import styled from "@emotion/styled"
import { COLORS } from "utils/constants"

export const UList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: ${({ columns = 2 }) => `repeat(${columns}, minmax(140px, ${560 / columns}px))`};
  margin: 0;
`

export const ListItem = styled.li`
  position: relative;
  padding-left: 25px;
  &:before {
    position: absolute;
    left: 0;
    content: "▹";
    color: ${({ color = "pinkish" }) => COLORS[color]};
    font-weight: 700;
  }
`
