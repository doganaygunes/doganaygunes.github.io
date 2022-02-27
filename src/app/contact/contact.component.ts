import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private contact: ServicesService) { }
  
  public FormData: FormGroup = new FormGroup({
    'Fullname': new FormControl('', [Validators.required]),
    'Email': new FormControl('', [Validators.required, Validators.email]),
    'Comment': new FormControl('', [Validators.required])
  });

  ngOnInit() {
  }

  onSubmit(FormData: any) {
    debugger;
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe((response: any) => {
        location.href = 'https://mailthis.to/confirm'
      }, (error: { responseText: any; }) => {
        console.warn(error.responseText)
      })
  }
}