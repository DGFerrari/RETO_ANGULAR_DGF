import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* Mis Importes */
import { Producte } from './interfaces/producte';
import { Minecraft } from './clases/minecraft';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');

  /////////////////////////////////////////////////////////////////
  ///                                                           ///
  ///           APRENDIENDO TYPESCRIPT CON LA FLOR              ///
  ///                                                           ///
  /////////////////////////////////////////////////////////////////

  // [1] Variables y Tipos de Datos
  nom: string = 'Angular';
  nom2: string = 'Laravel';
  versio: number = 20;
  activo: boolean = true;

  // [2] Arrays Tipados
  colores: string[] = ['rojo', 'verde', 'azul'];
  frameworks: string[] = [this.nom, this.nom2];
  punts: number[] = [10, 15, 20];

  // [3] TypeScript inflije en el tipo automaticamente
  ciudad = 'Lleida';  // STRING
  codiP = 25605;      // NUMBER

  // [4] Creando un tipo Objetos (Producte)
  producto: Producte = {
  id: 1,
  nom: 'PC',
  preu: 20,
  disponibles: true
  }

  // Array de Objetos de tipo Producto
  stok: Producte[] = [ {id: 1, nom: 'PC', preu: 20, disponibles: true},
                    {id: 2, nom: 'Portatil', preu: 30, disponibles: false},
                    {id: 3, nom: 'Tablet', preu: 40, disponibles: true}
  ];

  /* TAREA DE LA FLOR

    1. AFEGIU UN MÈTODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu
    2. MÈTODE descompte() que retorni el preu amb un 10% de rebaixa
    3. creeu un nou producte i mostreu el descompte per consola
    4. cerqueu la manera de mostrar el descompte amb un popup

  */

  //------------------------------------------------------------------------------------------//
  
  ServerMC: Minecraft[] = [
      new Minecraft('Overworld', 13598998747025, '26.3', true, 'Servidor Santomiau'),
      new Minecraft('Nether', 13598998747025, '26.3', true),
      new Minecraft('End', 13598998747025, '26.3', true),
      new Minecraft('Aether', 10000000001, '1.8', false, 'La traicion'),
      new Minecraft('Twilight Forest', 26569, '1.5', false, 'Locura de Mod')
    ]

}
