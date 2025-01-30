

//alert("Bienvenido a Masters Of Elements 1🔱")



  
const sectionSeleccionarAtaque = document.getElementById("Seleccionar-Ataque")

const botonAvatar = document.getElementById("boton-Avatar")
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionReiniciar = document.getElementById("reiniciar")

const sectionSeleccionarAvatar = document.getElementById("SeleccionarAvatar")
const spanAvatar = document.getElementById("Avatar")

const spanAvatarDelContrincante = document.getElementById('AvatarDelContrincante');  



const sectionMensajes = document.getElementById("resultado")

const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataqueDelContrincante = document.getElementById("ataque-del-contrincante")


const contenedorTarjetas = document.getElementById("contenedorTarjetas")
const contenedorAtaques = document.getElementById("contenedorAtaques")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")
const sectionAvataresDisponibles = document.getElementById("avatares-disponibles")
const sectionResultado = document.getElementById("resultado")
const sectionManiobras = document.getElementById("maniobras")

let jugadorId = null
let contrincanteId = null
let contrincante
let Masters = []
let MastersOfTheElementsEnemigos = []
let AvatarDelContrincante

let opcionDeMasters
let inputRushuan 
let inputAbraxaz 
let inputNautilus 
let inputForesakis 
let inputMetilos 
let inputUlsfark 
let inputRajshiva 
let inputRomulus
let avatarjugador 
let avatarjugadorObjeto
let ataquesAvatarContrincante
let ataquesAvatar 
let botonFuego 
let botonAgua 
let botonAire 
let botonTierra  
let botones = []
let victoriasJugador = 0
let victoriasContrincante = 0  
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = "./Assets/mapa.jpg"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 1000

