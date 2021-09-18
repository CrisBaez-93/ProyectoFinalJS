$(".checkbox").click(function () {
  if ($("input.checkbox").is(":checked")) {
    $(".theme").attr("href", "darkMode.css");
  } else {
    $(".theme").attr("href", "lightMode.css");
  }
});

let puntaje = 50;
sessionStorage.setItem("puntaje", puntaje);
const URLHP = "https://hp-api.herokuapp.com/api/characters";

class Respuestas {
  constructor(tipo, dif, vent) {
    this.tipo = tipo;
    this.dif = dif;
    this.vent = vent;
  }
}

let listaRespuestas = [];

let respuesta1 = new Respuestas("AAA", "esta diferencia", "estos atributos");
let respuesta2 = new Respuestas("BBB", "esta otra diferencia", "estos otros atributos");
let respuesta3 = new Respuestas("CCC", "estas mas diferencia", "estos menos atributos");
let respuesta4 = new Respuestas("DDD", "estas menos diferencia", "estos mas atributos");

listaRespuestas.push(respuesta1);
listaRespuestas.push(respuesta2);
listaRespuestas.push(respuesta3);
listaRespuestas.push(respuesta4);

let selectorRespuesta = document.getElementById("respuesta");

$("#submit1").click(function (e) {
  e.preventDefault();
  $("#pregunta1").animate(
    { height: "50px", Color: "white" },
    1000,
    respuestaClick1
  );
});
$("#submit2").click(function (e) {
  e.preventDefault();
  $("#pregunta2").animate(
    { height: "50px", Color: "white" },
    1000,
    respuestaClick2
  );
});
$("#submit3").click(function (e) {
  e.preventDefault();
  $("#pregunta3").animate(
    { height: "50px", Color: "white" },
    1000,
    respuestaClick3
  );
});
$("#submit4").click(function (e) {
  e.preventDefault();
  $("#pregunta4").animate(
    { height: "50px", Color: "white" },
    1000,
    respuestaClick4
  );
});

function respuestaClick1() {
  let puntos = document.getElementById("primerRespuesta").value;
  if (puntos == "A") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 4;
  } else if (puntos == "B") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 6;
  } else if (puntos == "C") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 8;
  } else if (puntos == "D") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 10;
  } else {
    console.log("Respuesta no válida");
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 50;
    sessionStorage.setItem("puntaje", puntaje);
    console.log("Tu Puntaje es " + puntaje);
    let div1 = document.getElementById("pregunta1");
    let p1 = document.createElement("p");
    div1.appendChild(p1);
    p1.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div1 = document.getElementById("pregunta1");
  let p1 = document.createElement("p");
  div1.appendChild(p1);
  p1.textContent =
    "Tu respuesta fue " +
    puntos +
    ", tu puntaje es " +
    sessionStorage.getItem("puntaje", puntaje);
}

function respuestaClick2() {
  let puntos = document.getElementById("segundaRespuesta").value;
  if (puntos == "A") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 4;
  } else if (puntos == "B") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 6;
  } else if (puntos == "C") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 8;
  } else if (puntos == "D") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 10;
  } else {
    console.log("Respuesta no válida");
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 50;
    sessionStorage.setItem("puntaje", puntaje);
    console.log("Tu Puntaje es " + puntaje);
    let div2 = document.getElementById("pregunta2");
    let p2 = document.createElement("p");
    div2.appendChild(p2);
    p2.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div2 = document.getElementById("pregunta2");
  let p2 = document.createElement("p");
  div2.appendChild(p2);
  p2.textContent =
    "Tu respuesta fue " +
    puntos +
    ", tu puntaje es " +
    sessionStorage.getItem("puntaje", puntaje);
}

function respuestaClick3() {
  let puntos = document.getElementById("tercerRespuesta").value;
  if (puntos == "A") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 4;
  } else if (puntos == "B") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 6;
  } else if (puntos == "C") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 8;
  } else if (puntos == "D") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 10;
  } else {
    console.log("Respuesta no válida");
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 50;
    sessionStorage.setItem("puntaje", puntaje);
    console.log("Tu Puntaje es " + puntaje);
    let div3 = document.getElementById("pregunta3");
    let p3 = document.createElement("p");
    div3.appendChild(p3);
    p3.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div3 = document.getElementById("pregunta3");
  let p3 = document.createElement("p");
  div3.appendChild(p3);
  p3.textContent =
    "Tu respuesta fue " +
    puntos +
    ", tu puntaje es " +
    sessionStorage.getItem("puntaje", puntaje);
}

