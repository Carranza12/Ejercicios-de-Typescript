"use strict";
/**
 * Ejercicio 3 | Clases
 *
 * Ahora en TypeScript vamos a crear la clase Rombo, la cual debe tener dos propiedades:
DiagonalVertical y DiagonalHorizontal.
Le añadiremos un constructor al que le pasaremos los valores anteriores cuando instanciemos el objeto.
Y también debe de tener un método que calcule el area, que será la multiplicación
de DiagonalVertical * DiagonalHorizontal.
Este método devolverá un número.


 */
Object.defineProperty(exports, "__esModule", { value: true });
class Rombo {
    constructor(dv, dh) {
        this.diagonalVertical = dv;
        this.diagonalHorizontal = dh;
    }
    calcularArea(dv, dh) {
        return dv * dh;
    }
}
exports.default = Rombo;
//PROBANDO LA CLASE
let rombo; //creando variable de tipo Rombo
rombo = new Rombo(30, 20); //instancia de la clase Rombo
console.log(rombo.calcularArea(rombo.diagonalVertical, rombo.diagonalHorizontal)); //accediendo al metodo
