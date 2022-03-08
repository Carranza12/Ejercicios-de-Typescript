"use strict";
/**
 * INSTRUCCIONES DEL EJERCICIO ↓
 *
 * La siguiente función contendrá parámetros obligatorios, opcionales y otros
 * serán por defecto si no le pasamos ninguno.


 * Deberás adaptarlos de la siguiente forma:
 * nombre → obligatorio
 * edad → opcional
 * arma → por defecto u omisión será "pistola"
 */
/*
    function getVillano( nombre, edad, arma ) {
    var mensaje;
    if( edad ) {
        mensaje = nombre + " tiene una edad de: " + edad + " y arma: " + arma;
    } else {
        mensaje = nombre + " tiene un " + edad
    }
    };

 */
//SOLUCION
function getVillano(nombre, edad, arma = "pistola") {
    let mensaje;
    if (edad) {
        mensaje = `${nombre} tiene una edad de ${edad} y arma ${arma}`;
    }
    else {
        mensaje = `${nombre} tiene una edad de ${edad}`;
    }
    return mensaje;
}
