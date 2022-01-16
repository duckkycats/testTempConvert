import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string = 'Temperature Converter';

  @Input() cel = 0;

  constructor() { }

  ngOnInit(): void {
  }

 
  toggleCelTask(){
    console.log('Celsius');
    this.cel = 5
    console.log(this.cel);
  }
  
  toggleFarTask(){
    console.log('Farenheit');
  }

}
