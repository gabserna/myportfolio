import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ContactForm } from './contact-form.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm!: FormGroup;
  messageSent: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData: ContactForm = this.contactForm.value;
      this.sendEmail(formData);
    }
  }

  sendEmail(formData: ContactForm): void {
    this.http.post('https://formspree.io/f/xkndzdpb', formData).subscribe(
      (response) => {
        console.log('Email sent successfully:', response);
        this.messageSent = true;
        this.contactForm.reset();
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  }
}