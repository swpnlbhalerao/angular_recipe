import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  recipe:Recipe
  id:number;
  constructor( private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) {
 }

  ngOnInit() {
    //this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (data:Data)=>{
        this.id=data['id'];
/*         console.log("Id :"+this.id); */
       this.recipe=this.recipeService.getRecipe(this.id); 
      }
    )
  
  }
  
   onAddToShoppingList(){
     alert("clcicked")
    console.log("add to shopping list called...")
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
 

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo :this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipe'])
  }

}
