import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any[] = [];

  constructor() {}

  getData(): any[] {
    return this.data;
  }

  setData(newData: any[]): void {
    this.data = newData;
  }
}