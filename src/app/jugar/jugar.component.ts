import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrl: './jugar.component.css'
})

export class JugarComponent {
  palabraOculta: string = '';
  palabraOcultaArray: string[] = this.palabraOculta.split('');
  letrasDisponibles: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  letrasSeleccionadas: string[] = [];
  letraIngresada: string = '';
  vidas: number = 0;
  adivinado: boolean = false;

  constructor(private http: HttpClient) {
    this.setPalabraOculta();
  }
  verificarLetra(): void {
    console.log(this.letraIngresada);
    const palabra = this.http.post(`http://localhost:8000/adivinar/?letra=${this.letraIngresada}`, null);
    this.letraIngresada = ''; // limpiar la letra ingresada
    palabra.subscribe((data: any) => {
      console.log(data);
      if (data.resultado === true) { // si la palabra fue adivinada
        this.adivinado = true; // actualizar el estado de la palabra
      }

      this.palabraOculta = data.palabra; // actualizar la palabra oculta
      this.vidas = data.vidas; // actualizar las vidas


      this.palabraOcultaArray = data.palabra.split('').map((letra: string) => letra.toUpperCase()); // actualizar la palabra oculta
    });
  }

  reiniciarJuego(): void {
    this.setPalabraOculta(); // obtener una nueva palabra
    this.letrasSeleccionadas = []; // limpiar las letras seleccionadas
    this.letrasDisponibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // reiniciar las letras disponibles
    this.vidas = 0; // reiniciar las vidas
    this.adivinado = false; // reiniciar el estado de la palabra
    const hola = this.http.delete('http://localhost:8000/reiniciar'); // reiniciar el juego en el servidor
  }

  setPalabraOculta() {
    const palabra = this.http.get('http://localhost:8000/palabras'); // obtener palabra desde el servidor
    palabra.subscribe((data: any) => { // suscribirse a la respuesta del servidor
      this.palabraOculta = data.palabra; // actualizar la palabra oculta

      // haz que palabraOcultaArray tenga la longitud de palabraOculta, pero que solo muestre guiones bajos
      this.palabraOcultaArray = this.palabraOculta.split('').map(letra => '_');
    });
  }
  
  getPalabraOcultaArray(): string[] {
    return this.palabraOcultaArray; // retornar la palabra oculta
  }

}