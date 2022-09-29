import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-title';
  count = 0;
  number1=0;
  number2=0;
  sum = 0;


  listOfNumbers = [12, 43, 543, 53, 1]
  listOfNames = ['Rita', 'Shreya', 'Maya', 'Rudra', 'Rishi']
  
  increment = () => {
    this.count++;
  }
  decrement = () => {
    this.count--;
  }
  add = () => {
    this.sum = this.number1+ this.number2;
  }
}
