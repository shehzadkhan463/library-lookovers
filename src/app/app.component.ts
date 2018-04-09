import { Component, OnInit } from "@angular/core";
import { ITEMS } from "./items.mock";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
  // host: {
  //   '(document:click)': 'handleClick($event)'
  // }
})
export class AppComponent {
  name = "Angular 5";
  public searchTermSelect: string;
  public items: any[];
  constructor() {
    this.items = ITEMS;
    this.searchTermSelect = "";
  }
  onKeyPress(event) {
    const searchTermSelect = event.target.value;
  }
  downloadFile(data: Response){
    var blob = new Blob([data], { type: 'text/csv' });
    var url= window.URL.createObjectURL(blob);
    window.open(url);
  }
}
