import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:44339/api/v1/User/"
  constructor(private http : HttpClient, private router: Router) { }

  signUp(register:any){
    return this.http.post<any>(this.baseUrl+'Register',register);
  }
  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

  login(login:any){
    return this.http.post<any>(this.baseUrl+'Login',login);
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
    let user=this.getToken()
    if (user != null && user.length >0 && user != "undefined"){
      return true;
    }else{
      return false;
    }
  

  }
  addCategory(category:any){
    return this.http.post<any>(this.baseUrl+'Category',category);
  }
}
