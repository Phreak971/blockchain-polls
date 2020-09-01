import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms'
import { PollForm } from '../types';
@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent {
  @Output() pollCreated: EventEmitter<PollForm> = new EventEmitter();
  pollForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.pollForm = this.fb.group(
      {
        question: this.fb.control('', Validators.required),
        image: this.fb.control(''),
        op1: this.fb.control(''),
        op2: this.fb.control(''),
        op3: this.fb.control(''),
      }
    )
  }
  submitForm()
  {
    const formData:PollForm = 
    {
      question:this.pollForm.get("question").value,
      thumbnail:this.pollForm.get("image").value,
      options:[
        this.pollForm.get("op1").value,
        this.pollForm.get("op2").value,
        this.pollForm.get("op3").value,
      ]
    }
    this.pollCreated.emit(formData)
  }

}
