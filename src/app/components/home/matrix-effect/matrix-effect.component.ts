import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-matrix-effect',
  template: '<canvas #matrixCodeElement width="500" height="200"></canvas>',
})
export class MatrixEffectComponent implements AfterViewInit {
  @ViewChild('matrixCodeElement') matrixCodeElement!: ElementRef;

  private chars: string[] = [];

  ngAfterViewInit() {
    this.generateChars(); // Generate an array of Unicode characters
    this.createMatrixEffect(); // Initialize and start the Matrix code rain effect
  }

  private generateChars() {
    // Generate Unicode character arrays for different character sets
    const utf8Chars = this.genUnicode(0x0020, 0x007e);
    const katakana = this.genUnicode(0x30A1, 0x30F6);
    const hiragana = this.genUnicode(0x3041, 0x3096);
    const cirilic = this.genUnicode(0x0400, 0x04ff);
    const hindiDevanagari = this.genUnicode(0x0900, 0x097f);
    const chineseHan = this.genUnicode(0x4e00, 0x9fff);

    // Concatenate character sets into a single array
    this.chars = utf8Chars.concat(cirilic, hiragana);
  }

  private genUnicode(start: number, end: number): string[] {
    // Generate an array of Unicode characters in the specified range
    const result: string[] = [];
    for (let i = start; i <= end; i++) {
      result.push(String.fromCharCode(i));
    }
    return result;
  }

  private getRandomChar(): string {
    // Get a random character from the generated character set
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  private createMatrixEffect() {
    const canvas: HTMLCanvasElement = this.matrixCodeElement.nativeElement;
    const ctx = canvas.getContext('2d')!;

    const w = (canvas.width = document.body.offsetWidth);
    const h = (canvas.height = document.body.offsetHeight);
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0); // Initialize an array to store the vertical position of each column

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h); // Fill the canvas with a black background

    const matrix = () => {
      ctx.fillStyle = '#0001';
      ctx.fillRect(0, 0, w, h); // Clear the canvas with a slightly transparent black background

      ctx.fillStyle = '#0f0';
      ctx.font = '15pt monospace';

      ypos.forEach((y, ind) => {
        const text = this.getRandomChar();
        const x = ind * 20;
        ctx.fillText(text, x, y); // Draw a character at the specified position
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0; // Reset the position if it exceeds a certain threshold
        else ypos[ind] = y + 20; // Move the position down for the next frame
      });
    };

    setInterval(matrix.bind(this), 50); // Set up an interval to continuously update the Matrix effect
  }
}
