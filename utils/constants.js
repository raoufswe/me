export const COLORS = {
  white: "#FFF",
  lightWhite: "#E4E4F0",
  semiWhite: "rgba(255,255,240,0.25)",
  gray: "#777",
  lightGray: "#CCC",
  black: "#494a66",
  pinkish: "#ff0b78"
}

export const FONT_SIZES = {
  xsmall: "12px",
  small: "14px",
  medium: "16px",
  large: "18px",
  xlarge: "22px",
  xxlarge: "30px",
  huge: "48px"
}

export const FONT_WEIGHTS = {
  normal: 400,
  bold: 700
}

export const MARGIN = {
  default: "120px 145px",
  small: "50px 60px"
}

export const SHADOW = "0px 2px 20px 0px rgba(0,0,0,0.075), 0px 4px 30px 0px rgba(0,0,0,0.025)"

export const EASING = "cubic-bezier(0.645, 0.045, 0.355, 1)"
export const TRANSITION = "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)"

export const BORDER_RADIUS = {
  button: "10px",
  card: "20px"
}

export const HEADER_HEIGHT = "100px"

export const PRIMARY_BG = "#0e151c"

export const MEDIA_QUERIES = {
  tiny: 450,
  mobile: 850,
  desktop: 1200
}

export const jobs = [
  {
    company: "Volcanic",
    logo:
      "https://driftt.imgix.net/https%3A%2F%2Fdriftt.imgix.net%2Fhttps%253A%252F%252Fs3.amazonaws.com%252Fcustomer-api-avatars-prod%252F2014258%252Feedf12dabf0648db03786582b8e71ef1ggpm6picz36u%3Ffit%3Dmax%26fm%3Dpng%26h%3D200%26w%3D200%26s%3D4f23ee96750d532861e52285fff1d637?fit=max&fm=png&h=200&w=200&s=b33e0ca79203f131faff729bf9bfb58b",
    jobTitle: "Product Engineer",
    dates: "Aug 2019 - Present",
    bullets: [
      `Built and maintained a collection of reusable and highly customizable React components for use across multiple teams and projects`,
      `Developed public user portals and internal tooling on company microservices`,
      `Collaborated in the development of reporting dashboards that visualize key marketing metrics into intuitive focus charts providing a comprehensive toolkit for recruiters`
    ],
    url: "https://www.volcanic.com/"
  },
  {
    company: "Petronas ICT",
    logo:
      "data:image/jpeg;base64,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",
    jobTitle: "Software Engineer Intern",
    dates: "July 2018 - Dec 2018",
    bullets: [
      "Effective management of a project to design and develop a virtual reality incident investigation app (as a POC); optimizing the process for investigating the company’s assets",
      "Developed and presented a prototype to gain buy-in for further exploration",
      "Employed best practiced throughout all aspects of the project to ensure quality outputs "
    ],
    url: "https://www.petronas.com/"
  }
]

export const contactLinks = [
  { profile: "https://github.com/raoufswe", logo: "images/logos/github.svg" },
  { profile: "https://www.linkedin.com/in/raoufswe/", logo: "images/logos/linkedin.svg" },
  { profile: "https://twitter.com/raoufswe_", logo: "images/logos/twitter.svg" },
  { profile: "https://instagram.com/raoufswe", logo: "images/logos/instagram.svg" }
]
