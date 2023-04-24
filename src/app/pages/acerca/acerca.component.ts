import { Component } from '@angular/core';

// @ts-ignore
declare function customInitFunctions();
@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent {

  ngOnInit(): void {
    customInitFunctions();
  }

}
