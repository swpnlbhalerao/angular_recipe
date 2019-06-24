import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  id:number;
  editMode:boolean=true;
   recipeForm:FormGroup;  
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
          this.initForm();

      }
    )
  }

    get indgredientControl(){
      return (this.recipeForm.get('ingredients') as FormArray).controls;
    }
  submitForm(){
    /* console.log(this.recipeForm); */
    //console.log(this.recipeForm.value);
    
      if(this.editMode){
        this.recipeService.updateRecipeItem(this.id,this.recipeForm.value);
      }else{
        this.recipeService.addRecipeItem(this.recipeForm.value);
      }
      this.onCancel();
  }


  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  
  private initForm(){
    let recipeName=''
    let imagePath=''
    let description='';
    let recipeIngredients=new FormArray([])


    if(this.editMode){
      const recipe=this.recipeService.getRecipe(this.id);
        recipeName=recipe.name;
        imagePath=recipe.imagePath;
        description=recipe.description;
        
          if(recipe['ingredients']){
            for(let indgredient of recipe.ingredients){
              recipeIngredients.push(new FormGroup({
                'name'  : new FormControl(indgredient.name,Validators.required),
                'amount': new FormControl(indgredient.amount,[Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)]),
              }))
            }
          }
    }

    this.recipeForm=new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
       'imagePath' :new FormControl(imagePath,Validators.required),
       'description' :new FormControl(description,Validators.required), 
       'ingredients': recipeIngredients
    })
  }

  addIngredientItem(){
     (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name':new FormControl(null,Validators.required),
      'amount':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
 
  }


}
