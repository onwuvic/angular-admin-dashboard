import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    SideNavComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideNavComponent,
    NavComponent
  ]
})
export class SharedModule { }
