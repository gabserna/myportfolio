import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  template: `
  <pdf-viewer [src]="pdfSrc"
              [render-text]="true"
              [original-size]="false"
              style="width: 80%; height: 500px; display: block; margin: 0 auto;"
  ></pdf-viewer>
  `
})
export class ResumeComponent {
  pdfSrc = '../assets/test.pdf'
  // pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
}
