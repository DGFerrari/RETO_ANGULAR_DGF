import { Component } from '@angular/core';
import { Productes } from '../../clases/productes';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

nom: String = 'Ordinador Gamer Pro';
preu : number = 1299;
estoc : number = 5;

productes : Productes = {

nom: 'Ordinador Gamer Pro',
preu: 1299,
disponibles: false,
descripcion: 'Informatica',
}




}

/*
INTERPOLACIÓ DE DADES {}
Permet connectar les dades del TS a l'HTML
Permet incrustar expressions TS dins de L'HTML, angular avalaua l'expressio i mostra el resultat com a text.

{{nomPropietat}} -- > mostra el valor d'una propietat de la classe
{{2 +3}} -- > mostra 5
{{text. toUpperCase()}} -> mostra el text en majúscules
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} -> operador ternari
*/