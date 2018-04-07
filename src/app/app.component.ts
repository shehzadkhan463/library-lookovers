import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // host: {
  //   '(document:click)': 'handleClick($event)'
  // }
})
export class AppComponent {
  name = 'Angular 5';
  public items;
  public filteredList;
  formGroup: FormGroup;
  @ViewChild('check') check: ElementRef;
  constructor(
      private elemRef: ElementRef,
      private formBuilder: FormBuilder
      ) {
    this.items = ["consequat", "nisi", "nostrud", "esse", "enim", "qui", "adipisicing", "laborum", "id", "non", "labore", "in", "exercitation", "ea", "sunt", "incididunt", "sint", "occaecat", "aute", "tempor", "reprehenderit", "amet", "excepteur", "mollit", "dolor", "do", "ad", "eu", "veniam", "irure", "dolore", "et", "ipsum", "quis"];
    this.filteredList = [];
    this.formGroup = formBuilder.group({
      query: ''
    })
    
  }
  filter() {
    if (this.formGroup.value.query !== '') {
      this.filteredList = this.items.filter(function (el) {
        return el.toLowerCase().indexOf(this.formGroup.value.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = []
    }
  }
  select(item, event) {
    this.formGroup.value.query = item;
    event.target.childNodes[1].childNodes[1].childNodes[1].checked = !event.target.childNodes[1].childNodes[1].childNodes[1].checked;
  }

  // handleClick(event) {
  //   let clickedComponent = event.target;
  //   let inside = false;
  //   do {
  //     if( clickedComponent === this.elemRef.nativeElement )  {
  //       inside = true;
  //     }
  //     clickedComponent = clickedComponent.parentNode;
  //   } while (clickedComponent);
  //   if( !inside ) {
  //     this.filteredList = []
  //   }
  // }
}
