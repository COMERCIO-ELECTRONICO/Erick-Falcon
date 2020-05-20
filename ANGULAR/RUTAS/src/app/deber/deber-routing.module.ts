import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pr1Component } from './pr1/pr1.component';
import { Pr2Component } from './pr2/pr2.component';


const routes: Routes = [
    {
        path: 'pr1',
        component: Pr1Component
    },
    {
        path: 'pr2',
        component: Pr2Component
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeberRoutingModule { }
