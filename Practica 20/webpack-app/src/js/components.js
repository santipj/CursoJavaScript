// import '../css/estilos.css'
import wplogo from '../img/imagen.png'


export const saluda = (nombre) =>{
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = wplogo;
    document.body.append(img);
}