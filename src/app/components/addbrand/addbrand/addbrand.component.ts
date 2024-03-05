import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from 'src/app/services/my.service';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {
  brandName:string="";
  brandImageUrl:string="";
  brandEstablishedYear:number=0;
  constructor(private router: Router, private http: HttpClient, private my: MyService) { }

  ngOnInit(): void {
  }

  brandsave() {

    var req = {

      name: this.brandName,
      establishedYear: this.brandEstablishedYear,
      imageUrl: this.brandImageUrl
      
    };


   
    this.my.brandsave(req).subscribe((res: any) => {
      // Handle the response as needed
      if (res.statusCode == 200) {
        alert(res.displayMessage)

      }

    });
  }

}
