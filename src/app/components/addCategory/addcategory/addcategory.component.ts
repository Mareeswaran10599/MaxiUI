import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyService } from 'src/app/services/my.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  categoryName: string = "";
  categoryImageUrl: string = "";
  constructor(private router: Router, private http: HttpClient, private my: MyService) { }

  ngOnInit(): void {
  }
  categorysave() {

    var req = {

      name: this.categoryName,
      imageUrl: this.categoryImageUrl

    };
    this.my.categorysave(req).subscribe((res: any) => {
      // Handle the response as needed
      if (res.statusCode == 200) {
        alert(res.displayMessage)

      }

    });
  }
}
