import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { OnlinecourseComponent } from './onlinecourse/onlinecourse.component';
import { MycourseComponent } from './mycourse/mycourse.component';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngb-modal';
import { HomepageLoginComponent } from './homepage/homepage-login.component';
import { HomepageResgistrationComponent } from './homepage/homepage-resgistration.component';
import { FreeCourseComponent } from './free-course/free-course.component';
import { CartComponent } from './homepage/cart.component';
import { HomepageAdminComponent } from './homepage-admin/homepage-admin.component';
import { HomepageCreateComponent } from './homepage-admin/homepage-create.component';
import { HomepageEditComponent } from './homepage-admin/homepage-edit.component';
import { JWTInterceptor } from '../helpers/jwt.interceptor';
import { ErrorInterceptor } from '../helpers/error.interceptor';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    OnlinecourseComponent,
    MycourseComponent,
    HomepageLoginComponent,
    HomepageResgistrationComponent,
    FreeCourseComponent,
    CartComponent,
    HomepageAdminComponent,
    HomepageCreateComponent,
    HomepageEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmbedVideo.forRoot(),
    HttpClientModule,
    ModalModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
