import { Component } from '@angular/core';

@Component({
  selector: 'app-fitxa-producte-component',
  imports: [],
  templateUrl: './fitxa-producte-component.html',
  styleUrl: './fitxa-producte-component.css',
})
export class FitxaProducteComponent {

  // 1. Afegeix afegitAlCarret = false a FitxaProducteComponent.
  afegitAlCarret: boolean = false;
  teEstoc = true;

  //2. Crea el mètode afegir(): void que posa afegitAlCarret = true.
  afegir(): void {
    this.afegitAlCarret = true;
    
  }
 
}
