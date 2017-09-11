import { 
    Input,
    Output, 
    Directive, 
    ElementRef,
    HostListener,
    EventEmitter,
  } from '@angular/core';
  import { NgControl } from '@angular/forms';
  
  import { SearchService } from "./search.service";
  import { IAutoCompleteResult } from "./auto-complete-results.interface";
  
  @Directive({
    selector: '[appAutocompleteTextbox]'
  })
  export class AutocompleteTextboxDirective {
    @Input() searchString: string = '';
    @Input() minLength: number = 0;
    @Input('searchParamName') searchParamName: string = '';
    @Input('apiMethodURI') apiMethodURI: string = '';
    @Output() dataReady: EventEmitter<IAutoCompleteResult[]> = new EventEmitter<IAutoCompleteResult[]>();
  
    @HostListener('paste', ['$event']) onPaste(event: Event) {
      this.searchString = this._control.value;
      if(this.searchString.length > this.minLength) {
        this.populateList();
      } else if(this.searchString === null || this.searchString === '') {
        this.dataReady.emit([]);
      }
    }
  
    @HostListener('propertychange', ['$event']) onPropertyChange(event: Event) {
      this.searchString = this._control.value;
      if(this.searchString.length > this.minLength) {
        this.populateList();
      } else if(this.searchString === null || this.searchString === '') {
        this.dataReady.emit([]);
      }
    }
  
    @HostListener('input', ['$event']) onInput(event: Event) {    
      this.searchString = this._control.value;
      if(this.searchString.length > this.minLength) {
        this.populateList();
      } else if(this.searchString === null || this.searchString === '') {
        this.dataReady.emit([]);
      }
    }
   
    
    constructor(
      private eleRef: ElementRef,
      private _control: NgControl,
      private _searchService: SearchService) { }
  
    ngOnInit() {
    }
  
    populateList() {
      this._searchService.getList(this.apiMethodURI, this.searchParamName, this.searchString)
        .subscribe(
          response => {
            var items = <IAutoCompleteResult[]> response.json();
            this.dataReady.emit(items);
          },
          error => {
            console.error(error);
          }
        );
    }
  
  }