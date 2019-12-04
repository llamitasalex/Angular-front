import { MainPageComponent } from './components/main-page/main-page.component';
import { searchComponent } from './components/books/search/search.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'user/login', component: LoginComponent },
  { path:'books/search', component: searchComponent },
  { path:'user/register', component: RegisterComponent },
  { path:'home', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 