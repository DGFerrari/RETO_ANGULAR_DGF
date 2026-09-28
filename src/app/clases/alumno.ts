export class Alumnos {

    nom: string;
    edat: number;
    ciclo: string;
    notas: number[];
    

    constructor( nom: string, edat: number, ciclo: string, notas: number[]) {
        this.nom = nom;
        this.edat = edat;
        this.ciclo = ciclo;
        this.notas = notas;
    }

    presentar(): string {
        return 'Soy ' + this.nom + ', tengo ' + this.edat + 'años y estudio ' + this.ciclo;
    }

    getMediaNotas(): number {
        var Vmedia: number = 0;
        var Nnotas: number = 0;

        this.notas.forEach((notas: number, index: number) => {
            Vmedia += notas;
            Nnotas = index;
        });

        return Vmedia / Nnotas;
    }

    getHaAprovado(): boolean {
        if (this.getMediaNotas() >= 5) return true;
        else return false;
    }
}