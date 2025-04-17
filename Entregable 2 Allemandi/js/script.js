// Array de objetos con productos
const productos = [
  {
    id: 1,
    nombre: "Thriller - Michael Jackson",
    precio: 20.99,
    img: "imgs/thriller.jpeg",
  },
  {
    id: 2,
    nombre: "Back in Black - AC/DC",
    precio: 15.99,
    img: "imgs/acdc.jpeg",
  },
  {
    id: 3,
    nombre: "The Bodyguard - Whitney Houston",
    precio: 17.99,
    img: "imgs/whitney.jpeg",
  },
  {
    id: 4,
    nombre: "The Dark Side Of The Moon - Pink Floyd",
    precio: 19.49,
    img: "imgs/Dark_Side_of_the_Moon.png",
  },
  {
    id: 5,
    nombre: "Their Greatest Hits - Eagles",
    precio: 21.99,
    img: "imgs/eagles.jpeg",
  },
  {
    id: 6,
    nombre: "Bat Out Of Hell - Meat Loaf",
    precio: 17.49,
    img: "imgs/meatloaf.jpeg",
  },
  {
    id: 7,
    nombre: "Hotel California - Eagles",
    precio: 17.99,
    img: "imgs/hotel.jpeg",
  },
  {
    id: 8,
    nombre: "Come On Over - Shania Twain",
    precio: 19.49,
    img: "imgs/shania.jpeg",
  },
  {
    id: 9,
    nombre: "Rumours - Fleetwood Mac",
    precio: 21.99,
    img: "imgs/FMacRumours.png",
  },
  {
    id: 10,
    nombre: "Saturday Night Fever - Bee Gees/Varios Artistas",
    precio: 17.49,
    img: "imgs/saturday.jfif",
  },
];

// Array para almacenar el carrito
//let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let carrito = [];
let total = 0;

// Función para generar productos
function generarProductos(array, fn) {
  const productosDiv = document.getElementById("productos");
  productos.forEach((producto) => {
    let nuevoProducto = document.createElement("div");
    nuevoProducto.className = "producto";
    nuevoProducto.innerHTML = `
                <h2>${producto.nombre}</h2>
                <img src=${producto.img}>
                <p>Precio: $${producto.precio}</p>
                <button id="agregar-${producto.id}">Agregar al carrito</button>
        `;
    productosDiv.appendChild(nuevoProducto);
  });
}

// Función para agregar producto al carrito
function agregarAlCarrito(id, precio) {
  const producto = productos.find((p) => p.id === id);
  if (producto) {
    total += precio;
    console.log("total es " + total);
    console.log("tipo es " + typeof total);
    carrito.push(producto);
    actualizarCarrito();
    guardarCarritoEnStorage();
  }
}

// Función para actualizar el carrito
function actualizarCarrito() {
  const carritoContenido = document.getElementById("carrito-contenido");
  carritoContenido.innerHTML = "";
  console.log("tamano de carrito: " + carrito.length);
  carrito.forEach((producto) => {
    let nuevoProductoHTML = document.createElement("p");
    nuevoProductoHTML.textContent = `
                ${producto.nombre} - $${producto.precio}
            
        `;
    carritoContenido.appendChild(nuevoProductoHTML);
  });
  let nuevoTotal = document.createElement("p");
  nuevoTotal.setAttribute("style", "color:black;");
  nuevoTotal.innerHTML = `<b>Total:</b> $${parseFloat(total).toFixed(
    2
  )}<br><br><button id='vaciar-carrito'>Vaciar Carrito</button>`;

  /* let btnVaciar = document.createElement("button");
  btnVaciar.textContent = "Vaciar Carrito";
   */
  carritoContenido.appendChild(nuevoTotal);
  let btnVaciar = document.getElementById("vaciar-carrito");
  btnVaciar.addEventListener("click", () => vaciarCarrito());
  //carritoContenido.appendChild(btnVaciar);
}

// Función para guardar el carrito en storage
function guardarCarritoEnStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("total", total);
}

// Función para cargar el carrito desde storage
function cargarCarritoDesdeStorage() {
  const carritoStorage = localStorage.getItem("carrito");
  const totalStorage = localStorage.getItem("total");
  if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
    total = parseFloat(totalStorage);
    console.log("ahora es tipo: " + typeof total);
    actualizarCarrito();
  } else {
    const carritoContenido = document.getElementById("carrito-contenido");
    carritoContenido.innerHTML = "El carrito esta vacio";
  }
}

// Función para vaciar el carrito
function vaciarCarrito() {
  console.log("primer " + carrito);
  localStorage.removeItem("carrito");
  localStorage.removeItem("total");
  carrito = [];
  total = 0;
  console.log("segundo " + carrito);
  cargarCarritoDesdeStorage();
}

//Funcion Inicial

function funcionInicial() {
  generarProductos();
  cargarCarritoDesdeStorage();
  productos.forEach((producto) => {
    const botonAgregar = document.getElementById(`agregar-${producto.id}`);
    botonAgregar.addEventListener("click", () =>
      agregarAlCarrito(producto.id, producto.precio)
    );
  });
}

//Llamar a funcion inicial
funcionInicial();
