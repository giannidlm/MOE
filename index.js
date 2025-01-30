const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
  constructor(id) {
    this.id = id
    this.ataques = []
    this.Avatar = null
    
  }

  asignarAtaques(ataques){
    this.ataques = ataques
    console.log(`Ataques asignados a jugador ${this.id}:`, ataques)
  }

  asignarAvatar(Avatar) {
    this.Avatar = Avatar
  }
  actualizarPosicion(x, y){
    this.x = x
    this.y = y
  }

 
}

class Avatars {
  constructor(nombre) {
    this.nombre = nombre
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`

  const jugador = new Jugador(id)

  jugadores.push(jugador)

  res.setHeader("Access-Control-Allow-Origin", "*")
  
  res.send(id)
})

app.post("/master/:jugadorId", (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const nombre = req.body.Avatar || ""
  const Avatar = new Avatars(nombre)
  
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarAvatar(Avatar)
  }
  
  console.log(jugadores)
  console.log(jugadorId)
  res.end()
})

app.post("/master/:jugadorId/posicion",(req, res) =>{
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
      jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

     const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)

    res.send({
        enemigos
    })
})

app.post("/master/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []

    
    const jugadorIndex = jugadores.findIndex((jugador) => jugador.id === jugadorId)
  
    if (jugadorIndex >= 0) {
      jugadores[jugadorIndex].asignarAtaques(ataques)
      console.log(`Ataques asignados a jugador ${jugadorId}:`, ataques);
    } else {
        console.error(`Jugador ${jugadorId} no encontrado`);
    }
    
    res.end()
})

app.get("/master/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId);
if (jugador) {
    res.send({
    ataques: jugador.ataques || []
});
} else {
   console.error(`Jugador ${jugadorId} no encontrado`);
    res.send({
      ataques: []
   
});
}

})

app.listen(8080, () => {
  console.log("Servidor funcionando")
})