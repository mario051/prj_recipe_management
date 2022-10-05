import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponentComponent } from './recipes/edit-component/edit-component.component';
import { NoSelectedtRecipeComponent } from './recipes/no-selectedt-recipe/no-selectedt-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: NoSelectedtRecipeComponent},
        {path: 'new', component: EditComponentComponent},
        {path: ':id/edit', component: EditComponentComponent},
        {path: ':id', component: RecipeDetailComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent, children: []}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}