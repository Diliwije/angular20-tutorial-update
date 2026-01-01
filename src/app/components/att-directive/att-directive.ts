import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective {

  div1Style= signal<string>("");

  div2Style:boolean=false;


  bgchange(color: string) {
    this.div1Style.set(color);
  }

  setBgstyle(){
    this.div2Style=!this.div2Style;
  }

}
