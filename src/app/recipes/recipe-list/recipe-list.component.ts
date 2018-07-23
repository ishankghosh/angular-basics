import { Component, OnInit } from '@angular/core';
import  { Recipes } from  "../recipes.model"
import { RecipesService } from '../recipes.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipes[];


  constructor(private recipeService : RecipesService,
  private router : Router,
  private route : ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo : this.route})
  }
}
