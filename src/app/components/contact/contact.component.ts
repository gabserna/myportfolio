import { Component } from '@angular/core';
import {

  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NotiflixService } from '../../services/notiflix.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpclient: HttpClient,
    private notiflixService: NotiflixService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log(formData);
    }
  }

  sendEmail() {
    this.notiflixService.loading('Sending...');
    const params = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };
    console.log(params);
    this.httpclient
      .post('http://localhost:3000/sendEmail', params)
      .subscribe((res) => {
        console.log(res);
        this.notiflixService.hideLoading(); // Use the provided method
        this.notiflixService.notifySuccess('Email Sent Successfully');
      });
  }
}
