import { Component } from '@angular/core';

// @ts-ignore
declare function customInitFunctions();
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  ngOnInit(): void {
    customInitFunctions();
  }

}
