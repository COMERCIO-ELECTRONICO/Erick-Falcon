import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeberRoutingModule } from './deber-routing.module';
import { Pr1Component } from './pr1/pr1.component';
import { Pr2Component } from './pr2/pr2.component';


@NgModule({
  declarations: [Pr1Component, Pr2Component],
  imports: [
    CommonModule,
    DeberRoutingModule
  ]
})
export class DeberModule { }
