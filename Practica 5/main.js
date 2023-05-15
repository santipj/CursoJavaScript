let a,b,cociente,residuo;


a = Number(prompt('Ingrese Numero'));
b = Number(prompt('Ingrese otro Numero'));

cociente = a/b;
residuo = a%b;

document.write('El Cociente es: ' + cociente + '<br>');
document.write('El Residuo es: ' + residuo);