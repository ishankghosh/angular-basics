import { Injectable } from '@angular/core';

import  { Recipes } from  "./recipes.model"
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService{

  private recipes : Recipes[] = [
    new Recipes("Chicken Wooper Burger","Big Fat Chicken Burger", "http://www.burgerking.com.my/upload/image/Category/2/double-bbq-beefacon-thumb.jpg",
  [
    new Ingredient("Burger", 2),
    new Ingredient("French Fries", 1)
  ]),
    new Recipes("Tandori Subway","Half a SUB", "http://www.bandt.com.au/information/uploads/2015/06/kids_pack_items-1260x840.jpg",
  [
    new Ingredient("Meat", 1),
    new Ingredient("Mayo", 2)
  ])
  ];

constructor(private slService : ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id : number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients : Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
