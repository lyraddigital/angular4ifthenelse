import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-simple-if-then-non-inlined',
  templateUrl: './simple-if-then-non-inlined.component.html'
})
export class SimpleIfThenNonInlinedComponent implements OnInit {
  currentTemplate: TemplateRef<any> = null;
  show: boolean = true;
  
  @ViewChild('firstTemplate')
  firstTemplate: TemplateRef<any> = null;
  
  @ViewChild('secondTemplate')
  secondTemplate: TemplateRef<any> = null;
  
  switchPrimary() {
    this.currentTemplate = this.currentTemplate === this.firstTemplate ? this.secondTemplate : this.firstTemplate;
  }
  
  ngOnInit() { this.currentTemplate = this.firstTemplate; }
}