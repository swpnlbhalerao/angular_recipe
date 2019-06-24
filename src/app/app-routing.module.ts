import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



const routes: Routes = [

  { path:'' ,redirectTo:"/recipe",pathMatch:"full" },
  { path :'recipe',loadChildren :'./recipes/recipes-module#RecipesModule'},
  { path :'shopping-list',loadChildren :'./shopping-list/shopping-module#ShoppingModule'},
  { path :'auth',loadChildren :'./auth/auth-module#AuthModule'}
  

 /*    { path:"recipe" ,canActivate:[AuthGaurd],component:RecipesComponent,children :[
    { path:'',component:RecipeStartComponent  },
    { path:'new',component:EditRecipeComponent  },
    { path:':id',component:RecipesDetailComponent ,resolve:[RecipeResolverService] },
    { path:':id/edit',component:EditRecipeComponent ,resolve:[RecipeResolverService] }
  ] }, */

 /*  {  path :"**" ,component :AuthComponent}  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy :PreloadAllModules })],
  exports: [RouterModule]

})
export class AppRoutingModule { }
