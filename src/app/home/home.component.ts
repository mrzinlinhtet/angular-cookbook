import { Component } from '@angular/core';

@Component({
  selector: 'bm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myStr : string = 'Hello';
  myNum : number = 22;

}
