import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  // standalone: true,
  // imports: [MatIconModule],
})
export class SidenavComponent {
  
  openLink(url: string) {
    window.open(url, '_blank');
  }

}
