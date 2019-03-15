import { NgModule } from '@angular/core';
import { MainNavComponent } from './main-nav.component';
import { SubNavComponent } from './sub-navs/sub-nav.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        MainNavComponent,
        SubNavComponent
    ],
    imports:[
        CommonModule
    ],
    exports: [
        MainNavComponent,
        SubNavComponent
      ],
  })
  export class MainNavsModule { }