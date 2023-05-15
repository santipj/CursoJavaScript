class Persona{
    #nombre;
    #edad;
    
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;    
        this.#methodprivado();
    }

    set setNombre(nombre){
        this.#nombre = nombre;
    }

    get getNombre(){
        return this.#nombre
    }

    set setEdad(edad){
        this.#nombre = nombre;
    }

    get getEdad(){
        return this.#edad
    }


    #methodprivado(){
        console.log('Soy un metodo privado');
    }

}

const p1 = new Persona('Santi', 25);
//console.log(p1);
p1.setNombre = 'Edary'
console.log(p1);
