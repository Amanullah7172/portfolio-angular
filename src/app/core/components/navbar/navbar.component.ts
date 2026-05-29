


import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  constructor(private scrollService: ScrollService) {}
  isOpen: boolean = false;
  navbarScrolled: boolean = false;



  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.navbarScrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.isOpen = false; // Close mobile menu after clicking
  }

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}
