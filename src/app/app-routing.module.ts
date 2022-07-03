import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TalksComponent } from './talks/talks.component';

const routes: Routes =
[
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'talks', component: TalksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
