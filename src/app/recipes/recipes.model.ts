import { Ingredient } from "../shared/ingredient.model";

export class Recipes{
  public name : string;
  public description : string;
  public imagepath : string;


  constructor(name : string, description : string, imagepath: string, public ingredients : Ingredient[]){
    this.name = name;
    this.description = description;
    this.imagepath = imagepath;
  }
}
