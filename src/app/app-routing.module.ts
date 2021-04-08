import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteUnoComponent } from './components/componente-uno/componente-uno.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
  {path:"componente-uno", component:ComponenteUnoComponent, canActivate:[AuthGuard]
  ,data:{role:'DISTRIBUIDOR'}},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent, canActivate:[AuthGuard]
  ,data:{role:'DISTRIBUIDOR'}},
  {path:"**", redirectTo:"login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
