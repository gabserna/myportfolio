import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('matrixCodeElement') matrixCodeElement!: ElementRef;

  ngAfterViewInit() {
    this.createMatrixEffect();
  }

  private getRandomChar() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters[Math.floor(Math.random() * characters.length)];
  }
  
  private createMatrixEffect() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const columns = window.innerWidth / 10;
    const rows = 30; // Número de filas
    const matrixCodeElement = this.matrixCodeElement.nativeElement;
  
    // Agrega un espacio al final de cada línea
    const space = ' ';
    const matrixWithSpace = Array.from({ length: columns }, () =>
      Array.from({ length: matrixCodeElement.clientHeight }, () =>
        characters[Math.floor(Math.random() * characters.length)] + space
      )
    );
  
    // Crea los elementos span con margen inferior
    matrixWithSpace.forEach(row => {
      row.forEach(char => {
        const charElement = document.createElement('span');
        charElement.innerText = char;
        charElement.style.marginBottom = '2px'; // Ajusta el valor según tu preferencia
        matrixCodeElement.appendChild(charElement);
      });
    });
  
    setInterval(() => {
      const charElements = matrixCodeElement.getElementsByTagName('span');
      charElements[0].innerText = this.getRandomChar() + space;
      matrixCodeElement.appendChild(charElements[0]);
    }, 50);
  
    // Renderiza la matriz en el elemento HTML
    matrixCodeElement.innerText = matrixWithSpace.map(row => row.join('')).join('');
  
    // Ajusta el margen inferior del contenedor
    matrixCodeElement.style.marginBottom = '10px'; // Ajusta el valor según tu preferencia
  
    // Mueve la matriz hacia arriba en intervalos regulares
    const speed = 300;
    const timer$ = interval(speed);
    const destroy$ = fromEvent(matrixCodeElement, 'destroy');
    timer$
      .pipe(takeUntil(destroy$))
      .subscribe(() => {
        matrixWithSpace.unshift(matrixWithSpace.pop()!);
        matrixCodeElement.innerText = matrixWithSpace.map(row => row.join('')).join('');
      });
  }
  
}
