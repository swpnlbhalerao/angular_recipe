import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import * as ShoppinglistActions from './shopping-list,actions';


   const intialstate = {
    ingredients:[
        new Ingredient("Apples",20),
        new Ingredient("Tomatoes",10)
    ]
   };


export function shoppingListReducer(state=intialstate,action:ShoppinglistActions.actionType){
        switch(action.type){
            case ShoppinglistActions.ADD_INGREDIENT : {
                return {
                    ...state,
                    ingredients:[
                        ...state.ingredients,action.payload
                ]
                }
            }
            case ShoppinglistActions.ADD_INGREDIENTS : {

                return{
                    ...state,
                    ingredients:[
                        ...state.ingredients,...action.payload
                    ]
                }
            }
            case ShoppinglistActions.UPDATE_INGREDIENTS :{
                const ingredient=state.ingredients[action.payload.index];
                const updateIngredient = {
                    ...ingredient,
                    ...action.payload.ingredient
                };
                const updateIngredients = [...state.ingredients];
                updateIngredients[action.payload.index] = updateIngredient;
            
            return{
                ...state,
                ingredients : updateIngredients
            }
        } 
            case ShoppinglistActions.DELETE_INGREDIENTS:{
               /*  const updateIngredients = [...state.ingredients];
                updateIngredients.splice(action.payload,1); */
               
                return {
                    ...state,   
                    ingredients:state.ingredients.filter((ig,igIndex)=>{
                        return igIndex!=action.payload;
                    })
                }
            }

            default:
              return state;
        }

}
