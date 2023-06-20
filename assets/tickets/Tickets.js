
let inputs = document.querySelectorAll("input");
let categorias = document.getElementById("Categoria");
let botonResumen = document.getElementById("boton-resumen");
let botonBorrar = document.getElementById("boton-borrar");
let cartaA = document.getElementById("estudiante");
let cartaB = document.getElementById("trainee");
let cartaC = document.getElementById("junior");
let general = document.getElementById("general");
$("#boton-resumen").attr("disabled", true);
$("#nombre").keyup(habilitar);
$("#apellido").keyup(habilitar);
$("#email").keyup(habilitar);
$("#tickets").keyup(habilitar);
$("#Categoria").change(habilitar);


cartaA.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="1";
})

cartaB.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="2";
})

cartaC.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="3";
})
general.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="4";
})

function obtenerdescuento(){
    let categoria = document.getElementById("Categoria").value;
    let descuento;
    switch(categoria){
        case "estudiante":
            descuento=0.2;
            break;
        case "trainee":
            descuento=0.5;
            break;
        case "junior":
            descuento=0.85;
            break;
        default:
            descuento=1;
    }
    return descuento;
}


function habilitar(){
    let n= document.getElementById("nombre").value;
    let a= document.getElementById("apellido").value;
    let e= document.getElementById("email").value;
    let c= document.getElementById("tickets").value;
    

    let valor = 0;
    if (n==''){
        valor++;
    }
    if (a==''){
        valor++;
    }
    if (e==''){
        valor++;
    }
    if (c==''){
        valor++;
    }
    
    
    if (valor==0){
        let descuento=obtenerdescuento();
        document.getElementById('total').innerHTML = 'Total a Pagar: $ ' + 200 * descuento * c; 
        $("#boton-resumen").attr("disabled", false);
    } else {
        $("#boton-resumen").attr("disabled", true);
    }
}

botonBorrar.addEventListener('click', ()=>{
    inputs.forEach(input => input.value = '');
    document.getElementById('total').innerHTML = 'Total a Pagar: $ ';
    $("#boton-resumen").attr("disabled", true);
});
botonResumen.addEventListener('click', ()=>{
    let nombre= document.getElementById("nombre").value;
    let apellido= document.getElementById("apellido").value;
    let email= document.getElementById("email").value;
    let cantidad= document.getElementById("tickets").value;
    let descuento= obtenerDescuento();
    document.getElementById('resumen').innerHTML = `Procesando... ` + 200 * descuento * cantidad;
    }
);

function refrescarPagina(){
    location.reload();
}

