import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full",title:"Home"},
  {path:"home",component:HomeComponent,title:"Home"},
  {path:"about",component:AboutComponent,title:"About"},
  {path:"contact",component:ContactComponent,title:"contact"},
  {path:"portfolio",component:PortfolioComponent,title:"portfolio"},
  {path:"**",component:NotfoundComponent,title:"Notfound"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
