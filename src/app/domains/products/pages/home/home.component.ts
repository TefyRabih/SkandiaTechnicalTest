import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CardComponent } from '../../../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
