import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-container',
  standalone: false,
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent implements OnInit {

  @Input()
  label!:string;
  @Input()
  bgColor ='white';

  ngOnInit(): void {}

}
