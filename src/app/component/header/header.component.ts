import { Component, OnInit, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = 'Temperature Converter';

  celsius: any;
  farenheit: any;

  constructor() {}

  ngOnInit(): void {
  }


 // _________ Celsius _________
  public calculateCel(): void {
      this.farenheit = (this.celsius * 9 / 5) + 32;
      console.log('farenheit', this.farenheit);
  }


  // if (this.farenheit = (this.celsius * 9 / 5) + 32) {
  //   console.log('farenheit', this.farenheit);
  // } else {
    
  // }
    
 

    // _________ Farenheit _________
  public calculateFar(): void {
    this.celsius =  (this.farenheit - 32) * (5 / 9);
    console.log('CEL', this.celsius);
  }



}


