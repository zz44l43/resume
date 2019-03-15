import { Component,Input } from "@angular/core";

@Component({
    selector: "portrait-card",
    templateUrl: './portrait-card.component.html',
    styleUrls: ['./portrait-card.component.scss']
  })
  export class PortraitCardComponent{  
    private _name: string;
    @Input("name")
    set name(name:string){
      this._name = name ? name: "";
    }
    get name():string{
      return this._name;
    }

    private _title: string;
    @Input("title")
    set title(title:string){
      this._title = title;
    }
    get title():string{
      return this._title;
    }

    private _photo: string;
    @Input("photo")
    set photo(photo:string){
      this._photo = photo;
    }
    get photo():string{
      return this._photo;
    }

    constructor() {
        console.log("portrait-card");
      }
  }