import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public menus: any[] = [
    {
      label: 'Programs',
      url: '/programs',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Prices',
      url: '/prices',
    },
  ];
}
