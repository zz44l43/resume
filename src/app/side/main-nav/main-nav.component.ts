import { Component,Input } from "@angular/core";

@Component({
    selector: "main-nav",
    templateUrl: './main-nav.component.html'
  })
  export class MainNavComponent{  
    private _sections: any[];
    @Input("sides")
    set sides(sections: any[]){
      this._sections = sections;
    }
    get sides():any[]{
      return this._sections;
    }
    constructor() {
      console.log("main-nav");
      }
  }