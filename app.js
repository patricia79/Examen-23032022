let Jugadora = require("./class_Jugadora");

jugadores = [
     new Jugadora("Freia", 20, 198, 98, "b"),
     new Jugador("Sieglinde", 20, 198, 98, "b"),
     new Jugador("Waltraute", 20, 198, 98, "b"),
     new Jugador("Woglinde", 20, 198, 98, "b"),
     new Jugador("Ortrude", 20, 198, 98, "b"),
     new Jugador("Brunhilde", 20, 198, 98, "b"),
     new Jugador("Fricka", 20, 198, 98, "b"),
     new Jugador("Erda", 20, 198, 98, "b")
]


try {
     let jugador1 = new Jugador("jugador1", 20, 198, 98, "xghzb");
} catch (error) {
     console.log("ERROR: " + error.message)
}


// console.log(arrayJugadors);
console.log("Mes de 2 m")
for (let index = 0; index < arrayJugadors.length; index++) {
     if (arrayJugadors[index].h > 200) {
          console.log(arrayJugadors[index].nom, arrayJugadors[index].h);
     }
}

console.log("Menys de 21 anys")

for (let index = 0; index < arrayJugadors.length; index++) {
     if (arrayJugadors[index].edat < 21) {
          console.log(arrayJugadors[index].nom, arrayJugadors[index].edat);
     }
}
