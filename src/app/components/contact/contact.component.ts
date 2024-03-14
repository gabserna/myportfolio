import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Notiflix from 'notiflix';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  data!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpclient: HttpClient
  ) {}

  ngOnInit(): void {
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

  sendEmail(): void {
    Notiflix.Loading.standard('Sending...');
    const params = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };
    console.log(params);
    this.httpclient
      .post('http://localhost:3000/contact', params)
      .subscribe((res) => {
        console.log(res);
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Email Sent Successfully');
      });
  }
}
