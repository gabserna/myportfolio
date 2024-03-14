// notiflix.service.ts
import { Injectable } from '@angular/core';
import * as Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class NotiflixService {
  loading(message: string) {
    Notiflix.Loading.standard(message);
  }

  hideLoading() {
    Notiflix.Loading.remove(); // Call the actual Notiflix method
  }

  notifySuccess(message: string) {
    Notiflix.Notify.success(message);
  }
  // ... other Notiflix methods
}
