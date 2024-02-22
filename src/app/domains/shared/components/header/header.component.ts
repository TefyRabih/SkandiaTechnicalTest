import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MenuComponent } from '../../../shared/components/menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  showQuestions: boolean = true
  isMenuOpen: boolean = false;

  constructor() { }

  showTextQuestions() {
    this.showQuestions = !this.showQuestions;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log("revisando", this.isMenuOpen)
  }
}