if (anchoDelMapa > anchoMaximoDelMapa) {
  anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800
mapa.width = anchoDelMapa 
mapa.height = alturaQueBuscamos




class MastersOfTheElements {
     constructor(nombre, foto, vida, fotoMapa, id = null ) {
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
        this.ancho = 95;
        this.alto = 110;
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y =  aleatorio(250, mapa.height - this.alto )
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX= 0
        this.velocidadY= 0
     }

     pintarAvatar() {
      lienzo.drawImage(
        this.mapaFoto, 
        this.x,
        this.y,
        this.ancho,
        this.alto
      
      )
     }
}

let Rushuan = new MastersOfTheElements("Rushuan","./Assets/Rushuan.png", 5, "./Assets/Rushuan.png")
let Abraxaz = new MastersOfTheElements("Abraxaz","./Assets/Abraxaz.png", 5,  "./Assets/Abraxaz.png")
let Nautilus = new MastersOfTheElements("Nautilus","./Assets/Nautilus.png", 5,  "./Assets/Nautilus.png")
let Foresakis = new MastersOfTheElements("Foresakis","./Assets/Foresakis.png", 5,  "./Assets/Foresakis.png")
let Metilos = new MastersOfTheElements("Metilos","./Assets/Metilos.png", 5,  "./Assets/Metilos.png")
let Ulsfark = new MastersOfTheElements("Ulsfark","./Assets/Ulsfark.png" , 5,  "./Assets/Ulsfark.png")
let Rajshiva = new MastersOfTheElements("Rajshiva","./Assets/Rajshiva.png", 5,  "./Assets/Rajshiva.png")
let Romulus = new MastersOfTheElements("Romulus","./Assets/Romulus.png", 5,  "./Assets/Romulus.png")


const RUSHUAN_ATAQUES = [

  { nombre: "💦", id: "boton-agua"},
  { nombre: "💦", id: "boton-agua"},
  { nombre: "💦", id: "boton-agua"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🪨", id: "boton-tierra"}
  ]
  Rushuan.ataques.push(...RUSHUAN_ATAQUES)




const ABRAXAZ_ATAQUES = [
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "💦", id: "boton-agua"},
  { nombre: "🪨", id: "boton-tierra"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "💨", id: "boton-aire"},
  { nombre: "💨", id: "boton-aire"}
]

Abraxaz.ataques.push(...ABRAXAZ_ATAQUES)


const NAUTILUS_ATAQUES = [
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💨", id: "boton-aire"},
    { nombre: "💨", id: "boton-aire"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🪨", id: "boton-tierra"}
]

Nautilus.ataques.push(...NAUTILUS_ATAQUES)


const FORESAKIS_ATAQUES = [
  { nombre: "🪨", id: "boton-tierra"},
  { nombre: "🪨", id: "boton-tierra"},
  { nombre: "💦", id: "boton-agua"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "💨", id: "boton-aire"}
]
Foresakis.ataques.push(...FORESAKIS_ATAQUES)



const METILOS_ATAQUES = [
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "💦", id: "boton-agua"},
  { nombre: "💨", id: "boton-aire"},
  { nombre: "🪨", id: "boton-tierra"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🪨", id: "boton-tierra"}
]
Metilos.ataques.push(...METILOS_ATAQUES)


const ULSFARK_ATAQUES = [
  { nombre: "🪨", id: "boton-tierra"},
  { nombre: "🪨", id: "boton-tierra"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "💦", id: "boton-agua"}
]
Ulsfark.ataques.push(...ULSFARK_ATAQUES)



const RAJSHIVA_ATAQUES = [
  { nombre: "🔥", id: "boton-fuego"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "💦", id: "boton-agua"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🔥", id: "boton-fuego"},
    { nombre: "🪨", id: "boton-tierra"}
]
Rajshiva.ataques.push(...RAJSHIVA_ATAQUES)
  


const ROMULUS_ATAQUES = [
  { nombre: "💨", id: "boton-aire"},
  { nombre: "💨", id: "boton-aire"},
  { nombre: "💨", id: "boton-aire"},
  { nombre: "🔥", id: "boton-fuego"},
  { nombre: "💦", id: "boton-agua"},
  { nombre: "🪨", id: "boton-tierra"}
]
Romulus.ataques.push(...ROMULUS_ATAQUES)
 



Masters.push(Rushuan,Abraxaz,Nautilus,Foresakis,Metilos,Ulsfark,Rajshiva,Romulus)

function iniciarJuego() {
 


sectionSeleccionarAtaque.style.display = "none"
sectionVerMapa.style.display = "none"
sectionReiniciar.style.display = "none"
sectionAvataresDisponibles.style.display = "none"
sectionManiobras.style.display ="none"
sectionResultado.style.display ="none"

Masters.forEach((Avatar) => { 
  opcionDeAvatar = `
  <input type="radio" name="Avatar" id=${Avatar.nombre} />
  <label class="tarjeta-de-avatar" for =${Avatar.nombre}>
  <p>${Avatar.nombre}</p>
  <img src=${Avatar.foto}>
  </label>
 `
 contenedorTarjetas.innerHTML += opcionDeAvatar

 inputRushuan = document.getElementById("Rushuan")
 inputAbraxaz = document.getElementById("Abraxaz")
 inputNautilus = document.getElementById("Nautilus")
 inputForesakis = document.getElementById("Foresakis")
 inputMetilos = document.getElementById("Metilos")
 inputUlsfark = document.getElementById("Ulsfark")
 inputRajshiva = document.getElementById("Rajshiva")
 inputRomulus = document.getElementById("Romulus")
 
})



botonAvatar.addEventListener("click", seleccionarAvatar)

botonReiniciar.addEventListener("click", reiniciarJuego)

unirseAlJuego()
}

function unirseAlJuego() {
  fetch("http://localhost:8080/unirse")
  .then(function (res) {
  if (res.ok) {
  res.text()
  .then(function(respuesta){
    console.log (respuesta)
    jugadorId = respuesta
  })
}
})
.catch(function (error) {
  console.error('Error:', error);
});
}



function seleccionarAvatar() {

 
    sectionSeleccionarAvatar.style.display = "none"

   if (inputRushuan.checked){
    spanAvatar.innerHTML = inputRushuan.id
    avatarjugador = inputRushuan.id
    } else if (inputAbraxaz.checked) {
    spanAvatar.innerHTML = inputAbraxaz.id
    avatarjugador = inputAbraxaz.id
    } else if (inputNautilus.checked) {
    spanAvatar.innerHTML = inputNautilus.id
    avatarjugador = inputNautilus.id
    } else if (inputForesakis.checked) {
    spanAvatar.innerHTML = inputForesakis.id
    avatarjugador = inputForesakis.id
    } else if (inputMetilos.checked) {
    spanAvatar.innerHTML = inputMetilos.id
    avatarjugador = inputMetilos.id
    } else if (inputUlsfark.checked) {
    spanAvatar.innerHTML = inputUlsfark.id
    avatarjugador = inputUlsfark.id
    } else if (inputRajshiva.checked) {
    spanAvatar.innerHTML = inputRajshiva.id
    avatarjugador = inputRajshiva.id
    } else if (inputRomulus.checked) {
    spanAvatar.innerHTML = inputRomulus.id
    avatarjugador = inputRomulus.id
    } else 
    {
alert("Debes seleccionar un Avatar antes de continuar")}

seleccionarMaster(avatarjugador)

extraerAtaques(avatarjugador)
sectionVerMapa.style.display = "flex"
    iniciarMapa()
    
}
function seleccionarMaster(avatarjugador) {
fetch(`http://localhost:8080/master/${jugadorId}`,{
  method: "post",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    Avatar: avatarjugador
  })
})  
}


function extraerAtaques(avatarjugador) {
let ataques
for (let i = 0; i < Masters.length; i++) {
    if (avatarjugador === Masters[i].nombre) {
        ataques = Masters[i].ataques
    } 
  }

mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
ataques.forEach((ataque) => {
const ataquesMasters = `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>`;
contenedorAtaques.innerHTML += ataquesMasters;
})


botonAgua = document.getElementById("boton-agua")
botonFuego = document.getElementById("boton-fuego")
botonAire = document.getElementById("boton-aire")
botonTierra = document.getElementById("boton-tierra")
botones = document.querySelectorAll(".BAtaque")




}

function secuenciaAtaque() {
 botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
    if (e.target.textContent === '🔥'){
        ataqueDelJugador.push('Fuego🔥')
        boton.disabled = true
        console.log(ataqueDelJugador)
        boton.style.background = '#BE3144'   
    }else if (e.target.textContent === '💦'){
        ataqueDelJugador.push('Agua💦')
        console.log(ataqueDelJugador)
        boton.style.background = '#BE3144'
        boton.disabled = true
    }else if (e.target.textContent === '🪨'){
        ataqueDelJugador.push('Tierra🪨')
        console.log(ataqueDelJugador)
        boton.style.background = '#BE3144'
        boton.disabled = true
    }else{
        ataqueDelJugador.push('Aire💨')
        console.log(ataqueDelJugador)
        boton.style.background = '#BE3144'
        boton.disabled = true}
    
    if (ataqueDelJugador.length === 6) {
        enviarAtaques()
    }
    
    })
        
    
    })
    
}

