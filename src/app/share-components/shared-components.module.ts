import { NgModule } from '@angular/core';
import { SideAnchorComponent } from './labels/side-anchor.component';
@NgModule({
    declarations: [
        SideAnchorComponent
    ],
    exports: [
        SideAnchorComponent
      ],
  })
  export class SharedComponentsModule { }