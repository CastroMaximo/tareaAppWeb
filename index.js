const contenedorDestacados = document.getElementById("contenedor-destacados");
const contendorProductos = document.getElementById("contenedor-productos");
const listaCategorias = document.getElementById("lista-categorias");
const mensajeEstado = document.getElementById("mensaje-estado");
const botonCargarMas = document.getElementById("btn-botonCargarMas");

//VARIABLES DE PAGINACION
const CANTIDAD_POR_PAGINA = 12;
let productosSaltados = 0;

//MEJOR VALORACION 
async function cargarDestacados() {
    try {
        const url = URL_BASE +"/products?sortBy=rating&order=desc&limit=4";
        const datos = await pedirDatos(url);

        console.log("Destacados recibidos: ", datos.products);


        for (const producto of datos.products) {
            const tarjeta = crearTrajeta(producto);
            contenedorDestacados.appendChild(tarjeta);
        }

    } catch (error) {
        const texto = "No se cargaron los destacados: " + error.mensaje;
        contenedorDestacados.textContent = texto; 

    }
}