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

  constructor(private http: HttpClient) {}
  verificarLetra(): void {
    // Lógica para verificar la letra ingresada y actualizar la representación visual
    // Puedes comparar letraIngresada con las letras de la palabra oculta y realizar las acciones necesarias.
  }

  get palabraOcultaArray(): string[] {
    return this.palabraOculta.split('');
  }

}

