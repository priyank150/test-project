import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  optionsSelect: Array<any>;
  name: string;

  constructor(private fb: FormBuilder) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormMessage': ['', Validators.required],
      'contactFormCopy': [''],
      });
    }
  
    ngOnInit() {
  
    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
      ];
    }
  
    onSubmit(value) {
      if(this.contactForm.valid){
        console.log("submitted value", value);
        this.name = value.contactFormName;
        this.contactForm.reset();
      }
  
      
      
    
      
    }
  
  }
