





function solicitarNumero() {
    let valorSeleccionado =parseInt(prompt("Ingrese un numero de 1 a 20"));
    document.write( "<h1>" + "Resultados mostrados por consola, revise la consola por favor" + "</h1>")

    if( (valorSeleccionado>=1) && (valorSeleccionado <=20)) {
        
        var factorial = 1;
        for (var i = 1; i<=valorSeleccionado; i++) {
            var resultado = i * valorSeleccionado;
            console.log(i + " x " + valorSeleccionado + " = " + resultado );
        
          
            for ( var a = i; a <= valorSeleccionado; a++ ) {
                var factorial = factorial * a;
                console.log("El factorial de " + a + " es " +  factorial + '\n' + '\n');
                break;
            }
        }


    }  else {
        alert("número fuera de rango")
    }
}

solicitarNumero();







