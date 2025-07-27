function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img") // Corrigido aqui: querySelector

  // substituir imagem
  if (html.classList.contains("light")) {
    // se tiver light mode
    img.setAttribute("src", "./assets/paulaclara.png")
  } else {
    // se tiver sem light
    img.setAttribute("src", "./assets/paulasemelli.png") // Corrigido aqui: src
  }
}
