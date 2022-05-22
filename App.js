import { carritoIndex } from "/carritoIndex.js";
import { getData } from "/getData.js";

export const mostrarProductos = async () => {

  const contenedorProductos = document.getElementById("producto-contenedor");
  const productos = await getData();

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                       <img src=${producto.img}>
                       <span class="card-title">${producto.nombre}</span>
                      </div>
                      <div class="card-content">
                        <p>$ ${producto.precio}</p>
                        <a class="btn btn-outline-secondary button" id=boton${producto.id}><i class="material-icons">Agregar</i></a>
                      </div>
                     `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener('click', () => {
      carritoIndex(producto.id);
      swal({
        title: 'Genial',
        text: `El producto ${producto.nombre} se ha añadido al carrito!`,
        icon: 'success',
        confirm: 'Ok',
        timer: 3000
      })
    });
  });
};