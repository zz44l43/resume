import { Component, Input } from "@angular/core";

@Component({
    selector: "side-anchor",
    templateUrl: './side-anchor.component.html'
  })
  export class SideAnchorComponent{  
    private _icon_name = "";
    private _href = "";
    private _label_display = "";

    @Input("iconName")
    set iconName(name:string){
      this._icon_name = name ? name : "";
    }
    get iconName():string{
      return this._icon_name;
    }

    @Input("href")
    set href(href:string){
      this._href = href ? href : "";
    }
    get href():string{
      return this._href;
    }

    @Input("label")
    set label(label:string){
      this._label_display = label ? label : "";
    }
    get label():string{
      return this._label_display;
    }

    constructor() {
        console.log("side-anchor");
      }
      

  }