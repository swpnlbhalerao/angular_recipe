import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit ,OnDestroy{
 // @Output()recipeWasSelected=new EventEmitter<Recipe>(); 

  recipes :Recipe[];
  recipeSubscriber:Subscription;


  constructor(private dataStorage:DataStorageService,private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { 
    
  }

  ngOnInit() {

    this.recipes=this.recipeService.getRecipes();
   /*  console.log(this.recipes);
      if(this.recipes.length===0){
        console.log("fetch recipe directly ...");
         this.recipeSubscriber= this.dataStorage.fetchRecipes().subscribe((recipes)=>{
         this.recipes=recipes;
       })

     } 
 */
      
      this.recipeSubscriber=this.recipeService.recipeChanged.subscribe((recipes:Recipe[])=>{
      this.recipes=recipes;
    })


  }

  addRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }

  ngOnDestroy(): void {
    this.recipeSubscriber.unsubscribe();
  }

 /*  onRecipeSelect(recipe:Recipe){
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  } */

}
