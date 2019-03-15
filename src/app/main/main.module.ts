import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { MainSubContentComponent } from './main-sub-content.component';

@NgModule({
    declarations: [
        MainContentComponent,
        MainSubContentComponent
    ],
    imports:[
        CommonModule
    ],
    exports: [
        MainContentComponent,
        MainSubContentComponent
      ],
  })
  export class MainModule { }