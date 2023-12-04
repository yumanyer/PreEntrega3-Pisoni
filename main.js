
let GustosHelados = [];
let input = document.getElementById("helados");
let boton = document.getElementById("agregar");
let freezer = document.getElementById("freezer");
let inputEliminar = document.getElementById("inputEliminar");
let botonEliminar = document.getElementById("botonEliminar");

window.onload = function() {
    let helados = localStorage.getItem("heladosguardados");
    if (helados) {
        // llamamos a el OBJETO que guardamos en el local
        GustosHelados = JSON.parse(helados);
        registro(); // Mostrar los helados almacenados al cargar la página
    }
}

boton.addEventListener("click", function() {
    let valorInput = input.value;
    let objeto = {
        nombre: valorInput, // Agregar el atributo nombre
        gusto: valorInput,
        fecha: new Date().toLocaleString()
    }

    GustosHelados.push(objeto);

    freezer.innerHTML = `Gusto: ${objeto.gusto}, Fecha:${objeto.fecha}`;
// GUARDAMOS UN OBJETO EN EL LOCAL
    localStorage.setItem("heladosguardados", JSON.stringify(GustosHelados));

    input.value = "";

    registro(); // Mostrar todos los helados después de agregar uno nuevo
})

botonEliminar.addEventListener("click", function() {
    eliminarHeladoPorNombre()
})

function eliminarHeladoPorNombre() {
    let nombreEliminar = inputEliminar.value

    if (nombreEliminar) {
        GustosHelados = GustosHelados.filter(objeto => objeto.nombre !== nombreEliminar);
        localStorage.setItem("heladosguardados", JSON.stringify(GustosHelados));
        registro();
        inputEliminar.value = "";
    } 
}

let registro = () => {
    freezer.innerHTML = "";

    GustosHelados.forEach(function(objeto) {
        freezer.innerHTML += `Gusto: ${objeto.gusto}, Fecha: ${objeto.fecha} Esto está en el frezzer <br>`;
    })
}
