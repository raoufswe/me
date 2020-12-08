import styled from "@emotion/styled"
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from "utils/constants"

const Text = styled.span`
  color: ${({ color }) => COLORS[color] ?? "currentColor"};
  font-size: ${({ size }) => FONT_SIZES[size] ?? "medium"};
  line-height: ${({ lineHeight }) => lineHeight ?? 1.25};
  font-weight: ${({ weight }) => FONT_WEIGHTS[weight] ?? "normal"};
`

export default Text
