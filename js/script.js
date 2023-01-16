
window.addEventListener('load', mostrarPrincipal)
/**------LISTA DE OBJETOS------------ */
let listaTerrenos = [
    {
        titulo: 'En Oferta',
        precio: '95.000',
        imagen_opcional_1: './img/carousel-1/card1-2.png',
        imagen_opcional_2: './img/carousel-1/card1-3.png',
        ubicacion: 'Posidonius',
        descripcion: 'Magnífico cráter de 95km cuadrados, a metros de los restos del Luna 21. Ideal para familia numerosa. Espacio para quincho y parrilla'

    },

    {
        titulo: 'En Oferta',
        precio: '80.000',
        imagen_opcional_1: './img/carousel-2/card2-2.png',
        imagen_opcional_2: './img/carousel-2/card2-3.png',
        ubicacion: 'Fabbroni',
        descripcion: 'Pequeño y acogedor cráter de 10km cuadrados. Ubicado cerca de los restos de la misión Apollo 17. Date el gusto de fotografiar a la familia Armstrong!'

    },

    {
        titulo: 'En Oferta',
        precio: '79.000',
        imagen_opcional_1: './img/carousel-3/card-3-2.png',
        imagen_opcional_2: './img/carousel-3/card-3-3.png',
        ubicacion: 'Lacus Bonitatis',
        descripcion: 'Si vivir en un cráter no es lo tuyo te traemos ésta planicie de 92km cuadrados. Oportunidad para emprendedores cancha de Paddle.'

    },

    {
        titulo: 'Oportunidad',
        precio: '50.000',
        imagen_opcional_1: './img/1601.png',
        imagen_opcional_2: './img/1601.png',
        ubicacion: 'Lado oscuro de la luna',
        descripcion: 'Esta propiedad a precio regalado no tiene desperdicio, ubicada en el lado oscuro de la luna un lugar ideal para aquellos que son fotosensibles.'

    }
    
];

/**----------FUNCIONES----------------------------------------------------------------------------------------- */
function agregarTerreno(){
    let contenedor = document.getElementById('contenedor');
    contenedor.innerHTML='';
    listaTerrenos.forEach(terreno=>{
        contenedor.innerHTML +=
        `<div class="col col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 mt-3 tarjeta">
        <div class="card cards">
        <div class="card-header text-center">
            <h2 class="card-title text-danger" id="titulo"><b>${terreno.titulo}</b></h2>
            <h4 class="card-title text-primary" id="precio">USD ${terreno.precio}</h4>
        </div>
        <div class="card-body text-center">
            <div class="carousel-slide carousel-fade" id="carousel-03" data-bs-ride="carousel"
                data-bs-interval="3000">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img id="img-2" class="imagen" src=${terreno.imagen_opcional_1} alt="imagen de un terreno">
                    </div>
                    <div class="carousel-item">
                        <img id="img-3" class="imagen" src=${terreno.imagen_opcional_2} alt="imagen de un terreno">
                    </div>
                </div>
            </div>
            <p class="card-text" id="ubicacion"><b>${terreno.ubicacion}</b></p>
            <p class="card-text" id="descripcion">${terreno.descripcion}</p>
        </div>
        <div class="card-footer text-center">
            <a name="btn_comprar_name" id="btn_comprar_id" class="btn btn-primary"><b>Comprar ya!</b></a>
        </div>
        </div>
        </div>`;
        
    });
}
function cargarLista(){
    
    let titulo_terreno = document.getElementById('titulo_terreno');
    let precio_terreno = document.getElementById('precio_terreno');
    let imagen_1_terreno = document.getElementById('img-2-terreno');
    let imagen_2_terreno = document.getElementById('img-3-terreno');
    let ubicacion_terreno = document.getElementById('ubicacion_terreno');
    let descripcion_terreno = document.getElementById('descripcion_terreno');
    
    let terreno = {
        titulo: titulo_terreno.value, 
        precio: precio_terreno.value,
        imagen_opcional_1: imagen_1_terreno.value,
        imagen_opcional_2: imagen_2_terreno.value,
        ubicacion: ubicacion_terreno.value,
        descripcion: descripcion_terreno.value
    }
    listaTerrenos.push(terreno);
    mostrarPrincipal()  
}


    

function mostrarPrincipal(){
    contenedor.classList.remove('oculta')
    form_contacto.classList.add('oculta')
    form_publicacion.classList.add('oculta')
    quienes_somos.classList.add('oculta')
    agregarTerreno()
}
function mostrarInfo(){
    contenedor.classList.add('oculta')
    form_contacto.classList.add('oculta')
    form_publicacion.classList.add('oculta')
    quienes_somos.classList.remove('oculta')
}

function mostrarConsulta(){
    contenedor.classList.add('oculta')
    form_contacto.classList.remove('oculta')
    form_publicacion.classList.add('oculta')
    quienes_somos.classList.add('oculta')
}
function MostrarPublicar(){
    contenedor.classList.add('oculta')
    form_contacto.classList.add('oculta')
    form_publicacion.classList.remove('oculta')
    quienes_somos.classList.add('oculta')
}

//-----------------------------VISTAS-----------------------------------------------------------------------------------

let btn_index = document.getElementById('btn_index')
btn_index.addEventListener('click', mostrarPrincipal)


let btn_info = document.getElementById('btn_info')
btn_info.addEventListener('click', mostrarInfo)

let btn_publicacion = document.getElementById('btn_prop')
btn_publicacion.addEventListener('click', MostrarPublicar)

let btn_comprar = document.getElementsByName('btn_comprar_name')
for(let boton of btn_comprar){
    boton.addEventListener('click', mostrarConsulta)
}




 



let btn_publicar = document.getElementById("btn_publicar").addEventListener("click", function(event){
    event.preventDefault()
    cargarLista()
});

















