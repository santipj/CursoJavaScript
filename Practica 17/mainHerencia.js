class Persona{
    
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;    
    }

    detallePersona(){
        console.log( `Nombre: ${this.nombre} Edad: ${this.edad}`);
    }



}

class Empleado extends Persona {
    sueldo;
    cargo;
    constructor(nombre,edad,sueldo,cargo ){
        super(nombre,edad)
        this.sueldo = sueldo;
        this.cargo = cargo;
    }

    detallePersona(){
        super.detallePersona()
        console.log(`Sueldo: ${this.sueldo} Cargo: ${this.cargo}`);
    }

}

const e1 = new Empleado('Santi', 24, 100, 'jefe');
//console.log(e1);
e1.detallePersona();