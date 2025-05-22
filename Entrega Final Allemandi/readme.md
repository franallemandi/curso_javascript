-------Simulador de e-Commerce-------

*) Se inicia con el archivo index.html
*) El usuario tiene la posibilidad de agregar al carrito los álbumes disponibles en el catalogo que quiera y cuantos quiera. A medida que agregue productos, el total se ira actualizando automáticamente.
*) El usuario puede vaciar el carrito cuando tenga productos en el o proceder a comprarlos.
*) Si decide proceder con la compra, se le pedirán sus datos, así como los datos del medio de pago. Si lo desea, puede volver atrás y continuar agregando productos. Sino, tiene la posibilidad de confirmar el pago.
*) Una ultima pantalla de confirmación mostrara al usuario los detalles de la compra. En ella también hay un botón para volver al inicio del simulador: si se clickea en el, se reiniciara el simulador y se vaciara el carrito, permitiendo realizar el proceso de una nueva compra.

Notas:
*) El contenido del carrito se almacena en el Local Storage, por lo que si el usuario cerrase el navegador y luego volviera a abrirlo, los productos seguirían guardados.
*) Caso contrario sucede con los datos del pago; al ser guardados en Session Storage, estos serán eliminados de la memoria cuando se cierre el navegador, como método de seguridad.
