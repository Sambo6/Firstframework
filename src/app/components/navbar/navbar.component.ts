import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
// access ref in DOM
@ViewChild('navRef')
nav !:ElementRef;

//
@HostListener('window:scroll')
animation():void {
  window.scrollY > 30
    ? this.nav.nativeElement.classList.remove('py-4')
    : this.nav.nativeElement.classList.add('py-4')
}
}
