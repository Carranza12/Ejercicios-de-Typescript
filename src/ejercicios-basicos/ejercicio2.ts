//Ejercicio 2 | Interface
/**
 * Crear una interface en TypeScript a partir de este código JavaScript:
 * var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};
 */

interface personaje{
    nombre:string;
    poderes:Array<String>; // alternativa: String[]
}