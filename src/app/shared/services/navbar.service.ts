import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
}
