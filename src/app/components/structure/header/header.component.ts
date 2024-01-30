import { Component } from '@angular/core';
import { TopnavComponent } from '../topnav/topnav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopnavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
