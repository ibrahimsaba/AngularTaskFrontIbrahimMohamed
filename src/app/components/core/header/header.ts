import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MenubarModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'Departments', icon: 'pi pi-users', routerLink: '/department' },
    { label: 'Students', icon: 'pi pi-users', routerLink: '/student' },
    { label: 'About', icon: 'pi pi-info', routerLink: '/about' },
  ];
}
