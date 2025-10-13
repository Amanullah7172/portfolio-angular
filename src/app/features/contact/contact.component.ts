import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSending = false;
  successMessage = '';
  errorMessage = '';

  sendEmail(e: Event) {
    e.preventDefault();
    this.isSending = true;
    this.successMessage = '';
    this.errorMessage = '';

    emailjs.send(
      'service_tp8ham9',
      'template_fcjsozq',
      {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message
      },
      'tCCcs2pxUswDiql1P'
    )
    .then(() => {
      this.isSending = false;
      this.successMessage = 'Message sent successfully! 🎉';
      this.formData = { name: '', email: '', message: '' };
    }, (error) => {
      this.isSending = false;
      this.errorMessage = 'Failed to send message. Please try again.';
      console.error('EmailJS Error:', error);
    });
  }
}