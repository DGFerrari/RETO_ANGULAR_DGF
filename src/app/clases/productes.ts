// Primera clase
export class Productes {
    nom: string;
    preu: number;

    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }

    // Metodos
    toString(): string {
        return `${this.nom} - ${this.preu}`;
    }
   
    preuAmbIva(): number {
        return this.preu * 1.21;
    }
    
}

//1. AFEGIU UN MÈTODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu
    //2. MÈTODE descompte() que retorni el preu amb un 10% de rebaixa
    //3. creeu un nou producte i mostreu el descompte per consola
    //4. cerqueu la manera de mostrar el descompte amb un popup