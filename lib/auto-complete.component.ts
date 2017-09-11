import { 
    Input,
    Output,
    Component, 
    EventEmitter,
    HostListener
  } from '@angular/core';
  
  import { SearchService } from "./search.service";
  import { IAutoCompleteResult } from "./auto-complete-results.interface";

  @Component({
    selector: 'ng4-auto-complete-text-box',
    template: `
    <div>
        <input
            [name]="inputName"
            [id]="inputID"
            [value]="modelProperty"
            class="form-control"
            [placeholder]="placeHolder"
            ngModel
            
            appAutocompleteTextbox
            [(searchString)]="modelProperty"
            [searchParamName]="searchParamName"
            [apiMethodURI]="apiMethodURI"
            (dataReady)="onDataReady($event)"/>
        <div 
            *ngIf="showList"
            class="list-container">
            <div
            class="list-item" 
            *ngFor="let item of items">
            <div (click)="onItemSelected(item)">{{item.value}}</div>
        </div> 
    </div>`,
    styles: [`.list-container {
        left: 10;
        top: 100%;
        width: 93%;
        z-index: 1000;
        position: absolute;
        border-left: 1px solid #428bca;
        border-right: 1px solid #428bca;
        border-bottom: 1px solid #428bca;
    }
    .list-item {
        padding: 5px;
        cursor: hand;
        cursor: pointer;
        color: #428bca!important;
        background-color: #f9f9f9!important;
        border-bottom: 1px solid #428bca!important;
    }
    .list-item:hover {
        padding: 5px;
        cursor: hand;
        cursor: pointer;
        color: #ffffff!important;
        background-color:#428bca!important;
    } 
    a:hover {
        color: #fff!important;
    }
    `]
  })
  export class AutoCompleteComponent {
    @Input() inputID: string;
    @Input() inputName: string;
    @Input() placeHolder: string;
    @Input() minLength: number = 0;
    @Input() modelProperty: string = '';
    @Input('apiMethodURI') apiMethodURI: string = '';  
    @Input('searchParamName') searchParamName: string = '';
    @Output() onSelected: EventEmitter<IAutoCompleteResult> = new EventEmitter<IAutoCompleteResult>();
  
    @HostListener('mouseenter')  onmouseEnter() {
      this.showList = true;
    }
  
    @HostListener('mouseleave')  onmouseLeave() {
      this.showList = false; 
    }
  
    items: IAutoCompleteResult[] = []; 
    showList: boolean = false;
  
    constructor() { }
  
    onDataReady(data: IAutoCompleteResult[]) {
      this.items = data;
      this.showList = data.length > 0;
    }
  
    onItemSelected(selectedItem: IAutoCompleteResult) {
      this.showList = false;
      this.modelProperty = '';
      this.onSelected.emit(selectedItem);
    }
  
  }