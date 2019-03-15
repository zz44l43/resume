import { Component,Input } from "@angular/core";


@Component({
    selector: "sub-nav",
    templateUrl: './sub-nav.component.html',
    styleUrls:["./sub-nav.component.scss"]
  })

  export class SubNavComponent{
    
    private _icon_name:string;
    private _title:string;
    private _type: string;
    private _items: any[];

    @Input("iconName")
    set iconName(name:string){
      this._icon_name = name ? name : "";
    }
    get iconName():string{
      return this._icon_name;
    }

    @Input("title")
    set title(title:string){
      this._title = title ? title : "";
    }
    get title():string{
      return this._title;
    }
    
    @Input("items")
    set items(items:any[]){
        this._items = items;
    }
    get items():any[]{
        return this._items;
    }

    @Input("type")
    set type(type: string){
        this._type = type;
    }
    get type():string{
        return this._type;
    }

    constructor() {
        console.log("sub-nav");
    }
  }