import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FooGuardService } from './foo-guard.service';
import { FooResolveService } from './foo-resolve.service';
import { HomeComponent } from './home/home.component';


const routes: Routes = [  { path:'', redirectTo:'home',pathMatch:'full'},
{ path:'home', component: HomeComponent},
{
  path:'details/:imbdid',
  component: DetailsComponent,
  canActivate:[FooGuardService],
  resolve:{
    movie:FooResolveService
  }
}];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
