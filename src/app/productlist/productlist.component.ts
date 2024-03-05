import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyService } from '../services/my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  product: any = [];
  productlist: any = [];

  constructor(private api: ApiService, private my: MyService,private router:Router) { }


  ngOnInit(): void {
    this.getAllProductlist();
  }

  addItem() {
    this.my.shareData = null;
    this.my.action="add"
    this.navigatetoProductCreation();
  }

  editItem(obj: any) {
    this.my.shareData = obj;
    this.my.action= "edit";
     this.navigatetoProductCreation();
  }

  viewItem(obj: any) {
    
    this.my.shareData = obj;
    this.my.action="view"
    this.navigatetoProductCreation();
  }

  deleteProduct(obj: any): void {
    this.my.deleteProduct(obj.id).subscribe(
      (res: any) => {
        if (res.statusCode == 200) {
         // this.product = res.result;
          alert(res.displayMessage);
          console.log('Resource deleted successfully.');
          this.getAllProductlist()
        } else {
         // console.log('Resource deleted Failed.');
          alert(res.displayMessage);
        }
        // Perform any additional actions if needed.
      },
      (error: any) => {
        console.error('Error deleting resource:', error);
        // Handle error appropriately.
      }
    );
  }

  getAllProductlist() {
    this.api.getAllProduct()
      .subscribe((res: any) => {
        this.productlist = res.result;
      })
  }

  navigatetoProductCreation() {
    this.router.navigate(['productcreation']);
  }
}


