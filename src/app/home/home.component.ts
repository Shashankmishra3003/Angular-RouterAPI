import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickcounter:number = 0;
  name:string = 'Hello';

  constructor() { }

  ngOnInit(): void {
  }

  countClick(){
    this.clickcounter +=1;
  }

  decrementClick(){
    if(this.clickcounter > 0)
    {
      this.clickcounter -=1;
    }
  }

  // active and nonactive are scss classes
  setClasses(){
     let myClasses = {
       active: this.clickcounter > 4,
       notactive: this.clickcounter <= 4,
     }
     return myClasses;
  }
}
