import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageLoginComponent } from './homepage/homepage-login.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { FreeCourseComponent } from './free-course/free-course.component';
import { OnlinecourseComponent } from './onlinecourse/onlinecourse.component';
import { MycourseComponent } from './mycourse/mycourse.component';




const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'homepage-login', component: HomepageLoginComponent },
  { path: 'introduce', component: IntroduceComponent },
  { path: 'free-courese', component: FreeCourseComponent },
  { path: 'onlinecourse', component: OnlinecourseComponent },
  { path: 'mycourse', component: MycourseComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, IntroduceComponent, FreeCourseComponent, OnlinecourseComponent, MycourseComponent];
