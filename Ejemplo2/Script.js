var number = 23;
// que el usuario introduzca los 2 valores y se sumen 

// en las siguientes funciones primeramente se manda llamar el valor que contiene el input del html 
// por medio del id, a su vez se convierte a entero, luego se guarda un div en la variable res para posteriormente 
// igualar el resultado de la variable op a res con la funcion .innerHTML lo que nos permite mostrar el resultado
// dentro de un div, todas las funciones son iguales solo cambia el operador matematico.
function Suma(){
    var num = parseInt(document.getElementById("num1").value);
    var num1 = parseInt(document.getElementById("num2").value);
    var res = document.getElementById("result");
    var op = num + num1;
    res.innerHTML = op;
}
function multiplicar(){
    var num = parseInt(document.getElementById("num1").value);
    var num1 = parseInt(document.getElementById("num2").value);
    var res = document.getElementById("result");
    var op = num * num1;
    res.innerHTML = op;
}
function restar(){
    var num = parseInt(document.getElementById("num1").value);
    var num1 = parseInt(document.getElementById("num2").value);
    var res = document.getElementById("result");
    var op = num - num1;
    res.innerHTML = op;
}
function dividir(){
    var num = parseInt(document.getElementById("num1").value);
    var num1 = parseInt(document.getElementById("num2").value);
    var res = document.getElementById("result");
    var op = num / num1;
    res.innerHTML = op;
}
var productos = [
    {id: "003", nombre:"Aromatizante",foto:"ps.jpeg",precio:100},
    {id: "003", nombre:"Aromatizante",foto:"ps.jpeg",precio:100},
    {id: "003", nombre:"Aromatizante",foto:"ps.jpeg",precio:100},
    {id: "003", nombre:"Aromatizante",foto:"ps.jpeg",precio:100},
    {id: "003", nombre:"Aromatizante",foto:"ps.jpeg",precio:100},
    {id: "003", nombre:"Aromatizante",foto:"ps.jpeg",precio:100},
    {id: "004", nombre:"Desengrasante",foto:"ps.jpeg",precio:200}
];

function MostrarProd(producto){
    var p1 = document.getElementById("prod");
   
productos.forEach(function(producto){
    var div = document.createElement("div");
    var H2 = document.createElement("h2");
    var img = document.createElement("img");
    var p = document.createElement("p");
    H2.innerHTML = producto.nombre;
    img.src = producto.foto;
    p.innerHTML = producto.precio;
    div.className = "prod";
    div.appendChild(H2);
    div.appendChild(img);
    div.appendChild(p);
    p1.appendChild(div);
});
}