import {Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';


/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'chips-autocomplete-example',
  templateUrl: 'chips-autocomplete-example.html',
  styleUrls: ['chips-autocomplete-example.css'],
})
export class ChipsAutocompleteExample implements OnInit {
  removable = true;
  addOnBlur = true;
  fruitCtrl = new FormControl();
  fruits: string[] = [];

  constructor() {}

ngOnInit() {
  this.fruitCtrl.setValue('fdgdfgdfg');
}


  add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      if (input) {
        input.value = '';
      }
  
      if(this.fruits.length === 1){
        this.fruitCtrl.disable();
      }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.fruitCtrl.setValue('');
      this.fruitCtrl.enable();
    }
  }
}