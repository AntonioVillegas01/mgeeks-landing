import { Component } from '@angular/core';


// @ts-ignore
declare function customInitFunctions();
@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent {


  ngOnInit(): void {
    customInitFunctions();
  }
}
