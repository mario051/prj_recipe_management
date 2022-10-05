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

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addNewIngredient() {
    console.log(this.formGroup);
    const ingredient = new Ingredient(this.formGroup.value.name, this.formGroup.value.amount);
    this.shoppingListService.addIngredient(ingredient);
    this.formGroup.reset();
  }

}