function enviarAtaques() {
  fetch(`http://localhost:8080/master/${jugadorId}/ataques`, {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ataques: ataqueDelJugador
    })
  })
  .then(response => {
    if (response.ok) {
      console.log("Ataques enviados correctamente");
      intervalo = setInterval(obtenerAtaques, 50);
    } else {
      console.error("Error al enviar ataques");
    }
  })
  .catch(error => {
    console.error("Error en la solicitud de enviar ataques:", error);
  });
}

function obtenerAtaques() {
  fetch(`http://localhost:8080/master/${contrincanteId}/ataques`)
    .then(function (res) {
      if (res.ok) {
        res.json()
          .then(function ({ ataques }) {
            console.log("Ataques recibidos:", ataques);
            if (ataques.length === 6) {
              ataqueContrincante = ataques;
              clearInterval(intervalo);
              combate();
            }
          });
      } else {
        console.error("Error al obtener ataques");
      }
    })
    .catch(function (error) {
      console.error("Error en la solicitud de obtener ataques:", error);
    });
}

function seleccionarAvatarDelContrincante(contrincante) {
   console.log("Seleccionando avatar del contrincante:", contrincante);
spanAvatarDelContrincante.innerHTML = contrincante.nombre
ataquesAvatarContrincante = contrincante.ataques

secuenciaAtaque();
}


let ataqueContrincante = [];
let ataqueDelJugador = [];
let maxAtaques = 6;
let spanVidasJugador = document.getElementById('vidas-jugador');
let spanVidasContrincante = document.getElementById('vidas-contrincante');

function ataqueAleatorioDelContrincante() {
  if (ataqueContrincante.length >= maxAtaques) return; 

  console.log("Ataques contrincante:", ataquesAvatarContrincante);
  let ataqueAleatorio = aleatorio(0, ataquesAvatarContrincante.length - 1);

  if (ataqueAleatorio === 0 || ataqueAleatorio === 1) {
    ataqueContrincante.push("Fuego🔥");
  } 
  else if (ataqueAleatorio === 2 || ataqueAleatorio === 3) {
    ataqueContrincante.push("Agua💦");
  } 
  else if (ataqueAleatorio === 4 || ataqueAleatorio === 5) { 
    ataqueContrincante.push("Aire💨");
  }  
  else { 
    ataqueContrincante.push("Tierra🪨");
  }  

  console.log("Ataque aleatorio generado:", ataqueAleatorio);
  console.log("Lista de ataques contrincante:", ataqueContrincante);

  iniciarCombate();
}

