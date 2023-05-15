let pares = [];
let imPares = [];
let numeros = [1,2,3,4,5,6,7,8,9];
let numRandom = 0;

for (let n of numeros){
    numRandom = parseInt(Math.random()*100);
    let resul = n*numRandom;

    if(resul%2==0){
        console.log(`${n} x ${numRandom} = ${resul}`);
        pares.push(numRandom);
    }else{
        console.log(`${n} x ${numRandom} = ${resul}`);
        imPares.push(resul)
    }
}

console.log('Array de Pares: '+ pares);
console.log('Array de ImPares: '+ imPares);


