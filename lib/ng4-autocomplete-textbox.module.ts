import { NgModule, } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { SearchService } from './search.service';
import { AutoCompleteComponent } from './auto-complete.component';
import { AutocompleteTextboxDirective } from "./autocomplete-textbox.directive";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        AutoCompleteComponent,
        AutocompleteTextboxDirective
    ],
    declarations: [
        AutoCompleteComponent,
        AutocompleteTextboxDirective
    ],
    providers: [SearchService],
})
export class Ng4AutoCompleteTextBoxModule { }
