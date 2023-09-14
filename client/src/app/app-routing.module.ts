import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfasPrincipalComponent } from './interfas-principal/interfas-principal.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'Interface',component:InterfasPrincipalComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
