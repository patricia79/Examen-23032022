let Jugadora = require("./class_Jugadora").default;

arrayjugadores = [
     new Jugadora("Jugadora", 20, 198, 98, "b"),
     new Jugadora("Sieglinde", 20, 198, 98, "b"),
     new Jugadora("Waltraute", 20, 198, 98, "b"),
     new Jugadora("Woglinde", 20, 198, 98, "b"),
     new Jugadora("Ortrude", 20, 198, 98, "b"),
     new Jugadora("Brunhilde", 20, 198, 98, "b"),
     new Jugadora("Fricka", 20, 198, 98, "b"),
     new Jugadora("Erda", 20, 198, 98, "b")
]


try {
     let Jugadora = new Jugadora("Jugadora", 20, 198, 98, "xghzb");
} catch (error) {
     console.log("ERROR: " + error.message)
}


// console.log(arrayJugadores);
console.log("Mes de 2 m")
for (let index = 0; index < arrayJugadores.length; index++) {
     if (arrayjugadores[index].h > 200) {
          console.log(arrayjugadores[index].nom, arrayjugadores[index].h);
     }
}

console.log("Menys de 21 anys")

for (let index = 0; index < arrayjugadores.length; index++) {
     if (arrayjugadores[index].edat < 21) {
          console.log(arrayjugadores[index].nom, arrayjugadores[index].edat);
     }
}
