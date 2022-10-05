import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from './shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  newIngredient = new Subject<Ingredient[]>();
  selectIngredient = new Subject<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients.slice()[index];
  }

  getIndex(ingredient: Ingredient): number {
    return this.ingredients.findIndex((elem) => {
      return elem.name === ingredient.name;
    });
  }

  addIngredient(newIngredient: Ingredient) {
    const index = this.getIndex(newIngredient);
    if(index === -1) {
      this.ingredients.push(newIngredient);
    } else {
      this.ingredients.splice(index, 1, newIngredient);
    }
    this.newIngredient.next(this.ingredients);
  }
  
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredient.next(this.ingredients);
  }
  
  removeIngredient(id: number) {
    console.log('remove item number ' + id);
    this.ingredients.splice(id, 1);
    this.newIngredient.next(this.ingredients);
    console.log('new array: ' + this.ingredients.map((elem) => elem.name));
  }
}