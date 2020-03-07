import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { PostincidentComponent } from './postincident/postincident.component';

const routes: Routes = [
{ path: '', component: DashboardComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'login', component: LoginComponent},
{ path: 'profile', component: ProfileComponent},
{ path: 'incidents', component: IncidentsComponent},
{ path: 'post', component: PostincidentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
