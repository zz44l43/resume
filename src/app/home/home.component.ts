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
    private _jsonURL:string = "assets/data.json";
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
        var data = document.getElementById("content");
        html2canvas(data).then(canvas => {  
          // Few necessary setting options  
          var imgWidth = 208;   
          var pageHeight = 295;    
          var imgHeight = canvas.height * imgWidth / canvas.width;  
          var heightLeft = imgHeight;  
      
          const contentDataURL = canvas.toDataURL('image/png')  
          let pdf = new jsPDf('p', 'mm', 'a4'); // A4 size page of PDF  
          var position = 0;  
          pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
          pdf.save('MYPdf.pdf'); // Generated PDF   
        });

        // let doc = new jsPDf();
        // let elementHandler = {
        //   "#editor":function(element, renderer){
        //     return true;
        //   }
        // };
        // let content = this.content.nativeElement;
        // doc.fromHTML(content.innerHTML,15,15,{
        //   "width": 190,
        //   "elementHandler" : elementHandler
        // });
        // doc.save("test.pdf");
      }
  }
