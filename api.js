//URL PRINCIPAL
const URL_BASE = "https://dummyjson.com/";
//CONECTARNOS A LA API 
async function pedirDatos(url){
    //verificar
    console.log("Consultando la API:", url);
    const respuesta = await fetch(url);
    
    //manejo error
    if (respuesta.ok === false) {
        throw new Error("La API respondio con el codigo " + respuesta.status);
    }
    

    const datos = await respuesta.json();
    return datos;

}

function crearElemento(etiqueta, clase, texto){
    const elemento = document.createElement(etiqueta);
    elemento.className = clase;
    elemento.textContent = texto; 
    return elemento;
}

function crearTrajeta(producto){
    const tarjeta = crearElemento("article", "tarjeta", "");

    const  imagen = document.createElement("img");
    imagen.src = producto.thumbnail;
    imagen.alt = producto.title; 
    imagen.loading = "lazy";

    //el cuerpo o body de la tarjeta
    const cuerpo = crearElemento("div", "tarjeta-cuerpo", "");
    const categoria = crearElemento("span", "etiqueta", producto.category);
    const titulo = crearElemento("h3", "", producto.title);
    const descripcion = crearElemento("p", "tarjeta-descripcion", producto.description);

    //precio
    const datos = crearElemento("div", "tarjeta-datos", "");
    const precio = crearElemento("Strong", "precio", "$ " + producto.price.toFixed(2));
    const valoracion = crearElemento("span", "valoracion", "Calificacion: " + producto.rating);

    //usando appendChild
    datos.appendChild(precio);
    datos.appendChild(valoracion);
    
    cuerpo.appendChild(categoria);
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(descripcion);
    cuerpo.appendChild(datos);
    
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(cuerpo);
    return tarjeta;
}

function mostrarMensaje(elemento, texto, tipo){
    if (texto === "") {
        elemento.classList.add("oculto");
    }else{
        elemento.textContent = texto;
        elemento.className = "mensaje " + tipo;
    }
}













