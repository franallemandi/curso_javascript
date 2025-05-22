//Declaración inicial de constantes
const metodoPago = document.getElementById("metodo-pago");
const tarjetaInfo = document.getElementById("tarjeta-info");

const inputNumeroTarjeta = document.getElementById("numero-tarjeta");
const inputFechaVencimiento = document.getElementById("fecha-vencimiento");
const inputCvv = document.getElementById("cvv");

const formulario = document.getElementById("formulario-pago");

//Función para mostrar campos de tarjeta
metodoPago.addEventListener("change", () => {
  if (metodoPago.value === "tarjeta") {
    tarjetaInfo.style.display = "block";
    inputNumeroTarjeta.required = true;
    inputFechaVencimiento.required = true;
    inputCvv.required = true;
  } else {
    tarjetaInfo.style.display = "none";
    inputNumeroTarjeta.required = false;
    inputFechaVencimiento.required = false;
    inputCvv.required = false;
  }
});

//Evento y función para enviar formulario y guardar datos
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  Swal.fire({
    title: "Confirmás los datos de pago?",
    showDenyButton: true,
    confirmButtonText: "Sí, comprar",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const email = document.getElementById("email").value;
      const direccion = document.getElementById("direccion").value;
      const metodoPago = document.getElementById("metodo-pago");
      const metodoPagoValue = metodoPago.value;

      const numeroTarjeta = inputNumeroTarjeta.value;
      const fechaVencimiento = inputFechaVencimiento.value;
      const cvv = inputCvv.value;

      // Guardar en sessionStorage
      sessionStorage.setItem("nombre", nombre);
      sessionStorage.setItem("apellido", apellido);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("direccion", direccion);
      sessionStorage.setItem(
        "metodoPago",
        metodoPago.options[metodoPago.selectedIndex].text
      );

      if (metodoPagoValue === "tarjeta") {
        sessionStorage.setItem("numeroTarjeta", numeroTarjeta);
        sessionStorage.setItem("fechaVencimiento", fechaVencimiento);
      }

      // Redirigir a la página de confirmación
      window.location.href = "confirmacion.html";
    }
  });
});
