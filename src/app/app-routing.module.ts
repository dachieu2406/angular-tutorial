import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputFieldDirective } from './input-field.directive';


const routes: Routes = [];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      InputFieldDirective
   ]
})
export class AppRoutingModule { }
