import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader-component';
import { AlertComponent } from '../alert/alert-component';
import { DropdownDirective } from './dropdown.directives';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        LoaderComponent,
        AlertComponent,
        DropdownDirective,
    ],imports:[
        CommonModule,

    ],exports:[
        CommonModule,
        LoaderComponent,
        AlertComponent,
        DropdownDirective,
    
    ]



})
export class SharedeModule{

}