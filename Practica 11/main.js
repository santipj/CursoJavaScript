//---------------PALINDROMO-------------

// const palindromo = (palabra) => {

//     palabra = palabra.replace(' ','');
//     palabra = palabra.toLowerCase();
    
//     let palabraInvertida = palabra.split('').reverse().join('');

//     if(palabra === palabraInvertida){
//         return true;
//     }else {
//         return false;
//     }
// }

// console.log(palindromo('ana'));

//----------------NUMEROS PRIMOS-------------


const esPrimo = (numero) =>{
    let contador = 0;
    let numeros =[];

    for (let i = 0; i < numero; i++){
        numeros.push(i+1);
    }

    for (let n of numeros){
        if(n === 1 || n ===numero){
            continue;
        }
        if(numero % n === 0){
            contador++;
        }
    }

    return contador === 0 ;
}

console.log(esPrimo(17));