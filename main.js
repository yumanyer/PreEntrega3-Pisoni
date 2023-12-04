//  CONTADOR DE STOCK DE HELADOS 


//  quiero que se muestre que helado se esta sumando al stock 

//  quiero que se muestre el stock de helados (a traves de un buscador)

//  quiero registro de todos los helados agregados 


let input = document.getElementById("helados")

let boton = document.getElementById("agregar")

let freezer = document.getElementById("freezer") 


window.onload = function(){
    let helados = localStorage.getItem("heladosguardados")
    if (helados){
        freezer.innerHTML= helados
    }
}




boton.addEventListener("click",function(){

    let valorInput = input.value;


    let objeto={
        gusto:valorInput,
        fecha:new Date()
    }

    freezer.innerHTML = valorInput;


    localStorage.setItem("heladosguardados", valorInput);

    input.value = ""
} 
)


