import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadExternalStyles('/aboutme.component.css');
  }

  loadExternalStyles(url: string) {
    const style = this.renderer.createElement('link');
    style.rel = 'stylesheet';
    style.href = url;
    this.renderer.appendChild(document.head, style);
  }
}
