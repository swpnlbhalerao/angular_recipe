import { Component, OnInit, ElementRef, ViewChild, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
    /* @ViewChild('nameInput')nameInputRef:ElementRef;
    @ViewChild('amountInput')amountInputRef:ElementRef; */
    @ViewChild('f') form:NgForm;
    editItemSubscription:Subscription  
    editMode=false;
    editItemIndex:number;
    editIngredient:Ingredient;
   
  
  constructor(private shoppinglistService:ShoppingService) {

   }

  ngOnInit() {
    this.shoppinglistService.shoppingListEditSubject.subscribe((itemIndex:number)=>{
      this.editItemIndex=itemIndex;
      this.editMode=true;
        this.editIngredient=this.shoppinglistService.getIngredient(this.editItemIndex);
        console.log(this.form);
        this.form.setValue({
          name:this.editIngredient.name,
          amount:this.editIngredient.amount
        })

    });
  
  }


  submitIngredient(form:NgForm){
   console.log("adding in..")
   /*  const name=this.nameInputRef.nativeElement.value;
    const amount=this.amountInputRef.nativeElement.value; */
      const formValue=form.value;
      const newIngredient=new Ingredient(formValue.name,formValue.amount);
    
      if(this.editMode){
        this.shoppinglistService.updateIngredient(this.editItemIndex,newIngredient)
      }else{
        this.shoppinglistService.addIngredient(newIngredient);
      }
      
      this.editMode=false;
      form.reset();
  }
  clearForm(){
    this.form.reset();
    this.editMode=false;
  }
  deleteIngredient(){
      this.form.reset();
      this.editMode=false;
      this.shoppinglistService.deleteIngredient(this.editItemIndex);

    }
}
