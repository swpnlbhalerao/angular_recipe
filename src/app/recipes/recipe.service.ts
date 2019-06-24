import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
  constructor(private shoppingListService: ShoppingService){

  }
  recipeChanged=new Subject<Recipe[]>();
  private recipes:Recipe[]=[];
/*   private recipes :Recipe[]=[
        new Recipe('Test Rec','Testing Recipe',"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/gfkids_maccheese.jpg"
        ,[new Ingredient("Chicken",20),
        new Ingredient("Tomatoes",10)])
        ,new Recipe('Another Test Rec','Another Testing Recipe',"https://www.giverecipe.com/wp-content/uploads/2009/03/eggs-with-spinach-image.jpg"
        ,[new Ingredient("Spinach",10),
          new Ingredient("Tomatoes",50)])
    
      ]; */

      recipeSelected=new EventEmitter<Recipe>();
       getRecipes(){
       if(!this.recipes){
         
       }
        return this.recipes.slice();
      }


      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

      getRecipe(index:number){
        return this.recipes[index];
      }


      addRecipeItem(newRecipe:Recipe){
        this.recipes.push(newRecipe);
        this.recipeChanged.next(this.recipes.slice())
      }

      updateRecipeItem(index:number,editedRecipe:Recipe){
        this.recipes[index]=editedRecipe;
        this.recipeChanged.next(this.recipes.slice())
      }      

      deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }

      setRecipes(recipes:Recipe[]){
         this.recipes=recipes;
         this.recipeChanged.next(this.recipes);
       } 


}