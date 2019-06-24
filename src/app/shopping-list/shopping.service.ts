import { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import {Subject } from 'rxjs';

@Injectable()
export class ShoppingService{
   
  ingredientchanged=new Subject<Ingredient[]>();
  shoppingListEditSubject=new Subject<number>();
    private ingredients: Ingredient[]=[
        new Ingredient("Apples",20),
        new Ingredient("Tomatoes",10)
      ]; 

      getIngredients(){
        return this.ingredients.slice();
      }

      getIngredient(index:number){
        return this.ingredients[index];
      }


      addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
         this.ingredientchanged.next(this.ingredients.slice()); 
      }

      addIngredients(ingredients:Ingredient[]){
        console.log("Multiple ingredints added")
         this.ingredients.push(... ingredients);
          this.ingredientchanged.next(this.ingredients.slice());
      }

      updateIngredient(index:number,editedIngredient:Ingredient){
        
        this.ingredients[index]=editedIngredient;
        this.ingredientchanged.next(this.ingredients.slice());
        
      }

      deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientchanged.next(this.ingredients.slice());
      }

}