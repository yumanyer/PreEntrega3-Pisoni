
//  quiero que se muestre el stock de helados (a traves de un buscador)

//  quiero registro de todos los helados agregados 
let GustosHelados = [];
let input = document.getElementById("helados");
let boton = document.getElementById("agregar");
let freezer = document.getElementById("freezer");

window.onload = function() {
    let helados = localStorage.getItem("heladosguardados");
    if (helados) {
        GustosHelados = JSON.parse(helados);
        registro(); // Mostrar los helados almacenados al cargar la página
    }
}

boton.addEventListener("click", function() {
    let valorInput = input.value;
    let objeto = {
        gusto: valorInput,
        fecha: new Date().toLocaleString()
    };

    // LE HAGO UN PUSH A LOS HELADOS Y LOS METO EN UNA ARRAY
    GustosHelados.push(objeto);

    // muestro los helados en el div
    freezer.innerHTML = `Gusto: ${objeto.gusto}, Fecha:${objeto.fecha}`;

    // Guardar en localStorage después de cada clic
    localStorage.setItem("heladosguardados", JSON.stringify(GustosHelados));

    input.value = "";

    registro(); // Mostrar todos los helados después de agregar uno nuevo
});

let registro = () => {
    
    freezer.innerHTML = "";

    // Mostrar todos los helados en el div
    GustosHelados.forEach(function(objeto) {
        freezer.innerHTML += `Gusto: ${objeto.gusto}, Fecha: ${objeto.fecha} Esto viene del frezzer<br>`;
    });
}

