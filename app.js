let Jugadora = require("./class_Jugadora.js");

arrayJugadores = [
  new Jugadora("Sigrun", 20, 198, 98, "b"),
  new Jugadora("Sieglinde", 20, 198, 98, "b"),
  new Jugadora("Waltraute", 20, 198, 98, "b"),
  new Jugadora("Woglinde", 20, 198, 98, "b"),
  new Jugadora("Ortrude", 20, 198, 98, "b"),
  new Jugadora("Brunhilde", 20, 198, 98, "b"),
  new Jugadora("Fricka", 20, 198, 98, "b"),
  new Jugadora("Erda", 20, 198, 98, "b"),
  new Jugadora("Perica", 20, 198, 98, "jgjggjb"),
];

/*try {
  let Jugadora =  new Jugadora("Waltraute", 20, 198, 98, "bjhfksdgfjh");
} catch (error) {
  console.log("ERROR: " + error.message);
}*/

// console.log(arrayJugadores);
console.log("Mes de 2 m");
for (let index = 0; index < arrayJugadores.length; index++) {
  if (arrayJugadores[index].h > 200) {
    console.log(arrayJugadores[index].nom, arrayJugadores[index].h);
  }
}

console.log("Menys de 21 anys");

for (let index = 0; index < arrayJugadores.length; index++) {
  if (arrayJugadores[index].edat < 21) {
    console.log(arrayJugadores[index].nom, arrayJugadores[index].edat);
  }
}
