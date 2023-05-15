const myModule = (() => {


    'use strict'


    //------------- Constante para mostrar en pantalla
    const valueResult = document.getElementById('result');


    const   btnPerCuad = document.querySelector('#btnPerCuad'),
            btnAreaCuad = document.querySelector('#btnAreaCuad'),
            btnPerimTriengle = document.querySelector('#btnPerimTriangle'),
            btnAreaTriengle = document.querySelector('#btnAreaTriangle'),
            btnDiamCircle = document.querySelector('#btnDiamCircle'),
            btnPerCircle = document.querySelector('#btnPerCircle'),
            btnAreaCircle = document.querySelector('#btnAreaCircle');



    //-------------AREA Y PERIMETRO CUADRADO----------

    const periCuadrado = (side) => side * 4;
    const areaCuadrado = (side) => side * side;


    //-------------AREA Y PERIMETRO TRIANGULO----------

    const periTriangulo = (a, b, c) => a + b + c;
    const areaTriangulo = (base, altura) => (base * altura) / 2;


    //-------------AREA Y PERIMETRO Circulo----------

    const diametroCircle = (radio) => radio * 2;
    const perimetroCircle = (radio) => 2 * Math.PI * radio;
    const areaCircle = (radio) => Math.PI * (radio ** 2);


    //--------------FUNCION PARA EL EVENTO DEL TOQUE DEL BOTON

    // function calculatePerimSquare(){
    //     let inputSide = document.getElementById('inputSide');
    //     let value = Number(inputSide.value);

    //     const result = `El Perimetro del Cuadrado es: ${periCuadrado(value)} cm`
    //     valueResult.innerText = result;

    // }

    btnPerCuad.addEventListener('click', () => {
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El Perimetro del Cuadrado es: ${periCuadrado(value)} cm`
        valueResult.innerText = result;
    });


    btnAreaCuad.addEventListener('click', () => {
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);
        const result = `El Area del Cuadrado es: ${areaCuadrado(value)} cm^2`
        valueResult.innerText = result;

    });

    // function calculateAreaSquare() {
    //     let inputSide = document.getElementById('inputSide');
    //     let value = Number(inputSide.value);

    //     const result = `El Area del Cuadrado es: ${areaCuadrado(value)} cm^2`
    //     valueResult.innerText = result;

    // }

    btnPerimTriengle.addEventListener('click', () => {
        let inputSideT1 = Number(document.getElementById('inputSideT1').value);
        let inputSideT2 = Number(document.getElementById('inputSideT2').value);
        let inputSideT3 = Number(document.getElementById('inputSideT3').value);

        const result = `El perimetro del Triangulo es: ${periTriangulo(inputSideT1, inputSideT2, inputSideT3)} cm`;
        valueResult.innerText = result;

    });

    // function calculatePerimTrian() {
    //     let inputSideT1 = Number(document.getElementById('inputSideT1').value);
    //     let inputSideT2 = Number(document.getElementById('inputSideT2').value);
    //     let inputSideT3 = Number(document.getElementById('inputSideT3').value);

    //     const result = `El perimetro del Triangulo es: ${periTriangulo(inputSideT1, inputSideT2, inputSideT3)} cm`;
    //     valueResult.innerText = result;

    // }

    btnAreaTriengle.addEventListener('click', () => {
        let base = Number(document.getElementById('inputBase').value);
        let altura = Number(document.getElementById('inputAltura').value);
        const result = `El Area del triangulo es: ${areaTriangulo(base, altura)} cm^2`;
        valueResult.innerText = result;

    });

    // function calculateAreaTrian() {
    //     let base = Number(document.getElementById('inputBase').value);
    //     let altura = Number(document.getElementById('inputAltura').value);
    //     const result = `El Area del triangulo es: ${areaTriangulo(base, altura)} cm^2`;
    //     valueResult.innerText = result;
    // }

    btnDiamCircle.addEventListener('click', () => {
        let radio = Number(document.getElementById('inputRadio').value);
        const result = `El Diametro del Circulo es: ${diametroCircle(radio)} cm`;
        valueResult.innerText = result;

    });

    // function calculateDiamCircle() {
    //     let radio = Number(document.getElementById('inputRadio').value);
    //     const result = `El Diametro del Circulo es: ${diametroCircle(radio)} cm`;
    //     valueResult.innerText = result;
    // // }

    btnPerCircle.addEventListener('click', () => {
        let radio = Number(document.getElementById('inputRadio').value);
        const result = `El Perimetro del Circulo es: ${perimetroCircle(radio)} cm`;
        valueResult.innerText = result;

    });

    // // function calculatePerimCircle() {
    // //     let radio = Number(document.getElementById('inputRadio').value);
    // //     const result = `El Perimetro del Circulo es: ${perimetroCircle(radio)} cm`;
    // //     valueResult.innerText = result;
    // // }


    btnAreaCircle.addEventListener('click', () => {
        let radio = Number(document.getElementById('inputRadio').value);
        const result = `El Area del Circulo es: ${areaCircle(radio)} cm`;
        valueResult.innerText = result;

    });

    // function calculateAreaCircle() {
    //     let radio = Number(document.getElementById('inputRadio').value);
    //     const result = `El Area del Circulo es: ${areaCircle(radio)} cm`;
    //     valueResult.innerText = result;
    // }



})();

