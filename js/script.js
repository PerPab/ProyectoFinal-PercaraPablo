



/**------LISTA DE OBJETOS------------ */
let listaTerrenos = [
    {
        titulo: 'En Oferta',
        precio: 'USD 95.000',
        imagen_opcional_1: './img/carousel-1/card1-2.png',
        imagen_opcional_2: './img/carousel-1/card1-3.png',
        ubicacion: 'Posidonius',
        descripcion: 'Magnífico cráter de 95km cuadrados, a metros de los restos del Luna 21. Ideal para familia numerosa. Espacio para quincho y parrilla'

    },
    {
        titulo: 'En Oferta',
        precio: 'USD 80.000',
        imagen_opcional_1: './img/carousel-2/card2-2.png',
        imagen_opcional_2: './img/carousel-2/card2-3.png',
        ubicacion: 'Fabbroni',
        descripcion: 'Pequeño y acogedor cráter de 10km cuadrados. Ubicado cerca de los restos de la misión Apollo 17. Date el gusto de fotografiar a la familia Armstrong!'

    },

    {
        titulo: 'En Oferta',
        precio: 'USD 79.000',
        imagen_opcional_1: './img/carousel-3/card-3-2.png',
        imagen_opcional_2: './img/carousel-3/card-3-3.png',
        ubicacion: 'Lacus Bonitatis',
        descripcion: 'Si vivir en un cráter no es lo tuyo te traemos ésta planicie de 92km cuadrados. Oportunidad para emprendedores cancha de Paddle.'

    },

    {
        titulo: 'En Oferta',
        precio: 'USD 50.000',
        imagen_opcional_1: './img/1601.png',
        imagen_opcional_2: './img/1601.png',
        ubicacion: 'Lado oscuro de la luna',
        descripcion: 'Esta propiedad a precio regalado no tiene desperdicio, ubicada en el lado oscuro de la luna un lugar ideal para aquellos que son fotosensibles.'

    }
    
];
/**----------Funcion para renderizar los elementos de la lista */
function agregarTerreno(){
    listaTerrenos.forEach(terreno=>{
        let contenedor = document.getElementById('contenedor');
        contenedor.innerHTML +=
        `<div class="col col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 mt-3 tarjeta">
        <div class="card cards">
        <div class="card-header text-center">
            <h2 class="card-title text-danger" id="titulo"><b>${terreno.titulo}</b></h2>
            <h4 class="card-title text-primary" id="precio">${terreno.precio}</h4>
        </div>
        <div class="card-body text-center">
            <div class="carousel-slide carousel-fade" id="carousel-03" data-bs-ride="carousel"
                data-bs-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img id="img-2" class="imagen" src= ${terreno.imagen_opcional_1} alt="imagen-2">
                    </div>
                    <div class="carousel-item">
                        <img id="img-3" class="imagen" src= ${terreno.imagen_opcional_2} alt="imagen-3">
                    </div>
                </div>
            </div>
            <p class="card-text" id="ubicacion"><b>${terreno.ubicacion}</b></p>
            <p class="card-text" id="descripcion">${terreno.descripcion}</p>
        </div>
        <div class="card-footer text-center">
            <a href="./form.html" class="btn btn-primary"><b>Comprar ya!</b></a>
        </div>
        </div>
        </div>`;
    });
}

function cargarLista (){
    let terreno = {
        titulo: document.getElementById('titulo').value,
        precio: document.getElementById('precio').value,
        imagen: document.getElementById('img-1').value,
        imagen_opcional_1: document.getElementById('img-2').value,
        imagen_opcional_2: document.getElementById('img-3').value,
        ubicacion: document.getElementById('ubicacion').value,
        descripcion: document.getElementById('descripcion').value
    }
    listaTerrenos.push(terreno);
    window.location.href="./index.html";
}


window.addEventListener('load', agregarTerreno)

let botonPublicar = document.getElementById('btn_enviar')
console.log(botonPublicar)





