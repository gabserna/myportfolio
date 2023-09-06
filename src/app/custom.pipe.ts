import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    // Implementa la lógica de transformación personalizada aquí
    return value.toUpperCase();
  }
}