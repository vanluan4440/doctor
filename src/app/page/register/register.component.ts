import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;
  registerForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required)
  });
  constructor(

  ) { }

  ngOnInit(): void {

  }
  get f(){
    return this.registerForm.controls
  }
  onSubmit(){
    console.log(this.registerForm.value);

    this.submitted = true
    if(this.registerForm.invalid){
      return
    }
    else{
      console.log(this.registerForm.value);

    }


  }

}
