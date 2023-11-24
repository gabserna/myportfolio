import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: DataItem[] = [];

  getData(): DataItem[] {
    return this.data;
  }

  setData(newData: DataItem[]): void {
    this.data = newData;
  }
}
