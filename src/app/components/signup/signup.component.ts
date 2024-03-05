import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helper/validateform';

import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  [x: string]: any;

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onSignup() {

    if (this.signupForm.valid) {
      //perform logic for signup
      var obj = this.signupForm.value;
      obj.role = "User";
      obj.token = "token";
      this.auth.signUp(this.signupForm.value)
        .subscribe({
          next: (res: any) => {
            if (res.statusCode == 200) {
              this.signupForm.reset();
              this.navigatetoLogin();
            } else {
              var errorMesseg = "/n";

              for (let value in res.result) {
                errorMesseg += `${value} - ${res.result[value].description}\n`;
              }
              console.log("register response" + res.result);
              alert(res.displayMessage + "" + errorMesseg);
            }
            // 
            // 

          },
          error: ((err: any) => {

            alert(err?.error.message)

          })
        })

      console.log(this.signupForm.value)
    } else {

      ValidateForm.validateAllFormFileds(this.signupForm);

      //logic for throwing error
    }
  }


  navigatetoLogin() {
    this.router.navigate(['login']);
  }

}
