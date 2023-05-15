const persona ={
    nombre : 'Santi',
    apellido : 'Diaz',
    edad : 25,

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    },

    trajes :['traje 1','traje 2','traje 3'],

    direccion: {
        zip: '123',
        pais: 'colombia',
        depar: 'Norte'
    }

}

console.log(persona.nombreCompleto());
console.log(persona.trajes[1]);
console.log(persona.direccion.pais);