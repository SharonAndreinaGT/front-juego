import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { JugarComponent } from './jugar/jugar.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'jugar', component:  JugarComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
