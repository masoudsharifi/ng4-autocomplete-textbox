#ng4-autocomplete-textbox

This is an angular 4 module that allows for adding a auto complete textbox to an existing angular app.

#How To Use Module
1. You need to add a dependency in your package.json to "ng4-autocomplete-textbox"
2. In your app module add Ng4AutoCompleteTextBoxModule to the imports:[] 
3. add an import in your app module 
	- import { Ng4AutoCompleteTextBoxModule } from 'ng4-autocomplete-textbox';
4. In your component template add the following block:
<ng4-auto-complete-text-box
    
    inputID="this is the id of this component"
    
    inputName="this is the name of this component"
    
    placeHolder="this is the place holder"
    
    apiMethodURI="the path to the API where you would get the auto complete data"
    
    searchParamName="the url parameter through which you would pass the user's partial search string"
    
    (onSelected)="onItemSelected($event)">

</ng4-auto-complete-text-box>
5. In your component implement the onItemSelected($event) method that captures the data selected by the user once the auto complete drop down is displayed to the user.



