import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  template:`
  <div>
    <h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'APM';
}