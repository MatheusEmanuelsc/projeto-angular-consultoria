import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  imports: [],
  standalone: true,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {
  src = input.required<string>();
  alt = input.required<string>();
}
