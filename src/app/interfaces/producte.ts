// Una interficie define la estructura de un objeto
// CUALQUIERA OBJETO del tipo Producto TIENE que tener estos campos

export interface Producte {
    id: number;
    nom: string;
    preu: number;
    disponibles: boolean;
    descripcion?: string; // "?" indica que el campo es opcional

}