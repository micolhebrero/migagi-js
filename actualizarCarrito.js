const contadorCarrito = document.getElementById('contador-carrito');
const precioTotal = document.getElementById('precioTotal');

const actualizarCarrito = (carritoDeCompras) => {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0);
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
}
export {actualizarCarrito}
