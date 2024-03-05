import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helper/validateform';

import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin() {
    if (this.loginForm.valid) {

      console.log(this.loginForm.value)
      
      // Send the obj to database
      this.auth.login(this.loginForm.value)
        .subscribe({
          next: (res: any) => {
            if (res.statusCode == 200) {
              alert(res.displayMessage)
              this.loginForm.reset();
              res.result.token="Bearer "+res.result.token
              this.auth.storeToken(res.result.token);
              this.router.navigate(['dashboard']);
              
            } else {
              
              //alert(res.displayMessage + " " + res.result.token)
            }


          },
          error: (err: any) => {
            alert(err?.error.message)
          }
        })

    } else {

      console.log("Form is not valid");

      //throw the error using toaster and with required fields

      ValidateForm.validateAllFormFileds(this.loginForm);

    }
  }


}

