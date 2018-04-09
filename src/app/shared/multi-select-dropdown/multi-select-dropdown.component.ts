import { Component, ElementRef, ViewChild, Input } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-multi-select-dropdown",
  templateUrl: "./multi-select-dropdown.component.html",
  styleUrls: ["./multi-select-dropdown.component.css"]
})
export class MultiSelectDropdownComponent {
  public filteredList;
  public selected: any;
  formGroup: FormGroup;
  @Input() items: any[];
  @Input() searchTermSelect: string;
  @ViewChild("check") check: ElementRef;
  constructor(private elemRef: ElementRef, private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      query: ""
    });
    this.filteredList = [];
    this.selected = [];
  }
  ngOnInit() {
  }
  filter() {
    if (this.formGroup.value.query !== "") {
      this.filteredList = this.items.filter(
        function(el) {
          return (
            el.name
              .toLowerCase()
              .indexOf(this.formGroup.value.query.toLowerCase()) > -1
          );
        }.bind(this)
      );
    } else {
      this.filteredList = [];
    }
  }
  select(item, event) {
    
    if (event.target.childNodes[1].childNodes[1].childNodes[1].checked == false) {
      this.selected.push(item);
      event.target.childNodes[1].childNodes[1].childNodes[1].checked = true;
    } else {
      this.selected.pop(item);
      event.target.childNodes[1].childNodes[1].childNodes[1].checked = false;
    }
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
