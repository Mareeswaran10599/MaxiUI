import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public users: any = [];
  constructor(private auth: AuthService, private api: ApiService) { }

  ngOnInit(): void {
    // this.getAllUser();
  }


  getAllUser(){
    this.api.getUsers()
    .subscribe((res:any) => {
      this.users = res.result;
    })
  }
  

  logout() {
    this.auth.signOut();
  }

}
