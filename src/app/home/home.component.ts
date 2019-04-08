import { Component, Inject, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import * as jsPDf from "jspdf";
import * as html2canvas from 'html2canvas';  

@Component({
    selector: "home",
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent{  
    private _jsonURL:string = "assets/data-en.json";
    private _model: any;
    get model():any{
      return this._model;
    }
    set model(model:any){
      this._model = model;
    }
    @ViewChild('content')content: ElementRef;
    constructor(private http: HttpClient) {
      this.http.get(this._jsonURL).subscribe(data => {
        this.model = data;
      })
      console.log("Home component");
      }
      download(){
        
      }
  }
