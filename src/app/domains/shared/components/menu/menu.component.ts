import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit  {
  selectedItem: string = '';
  @Input() isMenuOpen = false;


  items: Array<any> = [
    {
      icon: 'assets/img/home.svg',
      text: 'Inicio',
      selected: true
    },
    {
      icon: 'assets/img/hoja1.svg',
      text: 'Contratos',
      selected: false
    },
    {
      icon: 'assets/img/Tool.svg',
      text: 'Acciones',
      selected: false
    },
    {
      icon: 'assets/img/star.svg',
      text: 'Objetivos',
      selected: false
    },
    {
      icon: 'assets/img/money.svg',
      text: 'Herramientas',
      selected: false
    },
    {
      icon: 'assets/img/talk2.svg',
      text: 'Servicio al cliente',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: any) {
    this.items.forEach(element => {
      element.selected = false;
    });
    item.selected = true;
  }

  toggleSubMenu(submenuId: string, item: string): void {
    const submenu = document.getElementById(submenuId);
    if (submenu) {
      submenu.classList.toggle('show');
    }
    this.selectedItem = this.selectedItem === item ? '' : item;
  }
}