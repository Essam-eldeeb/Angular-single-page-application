import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
{ path:"home", component:HomeComponent},
{ path:"about",component:AboutComponent},
{ path:"" ,component:HomeComponent},
{ path:"service",component:ServiceComponent},
{ path:"portfolio", component:PortfolioComponent},
{ path:"team",component:TeamComponent},
{ path:"contact",component:ContactComponent},
{ path:"why-us",component:WhyUsComponent},
{path:"**",component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
