import { Component } from '@angular/core';
import { LogoComponent } from "../../components/logo/logo.component";


@Component({
  selector: 'app-home',
  imports: [LogoComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  logoSrc = '/assets/logo.png';
  logoAlt = 'Logotipo da Consultoria';
}
