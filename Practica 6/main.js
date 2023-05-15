//variables
let vv=0,igv=0,pv=0;

//Entrada de Datos

vv = parseFloat(prompt('Ingrese Valor de Venta'));

igv = vv*0.19;
pv = vv+igv;

/*
document.write('valor de Venta ',vv , '<br>')
document.write('IGV ',igv , '<br>')
document.write('Precio de Venta ',pv , '<br>')
*/

document.write(`<pre> 
                Valor de venta:       ${vv} 
                IGV:                  ${igv} 
                Precio de Venta:      ${pv}
                </pre>`)
