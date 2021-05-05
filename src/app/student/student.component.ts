import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() myinputMsg:string='';
  @Output() myOutput:EventEmitter<string>= new EventEmitter(); 
  outputMessage:string="This is Child component." ;

  constructor() { }

  ngOnInit(): void {
    console.log(this.myinputMsg);  
  }
  sendValues(){  
    this.myOutput.emit(this.outputMessage);  
 } 
}