function iniciarCombate() {
  if (ataqueDelJugador.length === maxAtaques && ataqueContrincante.length === maxAtaques) {
    combate();
  }
}

let indexAtaqueDelJugador;
let indexAtaqueContrincante;
function indexAmbosOponentes(jugador, contrincante) {
  indexAtaqueDelJugador = ataqueDelJugador[jugador];
  indexAtaqueContrincante = ataqueContrincante[contrincante];
}
function combate() {
  clearInterval(intervalo)
    
  for (let index = 0; index < ataqueDelJugador.length; index++) {
    if (ataqueDelJugador[index] === ataqueContrincante[index]) {
      indexAmbosOponentes(index, index)
      crearMensaje("EMPATE🎭")
    } else if (ataqueDelJugador[index] === "Fuego🔥" && ataqueContrincante[index] === "Tierra🪨") {
      indexAmbosOponentes(index, index)
      crearMensaje("GANASTE🏆")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueDelJugador[index] === "Agua💦" && ataqueContrincante[index] === "Fuego🔥") {
      indexAmbosOponentes(index, index)
      crearMensaje("GANASTE🏆")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueDelJugador[index] === "Tierra🪨" && ataqueContrincante[index] === "Agua💦") {
      indexAmbosOponentes(index, index)
      crearMensaje("GANASTE🏆")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueDelJugador[index] === "Aire💨" && ataqueContrincante[index] === "Fuego🔥") {
      indexAmbosOponentes(index, index)
      crearMensaje("GANASTE🏆")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else if (ataqueDelJugador[index] === "Aire💨" && ataqueContrincante[index] === "Tierra🪨") {
      indexAmbosOponentes(index, index)
      crearMensaje("GANASTE🏆")
      victoriasJugador++
      spanVidasJugador.innerHTML = victoriasJugador
    } else {
      indexAmbosOponentes(index, index)
      crearMensaje("PERDISTE💀")
      victoriasContrincante++
      spanVidasContrincante.innerHTML = victoriasContrincante
    }
  }
  revisarVidas()
}

function revisarVidas() {
 if (victoriasJugador === victoriasContrincante){
    crearMensajeFinal("EMPATE♾️")
 } else if (victoriasJugador > victoriasContrincante){
  crearMensajeFinal("VICTORIA🔱")}
   else {
    crearMensajeFinal("DERROTA☠️")} 
    
}
function crearMensaje(resultado) { 
   
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueContrincante = document.createElement("p")
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueDelJugador
    nuevoAtaqueContrincante.innerHTML = indexAtaqueContrincante

   ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
   ataqueDelContrincante.appendChild(nuevoAtaqueContrincante)
}
 
function crearMensajeFinal(resultadoFinal) { 
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = "flex"
}

function reiniciarJuego()
{
   location.reload()
}
function aleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas(){


  avatarJugadorObjeto.x = avatarJugadorObjeto.x + avatarJugadorObjeto.velocidadX
  avatarJugadorObjeto.y = avatarJugadorObjeto.y + avatarJugadorObjeto.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  lienzo.drawImage(
    mapaBackground,
    0,
    0,
    mapa.width,
    mapa.height
  )

avatarJugadorObjeto.pintarAvatar()


enviarPosicion(avatarJugadorObjeto.x, avatarJugadorObjeto.y) 

MastersOfTheElementsEnemigos.forEach(function (Avatar){

  if(Avatar != undefined){
  Avatar.pintarAvatar()
  revisarColision(Avatar)
  }
})

}

function enviarPosicion(x, y) {
fetch(`http://localhost:8080/master/${jugadorId}/posicion`,{
method: "post",
headers: { "Content-Type": "application/json"
},
body: JSON.stringify({
   x,
   y
 })
})
.then(function (res) {
  if (res.ok) {
    res.json()
    .then(function ({ enemigos }) {
      console.log(enemigos)
 
    MastersOfTheElementsEnemigos = enemigos.map(function (contrincante) {

      
      console.log(contrincante)
        let AvatarContrincante = null
        if(contrincante.Avatar != undefined)
          {
            if (contrincante && contrincante.Avatar){
        const avatarNombre = contrincante.Avatar.nombre || "";
            
        if (avatarNombre === "Rushuan") {
  AvatarContrincante =  new MastersOfTheElements("Rushuan","./Assets/Rushuan.png", 5, "./Assets/Rushuan.png", contrincante.id)
} else if(avatarNombre === "Abraxaz") {
  AvatarContrincante = new MastersOfTheElements("Abraxaz","./Assets/Abraxaz.png", 5,  "./Assets/Abraxaz.png", contrincante.id)
} else if(avatarNombre === "Nautilus") {
  AvatarContrincante = new MastersOfTheElements("Nautilus","./Assets/Nautilus.png", 5,  "./Assets/Nautilus.png", contrincante.id)
} else if(avatarNombre === "Foresakis") {
  AvatarContrincante = new MastersOfTheElements("Foresakis","./Assets/Foresakis.png", 5,  "./Assets/Foresakis.png",contrincante.id)
} else if(avatarNombre === "Metilos"){
  AvatarContrincante = new MastersOfTheElements("Metilos","./Assets/Metilos.png", 5,  "./Assets/Metilos.png", contrincante.id)
} else if(avatarNombre === "Ulsfark"){
  AvatarContrincante = new MastersOfTheElements("Ulsfark","./Assets/Ulsfark.png", 5,  "./Assets/Ulsfark.png", contrincante.id)
} else if(avatarNombre === "Rajshiva"){
  AvatarContrincante = new MastersOfTheElements("Rajshiva","./Assets/Rajshiva.png", 5,  "./Assets/Rajshiva.png", contrincante.id)
} else if(avatarNombre === "Romulus"){
  AvatarContrincante = new MastersOfTheElements("Romulus","./Assets/Romulus.png", 5,  "./Assets/Romulus.png", contrincante.id)
}

AvatarContrincante.x = contrincante.x
AvatarContrincante.y = contrincante.y

secuenciaAtaque() 
return AvatarContrincante
            }
      }
})
})

}

})

}

function moverAbajo(){
  
  avatarJugadorObjeto.velocidadY = 5
  
}
function moverIzquierda(){
 
  avatarJugadorObjeto.velocidadX = -5
}

function moverArriba(){

  avatarJugadorObjeto.velocidadY = -5
}
  
function moverDerecha(){
 
  avatarJugadorObjeto.velocidadX = 5
}
function detenerMovimiento(){
  
avatarJugadorObjeto.velocidadX = 0
avatarJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
  switch (event.key) {
    case "ArrowUp":
    moverArriba()
    break;
    case "ArrowDown":
    moverAbajo()
    break;
    case "ArrowLeft":
    moverIzquierda()
    break;
    case "ArrowRight":
    moverDerecha()
    break;
    default:
    break;
  }
}

function iniciarMapa(){
  avatarJugadorObjeto = obtenerObjetoAvatar(avatarjugador)
  
  intervalo = setInterval(pintarCanvas, 50)
  window.addEventListener("keydown",sePresionoUnaTecla)
  window.addEventListener("keyup", detenerMovimiento)

}

function obtenerObjetoAvatar(avatarjugador){
  for (let i = 0; i <Masters.length; i++) {
    if (avatarjugador === Masters[i].nombre) {
        return Masters[i]
    } 
  }
}

function revisarColision(contrincante){
  const arribaContrincante = contrincante.y
  const abajoContrincante = contrincante.y + contrincante.alto
  const derechaContrincante = contrincante.x + contrincante.ancho
  const izquierdaContrincante = contrincante.x 

  const arribaAvatar = avatarJugadorObjeto.y
  const abajoAvatar = avatarJugadorObjeto.y + avatarJugadorObjeto.alto
  const derechaAvatar = avatarJugadorObjeto.x + avatarJugadorObjeto.ancho
  const izquierdaAvatar = avatarJugadorObjeto.x 

  if(
abajoAvatar < arribaContrincante ||
arribaAvatar > abajoContrincante||
derechaAvatar < izquierdaContrincante ||
izquierdaAvatar > derechaContrincante 
){
  return false;
} else {


detenerMovimiento() 
clearInterval(intervalo)
contrincanteId = contrincante.id
sectionSeleccionarAtaque.style.display = "flex"
sectionVerMapa.style.display ="none"
seleccionarAvatarDelContrincante(contrincante)

sectionManiobras.style.display ="grid"
sectionResultado.style.display = "flex"
return true;}

}
window.addEventListener("load", iniciarJuego)
    

