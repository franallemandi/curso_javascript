let moneda1 = 0;
let moneda2 = 0;
let factor1 = 0;
let factor2 = 0;

const arsFactor = 1068.6;
const usdFactor = 1;
const eurFactor = 0.92;
const clpFactor = 924.3;
const uyuFactor = 42.22;
const brlFactor = 5.74;

const monedasString = [
  "Pesos argentinos",
  "Dolares estadounidenses",
  "Euros",
  "Pesos chilenos",
  "Pesos uruguayos",
  "Reales",
];
const factores = [
  arsFactor,
  usdFactor,
  eurFactor,
  clpFactor,
  uyuFactor,
  brlFactor,
];

let menuMoneda1 = 0;
let menuMoneda2 = 0;
let menuCantidad = 0;

let menuMoneda1String = "Elija la moneda a convertir: \n";
let menuMoneda2String =
  "Elija la moneda a la cual desea convertir la moneda seleccionada: \n";
let menuCantidadString = "Ingrese la cantidad a convertir";

for (let i = 0; i <= monedasString.length; i++) {
  if (i < monedasString.length) {
    menuMoneda1String += i + 1 + "- " + monedasString[i] + "\n";
    menuMoneda2String += i + 1 + "- " + monedasString[i] + "\n";
  } else {
    menuMoneda1String += "7- Salir";
    menuMoneda2String += "7- Salir";
  }
}
function seleccionarMoneda1() {
  menuMoneda1 = parseInt(prompt(menuMoneda1String));

  switch (menuMoneda1) {
    case 1:
      moneda1 = monedasString[0];
      factor1 = factores[0];
      seleccionarMoneda2();
      break;
    case 2:
      moneda1 = monedasString[1];
      factor1 = factores[1];
      seleccionarMoneda2();
      break;
    case 3:
      moneda1 = monedasString[2];
      factor1 = factores[2];
      seleccionarMoneda2();
      break;
    case 4:
      moneda1 = monedasString[3];
      factor1 = factores[3];
      seleccionarMoneda2();
      break;
    case 5:
      moneda1 = monedasString[4];
      factor1 = factores[4];
      seleccionarMoneda2();
      break;
    case 6:
      moneda1 = monedasString[5];
      factor1 = factores[5];
      seleccionarMoneda2();
      break;
    case 7:
      alert("Gracias!");
      break;
    default:
      alert("Opcion no valida");
      seleccionarMoneda1();
  }
}

function seleccionarMoneda2() {
  menuMoneda2 = parseInt(prompt(menuMoneda2String));
  switch (menuMoneda2) {
    case 1:
      moneda2 = monedasString[0];
      factor2 = factores[0];
      convertir(moneda1, moneda2, factor1, factor2);
      break;
    case 2:
      moneda2 = monedasString[1];
      factor2 = factores[1];
      convertir(moneda1, moneda2, factor1, factor2);
      break;
    case 3:
      moneda2 = monedasString[2];
      factor2 = factores[2];
      convertir(moneda1, moneda2, factor1, factor2);
      break;
    case 4:
      moneda2 = monedasString[3];
      factor2 = factores[3];
      convertir(moneda1, moneda2, factor1, factor2);
      break;
    case 5:
      moneda2 = monedasString[4];
      factor2 = factores[4];
      convertir(moneda1, moneda2, factor1, factor2);
      break;
    case 6:
      moneda2 = monedasString[5];
      factor2 = factores[5];
      convertir(moneda1, moneda2, factor1, factor2);
      break;
    case 7:
      alert("Gracias!");
      break;
    default:
      alert("Opcion no valida");
      seleccionarMoneda2();
  }
}

function convertir(moneda1, moneda2, factor1, factor2) {
  menuCantidad = parseFloat(prompt(menuCantidadString));
  while (menuCantidad >= 0 && !isNaN(menuCantidad)) {
    let conversion = ((menuCantidad / factor1) * (factor2 / usdFactor)).toFixed(
      2
    );
    alert(`${menuCantidad} ${moneda1} = ${conversion} ${moneda2}`);
    finalizar();
    break;
  }
  if (menuCantidad < 0 || isNaN(menuCantidad)) {
    alert("Opcion no valida");
    convertir(moneda1, moneda2, factor1, factor2);
  }
}

function finalizar() {
  let seguir = confirm("Desea realizar otra conversion?");
  if (seguir === true) {
    seleccionarMoneda1();
  } else {
    alert("Muchas gracias!");
  }
}

seleccionarMoneda1();
