/**
 * 
 * METODO DE ORDENAMIENTO BUBBLE SORT : 
 * 
 * Ordena ascendentemente el siguiente arreglo
 * utilizando el algoritmo de bubble sort
 * Array[45,2,14,16,23]
 * 
 * resultado final: [2,14,16,23,45]
 */

let array:number[]=[45,2,14,16,23]

function bubbleSort(array:number[]):void{
    let temp:number=0
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-1;j++){
            if(array[j]>array[j+i]){
                temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    array.map(elem=>{
        console.log(elem+"");
    })
}

bubbleSort(array)