import { Component,Input } from "@angular/core";

@Component({
    selector: "main-sub-content",
    templateUrl: './main-sub-content.component.html',
    styleUrls:['./main-sub-content.component.scss']
  })
  export class MainSubContentComponent{  
    private _items:any[]
    @Input("items")
    set items(items:any[]){
        this._items = items ? items : [];
    }
    get items():any[]{
        return this._items;
    }

    private _type: string;
    @Input("type")
    set type(type: string){
        this._type = type ? type : "";
    }
    get type():string{
        return this._type;
    }

    private _title:string;
    @Input("title")
    set title(title:string){
      this._title = title ? title : "";
    }
    get title():string{
      return this._title;
    }

    private _icons:any[]
    @Input("icons")
    set icons(icons:any[]){
      this._icons = icons? icons : [];
    }
    get icons():any[]{
      return this._icons;
    }


    constructor() {
      console.log("main-sub-content");
      }

    getTitleAndRole(item:any){
      debugger;
      return item.label  + " | " + item.role;
    }
  }