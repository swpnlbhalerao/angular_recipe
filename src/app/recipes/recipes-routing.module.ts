import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from '../auth/auth.gaurd';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipeResolverService } from './recipe.resolver.service';

const routes :Routes=[
    { path: '' ,canActivate:[AuthGaurd],component:RecipesComponent,children :[
        { path:'',component:RecipeStartComponent  },
        { path:'new',component:EditRecipeComponent  },
        { path:':id',component:RecipesDetailComponent ,resolve:[RecipeResolverService] },
        { path:':id/edit',component:EditRecipeComponent ,resolve:[RecipeResolverService] }
      ] }, 
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
    
})
export class RecipeRoutingModule{


}