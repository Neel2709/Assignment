import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthenticationService } from 'src/app/services/authentication.service';

export function passwordMatchValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return{
        passwordsDontMatch : true
      }
    }

    return null ;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  hide=true;
  signupForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required]),
    confirmPassword:new FormControl('',[Validators.required]),
  },{validators:passwordMatchValidator() });

  constructor(private authService:AuthenticationService,private router : Router , private toast: HotToastService) { }

  ngOnInit(): void {
  }

  get name(){
    return this.signupForm.get('name');
  }

  get email(){
    return this.signupForm.get('email');
  }

  get password(){
    return this.signupForm.get('password');
  }

  get confirmPassword(){
    return this.signupForm.get('confirmPassword');
  }

  submit(){
    if(!this.signupForm.valid){
      return;
    }

    const { name,email,password,confirmPassword } = this.signupForm.value;
    this.authService.signup(name,email,password).pipe(
      this.toast.observe({
        success:"Registered Successfully!",
        loading:'Please wait!',
        error:({message}) => `${message}`
      })
    ).subscribe(()=>{
      this.router.navigate(['/home']);
    })

  }
}
