import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myportfolio';

  @ViewChild('container', { read: ElementRef }) container!: ElementRef; // Use ViewChild for the container
  components: { [key: string]: ElementRef } = {};

  ngAfterViewInit() {
    this.components = {
      // Use querySelector to find elements
      aboutme: this.container.nativeElement.querySelector('#aboutme'),
      projects: this.container.nativeElement.querySelector('projects'),
      resume: this.container.nativeElement.querySelector('#resume'),
      contact: this.container.nativeElement.querySelector('#contact'),
    };
  }

  scrollToComponent(component: string): void {
    const element = this.components[component]?.nativeElement;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  


}