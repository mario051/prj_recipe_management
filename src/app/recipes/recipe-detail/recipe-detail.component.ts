import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe!: Recipe|undefined;
  id!: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipes()[this.id];
      }
    );
  }

  addIngredients() {
    if (this.selectedRecipe) {
      this.recipeService.addIngredients(this.selectedRecipe.ingredients);
    }
  }

}
