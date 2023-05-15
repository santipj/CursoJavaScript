class Persona{
    // nombre;
    // edad;

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;    
    }

    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

const p1 = new Persona('Santi', 25);
//p1.nombre = 'Santi';
// p1.edad = 24;
const p2 = new Persona('Edary',21);
// p2.nombre = 'Edary';
// p2.edad = 21;

p1.imprimir();
p2.imprimir();
