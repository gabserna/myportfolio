import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  currentDay: string = '';
  currentDate: Date = new Date();
  currentTime: Date = new Date();

  ngOnInit(): void {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  private updateTime() {
    const now = new Date();
    this.currentDay = this.getDayOfWeek(now.getDay());
    this.currentDate = now;
    this.currentTime = now;
  }

  private getDayOfWeek(dayIndex: number): string {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[dayIndex];
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
