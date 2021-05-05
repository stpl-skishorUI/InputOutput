import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputOutput';
  MyInputMessage:string="This is Parent component";
  GetChildData(data:any){  
    console.log(data);  
 } 
}
