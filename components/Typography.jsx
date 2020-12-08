import Text from "./Text"

export const Heading = ({ size = "huge", inverted = false, children, href, ...props }) => (
  <Text color={inverted ? "white" : "pinkish"} size={size} weight="bold" style={{ marginBottom: 25 }} href={href} {...props}>
    {children}
  </Text>
)

export const Paragraph = ({ style = {}, size = "large", children, ...props }) => (
  <div style={{ marginBottom: 15, ...style }}>
    <Text color="white" size={size} weight="normal" lineHeight={1.75} {...props}>
      {children}
    </Text>
  </div>
)
