const form = document.getElementById("form")


function verificarUsuario(event) {
  event.preventDefault()
  const formData = new FormData(event.srcElement)
  const correo = formData.get("correo")
  const contraseña = formData.get("contraseña")

  const usuarioRegistrado = localStorage.getItem(correo)
  const usuario = JSON.parse(usuarioRegistrado)
  if (usuario) {
    console.log(usuario)
    const usuarioValido = contraseña === usuario.contraseña
    if (usuarioValido) {
      localStorage.setItem("usuarioLogeado", usuarioRegistrado)
    }
  }

}


form.addEventListener("submit", (event) => {
  verificarUsuario(event)
})