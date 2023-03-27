import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day36 Routing-practice';

  constructor(private router: Router) { }

  getHome() {
    this.router.navigate(['/home']);
  }

  getDog() {
    this.router.navigate(['/dog']);
  }

  getCat() {
    this.router.navigate(['/cat']);
  }
}
