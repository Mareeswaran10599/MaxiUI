import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: any = [];
  categories: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllProductlist();
    this.getAllCategory();

  }

  getAllProductlist() {
    this.api.getAllProduct()
      .subscribe((res: any) => {
        this.products = res.result;
      })
  }

  getAllCategory() {
    this.api.getAllCategory()
      .subscribe((res: any) => {
        this.categories = res.result;
      })
  }

}
