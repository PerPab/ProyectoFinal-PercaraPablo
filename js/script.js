
window.addEventListener('load',()=>{
    recuperarListaTerrenos()
    mostrarPrincipal(); 
})

/**------LISTA DE OBJETOS------------ */
let listaTerrenos = [
    {
        titulo: 'En Oferta',
        precio: 95000,
        imagen_opcional_1: './img/carousel-1/card1-2.png',
        ubicacion: 'Posidonius',
        descripcion: 'Magnífico cráter de 95km cuadrados, a metros de los restos del Luna 21. Ideal para familia numerosa. Espacio para quincho y parrilla'

    },

    {
        titulo: 'En Oferta',
        precio: 80000,
        imagen_opcional_1: './img/carousel-2/card2-2.png',
        ubicacion: 'Fabbroni',
        descripcion: 'Pequeño y acogedor cráter de 10km cuadrados. Ubicado cerca de los restos de la misión Apollo 17. Date el gusto de fotografiar a la familia Armstrong!'

    },

    {
        titulo: 'En Oferta',
        precio: 105000,
        imagen_opcional_1: './img/carousel-3/card-3-2.png',
        ubicacion: 'Lacus Bonitatis',
        descripcion: 'Si vivir en un cráter no es lo tuyo te traemos ésta planicie de 92km cuadrados. Oportunidad para emprendedores cancha de Paddle.'

    },

    {
        titulo: 'Oportunidad',
        precio: 50000,
        imagen_opcional_1: './img/1601.png',
        ubicacion: 'Lado oscuro de la luna',
        descripcion: 'Esta propiedad a precio regalado no tiene desperdicio, ubicada en el lado oscuro de la luna un lugar ideal para aquellos que son fotosensibles.'

    }
    
];
let bd = [
    {
        titulo: 'En Oferta',
        precio: 95000,
        imagen_opcional_1: './img/carousel-1/card1-2.png',
        ubicacion: 'Posidonius',
        descripcion: 'Magnífico cráter de 95km cuadrados, a metros de los restos del Luna 21. Ideal para familia numerosa. Espacio para quincho y parrilla'

    },

    {
        titulo: 'En Oferta',
        precio: 80000,
        imagen_opcional_1: './img/carousel-2/card2-2.png',
        ubicacion: 'Fabbroni',
        descripcion: 'Pequeño y acogedor cráter de 10km cuadrados. Ubicado cerca de los restos de la misión Apollo 17. Date el gusto de fotografiar a la familia Armstrong!'

    },

    {
        titulo: 'En Oferta',
        precio: 105000,
        imagen_opcional_1: './img/carousel-3/card-3-2.png',
        ubicacion: 'Lacus Bonitatis',
        descripcion: 'Si vivir en un cráter no es lo tuyo te traemos ésta planicie de 92km cuadrados. Oportunidad para emprendedores cancha de Paddle.'

    },

    {
        titulo: 'Oportunidad',
        precio: 50000,
        imagen_opcional_1: './img/1601.png',
        ubicacion: 'Lado oscuro de la luna',
        descripcion: 'Esta propiedad a precio regalado no tiene desperdicio, ubicada en el lado oscuro de la luna un lugar ideal para aquellos que son fotosensibles.'

    }
    
];

