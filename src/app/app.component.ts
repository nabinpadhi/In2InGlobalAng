import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'In2In Global Private Limited...';
  currDiv = 'MyProfile';   
 ShowDiv(divVal: string) {    
    this.currDiv = divVal;
    
  }
}