import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from './shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  newIngredient = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredient.next(this.ingredients);
  }
  
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredient.next(this.ingredients);
  }
  
  removeIngredient(id: number) {
    this.ingredients.slice(id, 1);
    this.newIngredient.next(this.ingredients);
  }
}