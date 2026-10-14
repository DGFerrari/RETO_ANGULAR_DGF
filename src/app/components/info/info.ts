import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  titulo = 'Información de la sesion 6';
  versionAngular = 21;
  activo = true;
}
