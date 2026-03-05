import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  role: string | null = '';
  menuItems: any[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.role = this.auth.getRole();
    this.buildMenu();
  }

  buildMenu() {
    const allItems = [
      { label: 'Dashboard', link: '/dashboard', icon: '📊' },
      { label: 'Pedidos', link: '/pedidos', icon: '📦' },
      { label: 'Pagos', link: '/pagos', icon: '💳' },
      { label: 'API Pública', link: '/api-data', icon: '🌐' },
      { label: 'Usuarios', link: '/usuarios', icon: '👥' }
    ];
    this.menuItems = this.role === 'admin' ? allItems : allItems.slice(0, 3);
  }

  logout() {
    this.auth.logout();
  }
}