class Mate{
    static #pi = 3.1415;

    static get getPi(){
        return this.#pi;
    }

    static suma(a,b){
        return a+b;
    }
}


Mate.pi = 1;
console.log(Mate.getPi);
console.log(Mate.suma(10,20));