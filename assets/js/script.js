





function solicitarNumero() {
    let valorSeleccionado =parseInt(prompt("Ingrese un numero de 1 a 20"));

    if( (valorSeleccionado>=1) && (valorSeleccionado <=20)) {
        alert("entramos")
    }  else {
        alert("número fuera de rango")
    }
}

solicitarNumero();


 
/*
var eleccion =3;
function factorial(){

    for(var i=1; i<=eleccion; i++) {

        var resultado = i*i+1;
        alert (resultado)

    }

}
factorial()*/