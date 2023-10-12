import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  flag:boolean = true;
  modelImg:string = '';
  srcs: string[] = [
    'assets/images/port1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
    'assets/images/port1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',

  ]

  hideModel( element: EventTarget | null, img: HTMLImageElement):void {
    if(element == img ) return;

    this.flag = true;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
