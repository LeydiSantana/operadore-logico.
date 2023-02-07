var inicioSesion = prompt("Ingrese su nombre de usuario:");

if (inicioSesion === "Admin") {
  var password = prompt("Ingrese su contraseña:");
  if (password === "") {
    alert("Cancelado.");
  } else if (password === "TheMaster") {
    alert("Bienvenido!");
  } else {
    alert("Contraseña incorrecta");
  }
} else if (inicioSesion === "" || inicioSesion === null) {
  alert("Cancelado.");
} else {
  alert("No te conozco.");
}
