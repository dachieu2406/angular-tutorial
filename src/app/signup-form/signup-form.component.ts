import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form1 = new FormGroup({
    username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ],
     UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required),
    topics: new FormArray([])
  });

  form

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      username: ['', [
          Validators.required, 
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ]],
      password: ['', Validators.required],
      topics: fb.array([])
    })
   }

  ngOnInit() {
  }

  get username(){
    return this.form.get('username');
  }

  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }

  addTopic(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
    topic.value = ''
  }

  get topics(){
    return (this.form.get('topics') as FormArray)
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index)
  }
}
