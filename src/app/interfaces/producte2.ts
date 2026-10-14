// Esto es para aprender ifs, creo...

export interface Producte2 {
    id: number;
    nom: string;
    preu: number;
    estoc: number;
    categoria: string;
    descripcion: string;
}

/*
INTERPOLACIÓ DE DADES {(}
Permet connectar les dades del TS a l'HTML
Permet incrustar expressions TS dins de 1'HTML, angular avalaua l'expressio i mostra el resultat com a text.

{{momPropietat}} -> mostra el valor d'una propietat de la classe
{{2 + 3}} -- > mostra 5
{{text. toUpperCase()}} -> mostra el text en majuscules
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} -> operador ternari

amb {{nom}} -- > el valor por canviar i l'HTML s'actualitzarà automaticament. Hardcoded és x sempre es estatic.
*/

// Es esto de abajo

/*
AGEFIR ETIQUETA OFERTA I GRATUÏT
si el preu es inferior a 20 -> oferta
si el preu es 0 -- > gratuit
si el preu es superior a 100 -> premium

/*
if dins d'un for per marcar productes especials

si la categoria es informatica -> div amb "destacat"

*/