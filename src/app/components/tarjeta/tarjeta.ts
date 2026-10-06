// Este archivo que contiene la logica: propiedades, metodos, getters...

import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta', // Para usarlo al HTML de otros componentes, como una etiqueta
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {

istok: Producte[] = [ {id: 1, nom: 'PC', preu: 20, disponibles: true},
                    {id: 2, nom: 'Portatil', preu: 30, disponibles: false},
                    {id: 3, nom: 'Tablet', preu: 40, disponibles: true}
  ];

}
