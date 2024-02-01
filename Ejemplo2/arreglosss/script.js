var array = [5, 345, 54, 35, 54.75, 75, 34, 2, 84];
var array2 = ["Juan", "Pedro", "Luis", "Mateo","Abraham","Carlos"];
var arregloObjetos = [
    { nombre: "Edson", edad: 15, sexo: "hombre" },
    { nombre: "Abigail", edad: 18, sexo: "mujer" },
    { nombre: "Carlos", edad: 20, sexo: "hombre" },
    { nombre: "Jazmin", edad: 20, sexo: "mujer" },
];

function Show() {
    lista1();
    lista2();
    lista3();
    listaOrdenadaPorNombre();

    function lista1() {
        var lista = document.getElementById('lista');
        var orden = array.slice().sort(function(a, b) {
            return a - b;
        });
        lista.innerHTML = "";
        for (let i = 0; i < orden.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = orden[i];
            lista.appendChild(li);
        }
    }
    

    function lista2() {
        var lista2 = document.getElementById('lista2');
       datos = array2.sort();
        for (let i = 0; i < array2.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = array2[i];
            lista2.appendChild(li);
        }
    }

    function lista3() {
        var lista3 = document.getElementById('lista3'); // Cambia el ID a "listaOrdenada"
        for (let i = 0; i < arregloObjetos.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = arregloObjetos[i].nombre;
            lista3.appendChild(li);
        }
    }

    function listaOrdenadaPorNombre() {
        var listaOrdenada = document.getElementById('listaOrdenada');

        var arregloOrdenado = arregloObjetos.slice().sort(function (a, b) {
            return a.nombre.localeCompare(b.nombre);
        });

        for (let i = 0; i < arregloOrdenado.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = arregloOrdenado[i].nombre+"\n"+arregloOrdenado[i].edad+"\n"+arregloOrdenado[i].sexo;
            listaOrdenada.appendChild(li);
        }
    }
}

console.log(arregloObjetos);
