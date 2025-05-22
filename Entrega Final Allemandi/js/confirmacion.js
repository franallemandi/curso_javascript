//Declaración inicial de constantes
const resumenDiv = document.getElementById("resumen-pago");

const nombre = sessionStorage.getItem("nombre");
const apellido = sessionStorage.getItem("apellido");
const email = sessionStorage.getItem("email");
const direccion = sessionStorage.getItem("direccion");
const metodoPago = sessionStorage.getItem("metodoPago");
const numeroTarjeta = sessionStorage.getItem("numeroTarjeta");
const fechaVencimiento = sessionStorage.getItem("fechaVencimiento");

let total = localStorage.getItem("total");

const volverInicio = document.getElementById("volver");

let resumenHTML = `
    <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Dirección:</strong> ${direccion}</p>
    <p><strong>Método de Pago:</strong> ${metodoPago}</p><br>
    <p><strong>Total de la Compra:</strong> $${parseFloat(total).toFixed(2)}</p>
  `;

//Mostrar datos de tarjeta si corresponde
if (metodoPago == "Tarjeta de Crédito/Débito") {
  resumenHTML += `
      <p><strong>Número de Tarjeta utilizada:</strong> ${numeroTarjeta}</p>
      <p><strong>Fecha de Vencimiento:</strong> ${fechaVencimiento}</p>
    `;
}

resumenDiv.innerHTML = resumenHTML;

//Evento y función para volver a inicio
volverInicio.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  localStorage.removeItem("total");
  carrito = [];
  total = 0;

  // Redirigir a página de confirmación
  window.location.href = "index.html";
});
