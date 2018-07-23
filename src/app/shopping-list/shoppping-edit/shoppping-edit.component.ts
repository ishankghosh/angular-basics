import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppping-edit',
  templateUrl: './shoppping-edit.component.html',
  styleUrls: ['./shoppping-edit.component.css']
})
export class ShopppingEditComponent implements OnInit {
  @ViewChild('f') slFrom : NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editedItem : Ingredient;
  constructor(private slService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index : number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.slService.getIngredient(index);
        this.slFrom.setValue({
          name :this.editedItem.name,
          amount : this.editedItem.amount
        })
      }
    );
  }

  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    }else{
    this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slFrom.reset();
    this.editMode = false;
  }

  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