/**----------FUNCIONES----------------------------------------------------------------------------------------- */
function agregarTerreno(){//RENDERIZA UNA LISTA DE TERRENOS EN LA PAGINA PRINCIPAL
    let contenedor = document.getElementById('contenedor');
    if(localStorage.getItem('ListaTerrenos')){
        listaTerrenos = recuperarListaTerrenos();
    }else{ listaTerrenos = bd}
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
                </div>
            </div>
            <p class="card-text" id="ubicacion"><b>${terreno.ubicacion}</b></p>
            <p class="card-text" id="descripcion">${terreno.descripcion}</p>
        </div>
        <div class="card-footer text-center">
            <a name="btn_comprar_name" id="btn_comprar_id" class="btn btn-primary btn_comprar_clase"><b>Comprar ya!</b></a>
        </div>
        </div>
        </div>`;
        
    });
}
function cargarLista(){//TOMA LOS DATOS DEL FORMULARIO Y GUARDA LA NUEVA PROPIEDAD EN LA LISTA DE TERRENOS
    let formulario = document.getElementById('publicar');
    let titulo_terreno = document.getElementById('titulo_terreno');
    let precio_terreno = document.getElementById('precio_terreno');
    let imagen_1_terreno = document.getElementById('img-2-terreno');
    let ubicacion_terreno = document.getElementById('ubicacion_terreno');
    let descripcion_terreno = document.getElementById('descripcion_terreno');

    if((titulo_terreno.value).trim() == ''){
        titulo_terreno.setAttribute('placeholder','Este campo no puede quedar vacio!')
        
    }else if((precio_terreno.value).trim()=='' || Number.isNaN(precio_terreno.value) ){
        precio_terreno.setAttribute('placeholder','Ingrese un valor numerico valido')
       
    }else if((ubicacion_terreno.value).trim()==''){
        ubicacion_terreno.setAttribute('placeholder','Este campo no puede quedar vacio!')

    }else if((imagen_1_terreno.value).trim()==''){
        imagen_1_terreno.setAttribute('placeholder','Este campo no puede quedar vacio!')
     
    }else if((descripcion_terreno.value).trim()==''){
        descripcion_terreno.setAttribute('placeholder','Este campo no puede quedar vacio!') 
    }
    else{
        let terreno = {
            titulo: titulo_terreno.value, 
            precio: Number(precio_terreno.value),
            imagen_opcional_1: imagen_1_terreno.value,
            ubicacion: ubicacion_terreno.value,
            descripcion: descripcion_terreno.value
        }
        listaTerrenos.push(terreno);
        formulario.reset()
        guardarListaTerrenos()
        mostrarPrincipal()  
    }
}

function ordenarMenorAmayor(){//ORDENA LAS PROPIEDADES PUBLICADAS
    listaTerrenos.sort(function (a, b) {
    if (a.precio > b.precio) {
      return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    return 0;
    });
    mostrarPrincipal()
}
  
function mostrarPrincipal(){//MUESTRA LA PANTALLA PRINCIPAL
    contenedor.classList.remove('oculta')
    form_contacto.classList.add('oculta')
    form_publicacion.classList.add('oculta')
    quienes_somos.classList.add('oculta')
    agregarTerreno()
    actualizarBotones()
}
function mostrarInfo(){//MUESTRA LA SECCION QUIENES SOMOS
    contenedor.classList.add('oculta')
    form_contacto.classList.add('oculta')
    form_publicacion.classList.add('oculta')
    quienes_somos.classList.remove('oculta')
}

function mostrarConsulta(){//MUESTRA FORMULARIO DE CONSULTA (BOTON COMPRAR)
    contenedor.classList.add('oculta')
    form_contacto.classList.remove('oculta')
    form_publicacion.classList.add('oculta')
    quienes_somos.classList.add('oculta')
}
function MostrarPublicar(){//MUESTRA EL FORMULARIO PARA PUBLICAR PROPIEDADES
    contenedor.classList.add('oculta')
    form_contacto.classList.add('oculta')
    form_publicacion.classList.remove('oculta')
    quienes_somos.classList.add('oculta')
}

function actualizarBotones(){
    let btn_comprar = document.querySelectorAll('.btn_comprar_clase')
    btn_comprar.forEach(boton =>{
        boton.addEventListener('click', mostrarConsulta)
    });
}

function guardarDatosCliente(){//TOMA DATOS DEL FORM DE CONSULTAS Y LOS GUARDA EN LOCALSTORAGE
    let nombre = document.getElementById('nombre-usuario')
    let apellido = document.getElementById('apellido-usuario')
    let telefono = document.getElementById('tel-usuario')
    let eMail = document.getElementById("email-usuario")
    let horario = document.getElementById("horarios").value
    let comentario = document.getElementById('comentario').value
    let terminos = document.getElementById('terminos')

    if((nombre.value).trim() === ''){
        nombre.setAttribute('placeholder', 'Este campo no debe quedar vacio')
    }
    if((apellido.value).trim()===''){
        apellido.setAttribute('placeholder', 'Este campo no debe quedar vacio')
    }
    if((telefono.value).trim()===''){
        telefono.setAttribute('placeholder', 'Este campo no debe quedar vacio')
    }
    if((eMail.value).trim()===''){
        eMail.setAttribute('placeholder', 'Este campo no debe quedar vacio')
    }

    if(!terminos.checked){
        alert("Debe aceptar nuestros terminos y condiciones para podes continuar")
       }else{
        let cliente = {
            nombre: nombre.value,
            apellido: apellido.value,
            telefono: telefono.value,
            email: eMail.value,
            horario_de_contacto: horario,
            comentario: comentario
        }
        localStorage.setItem(`${nombre.value}${apellido.value}`, JSON.stringify(cliente))
        devolverCliente(nombre.value, apellido.value)
       }
}

function devolverCliente(nombre, apellido){//Funcion para testeo
    let listaClientes= JSON.parse(localStorage.getItem(`${nombre}${apellido}`))
    console.log(listaClientes)
}
function guardarListaTerrenos(){//GUARDA LA LISTA DE TERRENOS EN LOCALSTORAGE
    localStorage.setItem('ListaTerrenos', JSON.stringify(listaTerrenos))
}
function recuperarListaTerrenos(){//RETORNA LA LISTA DE TERRENOS GUARDADA EN LOCALSTORAGE
    return listaTerrenos = JSON.parse(localStorage.getItem('ListaTerrenos')) || [];
}
//-----------------------------VISTAS Y BOTONES-----------------------------------------------------------------------------------

let btn_index = document.getElementById('btn_index')
btn_index.addEventListener('click', mostrarPrincipal)

let btn_info = document.getElementById('btn_info')
btn_info.addEventListener('click', mostrarInfo)

let btn_publicacion = document.getElementById('btn_prop')
btn_publicacion.addEventListener('click', MostrarPublicar)

let btn_publicar = document.getElementById("btn_publicar").addEventListener("click", function(event){
    event.preventDefault()
    cargarLista()
});

let btn_enviar = document.getElementById('btn_enviar')
btn_enviar.addEventListener('click', guardarDatosCliente)

let btn_ordenar = document.getElementById('ordenar')
btn_ordenar.addEventListener('click', ordenarMenorAmayor)





















