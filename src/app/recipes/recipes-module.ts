import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { SharedeModule } from '../shared/shared-module';
import { RecipeRoutingModule } from './recipes-routing.module';

  @NgModule({
    declarations:[
        RecipesComponent,
        RecipeItemComponent,
        RecipeStartComponent,
        RecipesDetailComponent,
        RecipesListComponent,
        EditRecipeComponent

    ],imports:[
        FormsModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedeModule
    ]

})
export class RecipesModule{

}