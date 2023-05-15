// function saludar(a){

//     if(a=='santi'){
//         return 'Mi nombre es Santiago';
//     }

// }

// console.log(saludar('santi'));

//----------------Argumentos indefinidos---------------------

// function sumar(...Argumentos){
//     let sum = 0;
//     for(let n of Argumentos){
//         sum+=n;
//     }

//     console.log('Resultado = ',sum);
// }

// sumar(5,6,7,8);
// sumar(5,6,10,26);
// sumar(5,6,7,14);

//---------------FACTORIAL CON FUNCION RECURSIVA --------------------

// function factorial(n){
//     console.log(n)
//     if(n > 1){
//         n = n * factorial(n-1);
//         console.log(n)
//     }
//     return n;
// }

// console.log(factorial(3));

//-----------------FUNCION FLECHA------------

// function sumar(a,b){
//     return a+b;
// }

const sumar = (a,b)=>a+b;
console.log( sumar(4,5));

const saludar = () =>{
    console.log('Hola Mundo');
}

saludar();