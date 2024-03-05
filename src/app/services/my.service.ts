import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  
   
  shareData : any;
  action:string="";
  
  private baseUrl: string = 'https://localhost:44339/api/v1/';

  constructor(private http: HttpClient) { }

  deleteProduct(Id: number) {

    return this.http.delete<any>(this.baseUrl + "Product/ProductDelete?id=" + Id)
      .pipe(map((res: any) => {
        return res;
      }))
  }

  ProductSave(req: any) {
    return this.http.post<any>(this.baseUrl + "Product/ProductSave", req)
      .pipe(map((res: any) => {
        return res;
      }))
  }

productUpdate(req: any) {

  return this.http.put<any>(this.baseUrl + "Product/productUpdate", req)
    .pipe(map((res: any) => {
      return res;
    }))
}

categorysave(req: any) {
  return this.http.post<any>(this.baseUrl + "Category/categorysave", req)
    .pipe(map((res: any) => {
      return res;
    }))
}
   
brandsave(req: any) {
  return this.http.post<any>(this.baseUrl + "Brand/brandsave", req)
    .pipe(map((res: any) => {
      return res;
    }))
}


  
}