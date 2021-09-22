$(".checkbox").click(function () {
  if ($("input.checkbox").is(":checked")) {
    $(".theme").attr("href", "darkMode.css");
  } else {
    $(".theme").attr("href", "lightMode.css");
  }
});

let puntaje = 65;
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

let respuesta1 = new Respuestas("Promedio", "inestabilidad emocional", "cerradas y a la vez extrovertidas");
let respuesta2 = new Respuestas("Modelo a Seguir", "mucha amabilidad", "poco neuroticos");
let respuesta3 = new Respuestas("Reservada", "mucha estabilidad", "agradables y pensar antes de actuar");
let respuesta4 = new Respuestas("Egocéntrica", "mucha estima en su persona", "centrados en sí mismos");

listaRespuestas.push(respuesta1);
listaRespuestas.push(respuesta2);
listaRespuestas.push(respuesta3);
listaRespuestas.push(respuesta4);

let selectorRespuesta = document.getElementById("respuesta");

$("#submit1").click(function (e) {
  e.preventDefault();
  $("#pregunta1").animate(
    { height: "50px", Color: "#d9d9d9" },
    1000,
    respuestaClick1
  );
});
$("#submit2").click(function (e) {
  e.preventDefault();
  $("#pregunta2").animate(
    { height: "50px", Color: "#d9d9d9" },
    1000,
    respuestaClick2
  );
});
$("#submit3").click(function (e) {
  e.preventDefault();
  $("#pregunta3").animate(
    { height: "50px", Color: "#d9d9d9" },
    1000,
    respuestaClick3
  );
});
$("#submit4").click(function (e) {
  e.preventDefault();
  $("#pregunta4").animate(
    { height: "50px", Color: "#d9d9d9" },
    1000,
    respuestaClick4
  );
});
$("#submit5").click(function (e) {
  e.preventDefault();
  $("#pregunta5").animate(
    { height: "50px", Color: "#d9d9d9" },
    1000,
    respuestaClick5
  );
});
$("#submit6").click(function (e) {
  e.preventDefault();
  $("#pregunta5").animate(
    { height: "50px", Color: "#d9d9d9" },
    1000,
    respuestaClick6
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
    p1.setAttribute("class", "resultado");
    div1.appendChild(p1);
    p1.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div1 = document.getElementById("pregunta1");
  let p1 = document.createElement("p");
  p1.setAttribute("class", "resultado");
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
    p2.setAttribute("class", "resultado");
    div2.appendChild(p2);
    p2.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div2 = document.getElementById("pregunta2");
  let p2 = document.createElement("p");
  p2.setAttribute("class", "resultado");
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
    p3.setAttribute("class", "resultado");
    div3.appendChild(p3);
    p3.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div3 = document.getElementById("pregunta3");
  let p3 = document.createElement("p");
  p3.setAttribute("class", "resultado");
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
    p4.setAttribute("class", "resultado");
    div4.appendChild(p4);
    p4.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div4 = document.getElementById("pregunta4");
  let p4 = document.createElement("p");
  p4.setAttribute("class", "resultado");
  div4.appendChild(p4);
  p4.textContent =
    "Tu respuesta fue " +
    puntos +
    ", tu puntaje es " +
    sessionStorage.getItem("puntaje", puntaje);
}

function respuestaClick5() {
  let puntos = document.getElementById("quintaRespuesta").value;
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
    let div5 = document.getElementById("pregunta5");
    let p5 = document.createElement("p");
    p5.setAttribute("class", "resultado");
    div5.appendChild(p5);
    p5.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div5 = document.getElementById("pregunta5");
  let p5 = document.createElement("p");
  p5.setAttribute("class", "resultado");
  div5.appendChild(p5);
  p5.textContent =
    "Tu respuesta fue " +
    puntos +
    ", tu puntaje es " +
    sessionStorage.getItem("puntaje", puntaje);
}

function respuestaClick6() {
  let puntos = document.getElementById("sextaRespuesta").value;
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
    let div6 = document.getElementById("pregunta6");
    let p6 = document.createElement("p");
    p6.setAttribute("class", "resultado");
    div6.appendChild(p6);
    p6.textContent = "Tu respuesta fue incorrecta";
  }
  sessionStorage.setItem("puntaje", puntaje);
  console.log("Tu Puntaje es " + puntaje);
  let div6 = document.getElementById("pregunta6");
  let p6 = document.createElement("p");
  p6.setAttribute("class", "resultado");
  div6.appendChild(p6);
  p6.textContent =
    "Tu respuesta fue " +
    puntos +
    ", tu puntaje es " +
    sessionStorage.getItem("puntaje", puntaje);

  if (sessionStorage.getItem("puntaje", puntaje) >= 41) {
    console.log(`Tu personalidad es ${respuesta1.tipo}, son personas con ${respuesta1.dif}, y se diferencia de los demas por ser ${respuesta1.vent}`);
    let h2 = document.createElement("h2");
    selectorRespuesta.appendChild(h2);
    h2.textContent = `Tu personalidad es ${respuesta1.tipo}, son personas con ${respuesta1.dif}, y se diferencia de los demas por ser ${respuesta1.vent}`;
    $.get(URLHP, function (respuesta, estado){
        if(estado === "success"){
            let datosPersonajes = respuesta;
            $("#respuesta2").prepend(`<h2>Tu personalidad concuerda con ${datosPersonajes[0].name} de la casa ${datosPersonajes[0].house}</h2>`)
            }})
  } else if (sessionStorage.getItem("puntaje", puntaje) >= 30 && puntaje <= 40) {
    console.log(`Tu personalidad es ${respuesta2.tipo}, son personas con ${respuesta2.dif}, y se diferencia de los demas por ser ${respuesta2.vent}`);
    let h2 = document.createElement("h2");
    selectorRespuesta.appendChild(h2);
    h2.textContent = `Tu personalidad es ${respuesta2.tipo}, son personas con ${respuesta2.dif}, y se diferencia de los demas por ser ${respuesta2.vent}`;
    $.get(URLHP, function (respuesta, estado){
        if(estado === "success"){
            let datosPersonajes = respuesta;
            $("#respuesta2").prepend(`<h2>Tu personalidad concuerda con ${datosPersonajes[1].name} de la casa ${datosPersonajes[1].house}</h2>`)
            }})
  } else if (sessionStorage.getItem("puntaje", puntaje) >= 13 && puntaje <= 29) {
    console.log(`Tu personalidad es ${respuesta3.tipo}, son personas con ${respuesta3.dif}, y se diferencia de los demas por ser ${respuesta3.vent}`);
    let h2 = document.createElement("h2");
    selectorRespuesta.appendChild(h2);
    h2.textContent = `Tu personalidad es ${respuesta3.tipo}, son personas con ${respuesta3.dif}, y se diferencia de los demas por ser ${respuesta3.vent}`;
    $.get(URLHP, function (respuesta, estado){
        if(estado === "success"){
            let datosPersonajes = respuesta;
            $("#respuesta2").prepend(`<h2>Tu personalidad concuerda con ${datosPersonajes[2].name} de la casa ${datosPersonajes[2].house}</h2>`)
            }})
  } else if (sessionStorage.getItem("puntaje", puntaje) == 5 && puntaje <= 12) {
    console.log(`Tu personalidad es ${respuesta4.tipo}, son personas con ${respuesta4.dif}, y se diferencia de los demas por ser ${respuesta4.vent}`);
    let h2 = document.createElement("h2");
    selectorRespuesta.appendChild(h2);
    h2.textContent = `Tu personalidad es ${respuesta4.tipo}, son personas con ${respuesta4.dif}, y se diferencia de los demas por ser ${respuesta4.vent}`;
    $.get(URLHP, function (respuesta, estado){
        if(estado === "success"){
            let datosPersonajes = respuesta;
            $("#respuesta2").prepend(`<h2>Tu personalidad concuerda con ${datosPersonajes[3].name} de la casa ${datosPersonajes[3].house}</h2>`)
            }})
  } else {
    console.log("HAS FALLADO EL TEST");
    let h2 = document.createElement("h2");
    selectorRespuesta.appendChild(h2);
    h2.textContent = "HAS FALLADO EL TEST";
  }
}
