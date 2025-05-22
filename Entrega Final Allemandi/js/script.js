// Array de objetos con productos
let productos = [];
//
const directorioJson = "./json/albums.json";
// Array para almacenar el carrito
let carrito = [];
let total = 0;

// Función para traer productos del archivo json
async function fetchAlbums() {
  try {
    const response = await fetch(directorioJson);
    const data = await response.json();
    productos = data;
  } catch (err) {
    funcionError();
  }
}

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
    carrito.push(producto);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Producto agregado!",
      text: `${producto.nombre}`,
    });
    actualizarCarrito();
    guardarCarritoEnStorage();
  }
}

// Función para actualizar el carrito
function actualizarCarrito() {
  const carritoContenido = document.getElementById("carrito-contenido");
  carritoContenido.innerHTML = "";
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
  )}<br><br><button id='vaciar-carrito'>Vaciar Carrito</button>
  <button id='comprar'><a class="anchor" href="pago.html">Comprar</a></button>`;

  carritoContenido.appendChild(nuevoTotal);
  let btnVaciar = document.getElementById("vaciar-carrito");
  btnVaciar.addEventListener("click", () => vaciarCarrito());
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
    actualizarCarrito();
  } else {
    const carritoContenido = document.getElementById("carrito-contenido");
    carritoContenido.innerHTML = "El carrito está vacío";
  }
}

// Función para vaciar el carrito
function vaciarCarrito() {
  Swal.fire({
    title: "Estás seguro?",
    showDenyButton: true,
    confirmButtonText: "Vaciar",
    denyButtonText: `Cancelar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      localStorage.removeItem("carrito");
      localStorage.removeItem("total");
      carrito = [];
      total = 0;
      Swal.fire("Se ha vaciado el carrito", "", "success");
      cargarCarritoDesdeStorage();
    }
  });
}

//Función Inicial
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

//Función Error
function funcionError() {
  const productosDiv = document.getElementById("productos");
  let divError = document.createElement("div");
  divError.className = "error";
  divError.innerHTML = "Ha habido un error, el catálogo no puede mostrarse.";
  productosDiv.appendChild(divError);
}

//Llamar a función inicial
fetchAlbums().then(() => {
  funcionInicial();
});
