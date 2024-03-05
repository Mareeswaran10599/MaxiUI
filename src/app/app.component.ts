import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'MaxishopUI';
}
