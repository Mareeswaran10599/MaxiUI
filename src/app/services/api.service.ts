import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './authservice.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl: string = 'https://localhost:44339/api/v1/';

  constructor(private http: HttpClient, private auth: AuthService) { }

  getUsers() {

    // let header = new HttpHeaders({ 'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikxha3NodUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJDVVNUT01FUiIsImV4cCI6MTcwODA1MTYzNSwiaXNzIjoiTWF4aVNob3AiLCJhdWQiOiJNYXhpQ3VzdG9tZXIifQ.m2dgwo1js5_k5mNYHz6rSi34sBRlDdjEhr0nSRzbqWc" })
    // let options:any={header:header};
    // return this.http.get<any>(this.baseUrl + 'GetAllUser', options).pipe(map(async(result:any)=>{return result}));
    return this.http.get<any[]>(this.baseUrl + "User/GetAllUser");
    // return this.http.get<any>(this.baseUrl); // for testing purpose
  }
  getAllProduct() {
    return this.http.get<any>(this.baseUrl + "Product/GetAllProductList")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getAllCategory() {
    return this.http.get<any>(this.baseUrl + "Category/GetAllCategory")
      .pipe(map((res: any) => {
        return res;
      }))

  }     //https://localhost:44339/api/v1/Brand/GetAllBrands 
    
  getAllBrand() {
    return this.http.get<any>(this.baseUrl + "Brand/GetAllBrands")
      .pipe(map((res: any) => {
        return res;
      }))
  
  }    

  addCategory(obj: any) {
    return this.http.post<any>(this.baseUrl + "Category", obj)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}


