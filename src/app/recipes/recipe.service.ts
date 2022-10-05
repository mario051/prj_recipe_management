import { Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

import { Ingredient } from '../shared/ingredients.model';
import { Recipe } from '../shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes : Recipe[] = [
    new Recipe('A Test Recipe', 
    'This is a simple description', 
    'https://craft-mart.com/wp-content/uploads/2018/09/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES.jpg',
    [
      new Ingredient('Bread', 2),
      new Ingredient('Meat', 1)
    ]),
    new Recipe('A Test Recipe 2', 
    'This is a more complex description', 
    'https://craft-mart.com/wp-content/uploads/2018/09/84_SMI_EASY-DINNER-KETO-CROCKPOT-RECIPES.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Fries', 20)])
    ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
