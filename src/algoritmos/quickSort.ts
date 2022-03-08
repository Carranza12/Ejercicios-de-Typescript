/**
 * 
 * METODO DE ORDENAMIENTO QUICK SORT : RECURSIVIDAD
 * 
 * Ordena ascendentemente el siguiente arreglo
 * utilizando el algoritmo de quick sort
 * Array[45,2,14,16,23]
 * 
 * resultado final: [2,14,16,23,45]
 */


 function quickSort(array:any):number[]{
     if(array.length<1){
         return[]
     }

    let left:number[]=[];
    let right:number[]=[];
    let pivot:number=array[0];
    let arrayFinal:number[]=[];
    for(let i=1;i<array.length;i++){
        if(array[i]<pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return arrayFinal.concat(quickSort(left),pivot,quickSort(right))
}

console.log(quickSort([45,2,14,16,23]));
