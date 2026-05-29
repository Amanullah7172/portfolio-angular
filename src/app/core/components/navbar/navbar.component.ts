import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../../shared/services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen: boolean = false;
  navbarScrolled: boolean = false;

  constructor(private scrollService: ScrollService) {}

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
