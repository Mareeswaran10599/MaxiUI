import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyService } from '../services/my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcreation',
  templateUrl: './productcreation.component.html',
  styleUrls: ['./productcreation.component.css'],


})
export class ProductcreationComponent implements OnInit {

  selectedValue: number = 0;
  selectedBrand: number = 0;
  selectedYear: string = '';
  categories: any[] = [];
  brands: any[] = [];
  productData: any;
  savedProduct: any;

  productName: string = '';
  productPrice: number = 0; // Adjust the type as needed
  productImageUrl: string = '';

  editShareData: any;

  productID: number = 0;
  isDisabled: boolean = false;

  publish = [
    { value: '1990' },
    { value: '1991' },
    { value: '1992' },
    { value: '1993' },
    { value: '1994' },
    { value: '1995' },
    { value: '1996' },
    { value: '1997' },
    { value: '1998' },
    { value: '1999' },
    { value: '2000' },
    { value: '2002' },
    { value: '2004' },
    { value: '2008' },
    { value: '2010' },
    { value: '2012' },
    { value: '2016' },
    { value: '2018' },
    { value: '2020' },
    { value: '2022' }

  ];
  constructor(private api: ApiService, private my: MyService, private router: Router) { }
  

  ngOnInit(): void {
    // if (this.my.shareData != null) {
    this.editShareData = this.my.shareData;
    if (this.editShareData != null) {
      this.productID = this.editShareData.id;

      this.productName = this.editShareData.name;

      this.productPrice = this.editShareData.price;

      this.selectedYear = this.editShareData.specification;

      this.productImageUrl = this.editShareData.imageUrl;

      this.selectedValue = this.editShareData.categoryId;
      this.selectedBrand = this.editShareData.brandId;
      if (this.my.action == "view") {
        this.isDisabled = true;
      }
    }



    this.getAllCategory();
    this.getAllBrand();


  }


  getAllCategory() {
    this.api.getAllCategory()
      .subscribe((res: any) => {
        this.categories = res.result;
        var newcategory = { "name": "New Category", "id": 0 };
        this.categories.push(newcategory);
       // this.router.navigate(['productcreation'])
      })
  }

  getAllBrand() {
    this.api.getAllBrand()
      .subscribe((res: any) => {
        this.brands = res.result;
        var newbrand = { "name": "New Brand", "id": 0 };
        this.brands.push(newbrand);
      })
      
  }

  productSave() {

    var req = {
      id: this.productID,
      categoryId: this.selectedValue,
      brandId: this.selectedBrand,
      name: this.productName,
      specification: this.selectedYear,
      price: this.productPrice,
      imageUrl: this.productImageUrl
    };

    if (this.productID != 0) {
      // update
      this.my.productUpdate(req).subscribe((res: any) => {
        // Handle the response as needed
        if (res.statusCode == 200) {
          alert(res.displayMessage)
          this.router.navigate(['productdetaillist'])
        } else {
          alert(res.displayMessage)
        }
      });
    } else {

      // Call the service function with the productData
      this.my.ProductSave(req).subscribe((res: any) => {
        // Handle the response as needed
        if (res.statusCode == 200) {
          alert(res.displayMessage)
          this.router.navigate(['productdetaillist'])
        } else {
          alert(res.displayMessage)
        }
      });
    }
  }

  onSelectOptionCategoryClick(option: any): void {
    if (option.id == 0) {
      console.log(`Option clicked: ${option.name}`);
      this.router.navigate(['AddCategory']);
    }

  }

  onSelectOptionBrandClick(v: any): void {
    if (v.id == 0) {
      console.log(`Option clicked: ${v.name}`);
      this.router.navigate(['AddBrand']);
    }

  }
  categorysave() {
    var req = {

      name: this.productName,
      imageUrl: this.productImageUrl
    };

    if (this.productID != 0) {

      this.my.categorysave(req).subscribe((res: any) => {
        // Handle the response as needed
        if (res.statusCode == 200) {
          alert(res.displayMessage)
          this.router.navigate(['productcreation'])
        } else {
          alert(res.displayMessage)
        }
      });
    }
  }


}
