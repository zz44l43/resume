import { Component,Input } from "@angular/core";

@Component({
    selector: "main-content",
    templateUrl: './main-content.component.html'
  })
  export class MainContentComponent{  
    private _sections: any[];
    @Input("mains")
    set mains(sections: any[]){
      this._sections = sections ? sections : [];
    }
    get mains():any[]{
      return this._sections;
    }
    constructor() {
      console.log("main-content");
      }
  }