function respuestaClick4() {
  let puntos = document.getElementById("cuartaRespuesta").value;
  if (puntos == "A") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 4;
  } else if (puntos == "B") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 6;
  } else if (puntos == "C") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 8;
  } else if (puntos == "D") {
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 10;
  } else {
    console.log("Respuesta no válida");
    puntaje = sessionStorage.getItem("puntaje", puntaje) - 50;
    sessionStorage.setItem("puntaje", puntaje);
    console.log("Tu Puntaje es " + puntaje);
    let div4 = document.getElementById("pregunta4");
    let p4 = document.createElement("p");
    div4.appendChild(p4);
    p4.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div4 = document.getElementById("pregunta4");
  let p4 = document.createElement("p");
  div4.appendChild(p4);
  p4.textContent =
    "Tu respuesta fue " +
    puntos +
    ", tu puntaje es " +
    sessionStorage.getItem("puntaje", puntaje);

  if (sessionStorage.getItem("puntaje", puntaje) >= 34) {
    console.log(`Tu personalidad es ${respuesta1.tipo}, se diferencia de las otras en ${respuesta1.dif}, y sus principales ventajas son ${respuesta1.vent}`);
    let h1 = document.createElement("h1");
    selectorRespuesta.appendChild(h1);
    h1.textContent = `Tu personalidad es ${respuesta1.tipo}, se diferencia de las otras en ${respuesta1.dif}, y sus principales ventajas son ${respuesta1.vent}`;
    $.get(URLHP, function (respuesta, estado){
        if(estado === "success"){
            let datosPersonajes = respuesta;
            $("#respuesta2").prepend(`<h2>Tu personalidad concuerda con ${datosPersonajes[0].name} de la casa ${datosPersonajes[0].house}</h2>`)
            }})
  } else if (sessionStorage.getItem("puntaje", puntaje) >= 26 && puntaje < 34) {
    console.log(`Tu personalidad es ${respuesta2.tipo}, se diferencia de las otras en ${respuesta2.dif}, y sus principales ventajas son ${respuesta2.vent}`);
    let h1 = document.createElement("h1");
    selectorRespuesta.appendChild(h1);
    h1.textContent = `Tu personalidad es ${respuesta2.tipo}, se diferencia de las otras en ${respuesta2.dif}, y sus principales ventajas son ${respuesta2.vent}`;
    $.get(URLHP, function (respuesta, estado){
        if(estado === "success"){
            let datosPersonajes = respuesta;
            $("#respuesta2").prepend(`<h2>Tu personalidad concuerda con ${datosPersonajes[1].name} de la casa ${datosPersonajes[1].house}</h2>`)
            }})
  } else if (sessionStorage.getItem("puntaje", puntaje) >= 18 && puntaje < 25) {
    console.log(`Tu personalidad es ${respuesta3.tipo}, se diferencia de las otras en ${respuesta3.dif}, y sus principales ventajas son ${respuesta3.vent}`);
    let h1 = document.createElement("h1");
    selectorRespuesta.appendChild(h1);
    h1.textContent = `Tu personalidad es ${respuesta3.tipo}, se diferencia de las otras en ${respuesta3.dif}, y sus principales ventajas son ${respuesta3.vent}`;
    $.get(URLHP, function (respuesta, estado){
        if(estado === "success"){
            let datosPersonajes = respuesta;
            $("#respuesta2").prepend(`<h2>Tu personalidad concuerda con ${datosPersonajes[2].name} de la casa ${datosPersonajes[2].house}</h2>`)
            }})
  } else if (sessionStorage.getItem("puntaje", puntaje) == 10 && puntaje < 17) {
    console.log(`Tu personalidad es ${respuesta4.tipo}, se diferencia de las otras en ${respuesta4.dif}, y sus principales ventajas son ${respuesta4.vent}`);
    let h1 = document.createElement("h1");
    selectorRespuesta.appendChild(h1);
    h1.textContent = `Tu personalidad es ${respuesta4.tipo}, se diferencia de las otras en ${respuesta4.dif}, y sus principales ventajas son ${respuesta4.vent}`;
    $.get(URLHP, function (respuesta, estado){
        if(estado === "success"){
            let datosPersonajes = respuesta;
            $("#respuesta2").prepend(`<h2>Tu personalidad concuerda con ${datosPersonajes[3].name} de la casa ${datosPersonajes[3].house}</h2>`)
            }})
  } else {
    console.log("HAS FALLADO EL TEST");
    let h1 = document.createElement("h1");
    selectorRespuesta.appendChild(h1);
    h1.textContent = "HAS FALLADO EL TEST";
  }
}
