import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { Data } from '@angular/router';
import { map, filter } from 'rxjs/operators'
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage';
import { AuthService } from '../auth/auth-service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    /* styleUrls: [

    ] */
    styles:[]

})

export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated = false;
    userAuthSubscription: Subscription;
    //  firstObservable:Subscription;

    constructor(private service: RecipeService, private dataStorageService: DataStorageService, private authService: AuthService) {

    }

    ngOnInit(): void {
        this.userAuthSubscription = this.authService.user.subscribe(
            user => {
                this.isAuthenticated = !!user;
            }
        )


    }


    saveRecipesData() {
        this.dataStorageService.storeRecipes();
    }

    fetchRecipesData() {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    logout(){
        this.authService.logout();
    }


    ngOnDestroy() {
        this.userAuthSubscription.unsubscribe();
    }






    /*   interval(1000).subscribe(
        count=>{
            console.log(count);
        }
    ) */
    /* const customObs=Observable.create(observer =>{
        let  count = -2
        setInterval(()=>{
          
            observer.next(count);
            observer.complete();
            observer.error(new Error("number is greater than 3 "))

            count++;
        },1000)

    })

   ;
   customObs.pipe(filter(data =>{
        return data>0;
   }),map((data:number)=>{
    return 'Round  '+data+1;
})) .subscribe((data:Data)=>{
       console.log(data);
   },error=>{
    console.log(error.message);
   },()=>{
       console.log("completed")
   })  */
}

/*   @Output()featureSelected=new EventEmitter<String>();

    onSelect(feature:string){
        this.featureSelected.emit(feature);
    }


    activateEmitter(){
        this.service.activateEmmitter.next(true);
    } */

