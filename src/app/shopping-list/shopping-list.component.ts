import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscription!: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }
  
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.newIngredient.subscribe(
      () => this.ingredients = this.shoppingListService.getIngredients()
      );
    }

    onSelectItem(ingredient: Ingredient) {
      
    }
    
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
