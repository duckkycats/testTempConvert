import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = 'Temperature Converter';
  celsius: number = 0;
  farenheit: number = 0;

  add: number = 1;

  

  constructor() {}

  ngOnInit(): void {
  }

 
  // _________ Celsius _________
  btnCelTask(){
    this.celsius++;
    // console.log(this.celsius);
    
  }

    // _________ Farenheit _________
  btnFarTask(){

    console.log(this.farenheit + this.add);
  }

}
