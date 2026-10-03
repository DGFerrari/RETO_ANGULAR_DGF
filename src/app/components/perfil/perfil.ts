import { Component } from '@angular/core';
import { Productes } from '../../clases/productes';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

/*
INTERPOLACIÓ DE DADES {}
Permet connectar les dades del TS a l'HTML
Permet incrustar expressions TS dins de L'HTML, angular avalaua l'expressio i mostra el resultat com a text.

{{nomPropietat}} -- > mostra el valor d'una propietat de la classe
{{2 +3}} -- > mostra 5
{{text. toUpperCase()}} -> mostra el text en majúscules
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} -> operador ternari
*/

// PART B
// Variables del perfil
nombre : string = 'Daniel';
apellidos : string = 'Guedes Ferrari';
edad : number = 19;
ciclo : string = 'DAW2';

// si es mayor de edad o no
// medad : string = this.edad >= 18 ? 'Es Mayor de edad' : 'Es Menor de edad'

// Año de nacimiento calculado
// anoedad : number = 2026 - this.edad;

// PART C

getNombreCompleto(): string {
  return this.nombre + ' ' + this.apellidos;
}

getIniciales(): string {

  // Split Sirve para tener un array con cada palabra del string
  const palabras = this.apellidos.trim().split(" ");

  // .map sirve para ejecutar algo en cada slot del array
  // usando "arrow function" para referirse al slot del array
  // join sirve para unir todo el array en un unico string (el parametro es como separa cada cosa)
  const iniciales = palabras.map(palabra => palabra.charAt(0)).join("");
  return this.nombre.charAt(0) + iniciales;
}

getGeneracio(): string {
  if (this.edad >= 25 && this.edad <=40) return 'Milennial';
  else if(this.edad >= 10 && this.edad <=24) return 'Gen Z';
  else return 'Ninguno';
}

}
