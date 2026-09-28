export class Funciones {

    saludar(nom: string): string {
        return 'Hola, ' + nom + '!';
    }

    esMayorEdat (edad: number): boolean {
        if (edad >= 18) return true;
        else return false;
    }

    sumarArray (nums: number[]): number {
        return nums.length;
    }

}