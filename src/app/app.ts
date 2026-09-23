import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* Mis Importes */
import { Producte } from './interfaces/producte';
import { Minecraft } from './interfaces/minecraft';

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
  
  // Part B: Dades mock i funcions
  // Un array de mínim 5 elements del teu tema que compleixi la interfície
  MCmaps: Minecraft[] = [
    {id: 1, NomMundo: 'Overworld', Seed: 12345, Version: '26.3', Multiplayer: true, DescMundo: 'Mundo principal'},
    {id: 2, NomMundo: 'Nether', Seed: 67890, Version: '26.3', Multiplayer: true},
    {id: 3, NomMundo: 'End', Seed: 54321, Version: '26.3', Multiplayer: true},
    {id: 4, NomMundo: 'Aether', Seed: 98765, Version: '1.4', Multiplayer: false, DescMundo: 'El cielo de la Traicion'},
    {id: 5, NomMundo: 'Twilight Forest', Seed: 24680, Version: '1.8', Multiplayer: false, DescMundo: 'Bosque encantado'}
  ]
 
  // Una funció getActius() (o similar) que retorni els elements amb boolean = true
  // "x" es una variable temporal
  // "=>" es una función flecha (arrow function), devuelve el resultado de la expresión a la derecha. (esta en Java tambien "->")

  getMultiplayerWorlds (worlds: Minecraft[]) {
    return worlds.filter(x => x.Multiplayer == true);
  }

  // Una funció findById(id: number) que retorni un element o undefined
  findWorldById (worldID: number): Minecraft | undefined {
    return this.MCmaps.find(x => x.id === worldID);
  }

  // Una funció formatarElement(element) que retorni un string amb informació de l'element
  formatElement(world: Minecraft) {
    return 'Nombre Mundo: ' + world.NomMundo + ' | Seed: ' + world.Seed + ' | Version: ' + world.Version +
    ' |  Multijugador: ' + world.Multiplayer + ' | Descripcion: ' + world.DescMundo; 
  }
}

