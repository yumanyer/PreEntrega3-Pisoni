
//  quiero que se muestre el stock de helados (a traves de un buscador)

//  quiero registro de todos los helados agregados 
let GustosHelados=[];

let input = document.getElementById("helados")

let boton = document.getElementById("agregar")

let freezer = document.getElementById("freezer") 


window.onload = function(){
    let helados = localStorage.getItem("heladosguardados")
    if (helados){

        // SACAMOS DEL STORAGE EL OBJETO QUE HABIAMOS GUARDADO
        let frozz = JSON.parse(helados)
        
        freezer.innerHTML=`Gusto: ${frozz.gusto}, Fecha:${frozz.fecha}  esto viene del frezzer`;
    }
}



boton.addEventListener("click",function(){

    let valorInput = input.value;


    let objeto = {
        gusto:valorInput,
        fecha:new Date().toLocaleString()
    }

    // LE HAGO UN PUSH A LOS HELADOS Y LOS METO EN UNA ARRAY

    GustosHelados.push(objeto);


// muestro los helados en el div 
    freezer.innerHTML = `Gusto: ${objeto.gusto}, Fecha:${objeto.fecha}`;



// guardamos un OBJETO en local storage
    // localStorage.setItem("heladosguardados", JSON.stringify(objeto));
// ahora guardamos el array 
    localStorage.setItem("heladosguardados", JSON.stringify(GustosHelados));

    input.value = ""
} 
)


