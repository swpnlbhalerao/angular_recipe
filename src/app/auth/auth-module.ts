import { NgModule } from '@angular/core';
import { AuthComponent } from './auth-component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedeModule } from '../shared/shared-module';

@NgModule({
    declarations:[
        AuthComponent,
    ],
    imports:[
        FormsModule,SharedeModule,
        RouterModule.forChild([
            {  path :"" ,component :AuthComponent}, 

        ])
    ]
    
})
export class AuthModule{
}    