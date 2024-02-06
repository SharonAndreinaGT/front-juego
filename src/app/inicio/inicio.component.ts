import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  title = 'Bienvenidos al juego';
  myimage:string = "assets/img/imagen1.png";
  myvideo:string = "assets/videos"
}
