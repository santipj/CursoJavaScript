const myModule=(()=>{"use strict";let e=document.getElementById("result"),t=document.querySelector("#btnPerCuad"),l=document.querySelector("#btnAreaCuad"),n=document.querySelector("#btnPerimTriangle"),r=document.querySelector("#btnAreaTriangle"),i=document.querySelector("#btnDiamCircle"),d=document.querySelector("#btnPerCircle"),a=document.querySelector("#btnAreaCircle"),u=e=>4*e,c=e=>e*e,m=(e,t,l)=>e+t+l,E=(e,t)=>e*t/2,o=e=>2*e,s=e=>2*Math.PI*e,y=e=>Math.PI*e**2;t.addEventListener("click",()=>{let t=Number(document.getElementById("inputSide").value),l=`El Perimetro del Cuadrado es: ${u(t)} cm`;e.innerText=l}),l.addEventListener("click",()=>{let t=Number(document.getElementById("inputSide").value),l=`El Area del Cuadrado es: ${c(t)} cm^2`;e.innerText=l}),n.addEventListener("click",()=>{let t=Number(document.getElementById("inputSideT1").value),l=Number(document.getElementById("inputSideT2").value),n=Number(document.getElementById("inputSideT3").value),r=`El perimetro del Triangulo es: ${m(t,l,n)} cm`;e.innerText=r}),r.addEventListener("click",()=>{let t=Number(document.getElementById("inputBase").value),l=Number(document.getElementById("inputAltura").value),n=`El Area del triangulo es: ${E(t,l)} cm^2`;e.innerText=n}),i.addEventListener("click",()=>{let t=Number(document.getElementById("inputRadio").value),l=`El Diametro del Circulo es: ${o(t)} cm`;e.innerText=l}),d.addEventListener("click",()=>{let t=Number(document.getElementById("inputRadio").value),l=`El Perimetro del Circulo es: ${s(t)} cm`;e.innerText=l}),a.addEventListener("click",()=>{let t=Number(document.getElementById("inputRadio").value),l=`El Area del Circulo es: ${y(t)} cm`;e.innerText=l})})();