import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  names:any = [];
  countOfFamilyMembers:number = this.names.length;
 
   onAdd(event:any){
    console.log(event)
     this.names.push(event);
  }
}
