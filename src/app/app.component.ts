import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, FooterComponent, RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
