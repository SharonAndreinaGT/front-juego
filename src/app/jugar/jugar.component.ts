import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrl: './jugar.component.css'
})

export class JugarComponent {
  palabraOculta: string = 'ANGULAR';
  letrasDisponibles: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  letrasSeleccionadas: string[] = [];
  letraIngresada: string = '';

  constructor(private http: HttpClient) {
    this.setPalabraOculta();
  }
  verificarLetra(): void {
    // Lógica para verificar la letra ingresada y actualizar la representación visual
    // Puedes comparar letraIngresada con las letras de la palabra oculta y realizar las acciones necesarias.
  }

  setPalabraOculta() {
    const palabra = this.http.get('http://localhost:8000/palabras'); // obtener palabra desde el servidor
    palabra.subscribe((data: any) => { // suscribirse a la respuesta del servidor
      this.palabraOculta = data.palabra; // actualizar la palabra oculta
      console.log(data)
    }); // fin de la suscripción
  }
  
  get palabraOcultaArray(): string[] {
    return this.palabraOculta.split('');
  }

}