import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map,tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth-service';


@Injectable({providedIn :'root'})
export class DataStorageService {

    constructor(private http:HttpClient,private recipeService:RecipeService,private authservice:AuthService){
        
    }

    storeRecipes(){
        const recipes=this.recipeService.getRecipes();
        this.http.put('https://ng-recipe-book-274a4.firebaseio.com/recipes.json',recipes).subscribe(
            (response)=>{
                console.log(response);
            }
        );
    }

    fetchRecipes(){
        console.log("called Fetch Recipes");
          return  this.http.get<Recipe[]>('https://ng-recipe-book-274a4.firebaseio.com/recipes.json'
            ).pipe(map(recipes => {
                return recipes.map(recipe=>{
                    return {... recipe,ingredients:recipe.ingredients ? recipe.ingredients :[]} //spread operator
                })
            }),tap(recipes=>{
                    this.recipeService.setRecipes(recipes);
                })
            
            );
        

/* 
       return  this.http.get<Recipe[]>('https://ng-recipe-book-274a4.firebaseio.com/recipes.json')
        .pipe(map(recipes => {
            return recipes.map(recipe=>{
                return {... recipe,ingredients:recipe.ingredients ? recipe.ingredients :[]} //spread operator
            })
        }),tap(recipes=>{
                this.recipeService.setRecipes(recipes);
            })
        ) */
    }
}
