
const inputs = document.querySelectorAll("input");
const botonResumen = document.getElementById("boton-resumen");
const botonBorrar = document.getElementById("boton-borrar");
const estudiante = document.getElementById("estudiante");
const trainee = document.getElementById("trainee");
const junior = document.getElementById("junior");
const general = document.getElementById("general");

$("#boton-resumen").attr("disabled", true);
$("#nombre").keyup(habilitar);
$("#apellido").keyup(habilitar);
$("#email").keyup(habilitar);
$("#tickets").keyup(habilitar);



estudiante.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="1";
})

trainee.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="2";
})

junior.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="3";
})
general.addEventListener('click', ()=>{
    document.getElementById("Categoria").selectedIndex="4";
})

function obtenerDescuento(){
    const cat= document.getElementById("Categoria").value;
    let descuento;
    switch(cat){
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
        let descuento=obtenerDescuento();
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
    let descuento= obtenerDescuento();
    document.getElementById('transaccion').innerHTML = `Procesando... `;
    }
);

function refrescarPagina(){
    location.reload();
}

