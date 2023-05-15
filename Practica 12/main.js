document.querySelector('html').lang ='es';
document.querySelector('title').innerHTML='DOM';
document.querySelector('body').innerHTML='<h1>Hola</h1>';

document.querySelector('.caja');    //clase
document.querySelector('#caja1');   //id

document.getElementsByClassName('caja'); //clase
document.getElementById('caja1');   //id

let caja = document.querySelector('#caja1');

let btn = document.createElement('button');

caja.append(btn);


