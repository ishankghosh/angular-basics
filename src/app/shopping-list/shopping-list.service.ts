
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients : Ingredient[] =  [
    new Ingredient("Garam Masala", 3),
    new Ingredient("Potato", 1),
    new Ingredient("Dhaniya Powder", 2)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(index : number){
    return this.ingredients[index];
  }

  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredient : Ingredient[]){
    this.ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index : number, newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index : number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
