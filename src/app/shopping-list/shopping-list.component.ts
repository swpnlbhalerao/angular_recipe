import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  //  ingredinetSubrciption:Subscription
    //ingredients: Ingredient[]

    ingredients: Observable<{ingredients:Ingredient[]}>;

    /* 
      new Ingredient("Apples",20),
      new Ingredient("Tomatoes",10)
    ]; */

  constructor(private shoppingService:ShoppingService,
    private store:Store<{shoppinglist:{ingredients:Ingredient[]}}>) {

   }

  ngOnInit() {
     this.ingredients=this.store.select('shoppinglist') ; 
   /*  this.ingredients=this.shoppingService.getIngredients();
    this.ingredinetSubrciption= this.shoppingService.ingredientchanged.subscribe((ingredientarray:Ingredient[])=>{
    this.ingredients=ingredientarray;
  }); */
  
  }

  onEditShoppingItem(index:number){
    this.shoppingService.shoppingListEditSubject.next(index);
  }

    ngOnDestroy(){
     // this.ingredinetSubrciption.unsubscribe();
    }
 /*  onIngredientInsert(ingredient:Ingredient){
   
    this.ingredients.push(ingredient);
  } */

}
