import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authservice : AuthService){
  }
/*   activate=false;
constructor(private service : RecipeService){
}
 */
 /*  loadedFeature:string ='recipe';
  onNavigate(featureSelected:string){
    console.log(featureSelected);
    this.loadedFeature=featureSelected;
  } */


  ngOnInit(){
      this.authservice.authLogin();
 
    /* this.service.activateEmmitter.subscribe((doActivate)=>{
      this.activate=doActivate;
    }) */
  }


}
