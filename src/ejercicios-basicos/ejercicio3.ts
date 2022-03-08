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

export default class Rombo{
    diagonalVertical:number;
    diagonalHorizontal:number;

    constructor(dv:number,dh:number){
        this.diagonalVertical=dv;
        this.diagonalHorizontal=dh;
    }

    calcularArea(dv:number,dh:number):number{
        return dv*dh;
    }

}
//PROBANDO LA CLASE

let rombo:Rombo; //creando variable de tipo Rombo
rombo=new Rombo(30,20); //instancia de la clase Rombo
console.log(rombo.calcularArea(rombo.diagonalVertical,rombo.diagonalHorizontal)); //accediendo al metodo

