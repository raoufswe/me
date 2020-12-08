export default function redirect(link) {
  let newPage = window.open(link, "_blank")
  newPage.focus()
}
