import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') formGroup!: FormGroup;
  selectedIngredient: Ingredient | undefined;
  index!: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.selectIngredient.subscribe((ingredient: Ingredient) => {
      this.selectedIngredient = ingredient;
      this.index = this.shoppingListService.getIndex(ingredient);
      this.formGroup.controls['name'].setValue(this.selectedIngredient.name);
      this.formGroup.controls['amount'].setValue(this.selectedIngredient.amount);
    });
  }

  addNewIngredient() {
    const ingredient = new Ingredient(this.formGroup.value.name, this.formGroup.value.amount);
    this.shoppingListService.addIngredient(ingredient);
    this.formGroup.reset();
  }
  
  onDeleteIngredient() {
    this.shoppingListService.removeIngredient(this.index);    
    this.formGroup.reset();
  }

  onClearForm() {
    this.formGroup.reset();
  }

}
