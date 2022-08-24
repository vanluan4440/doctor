import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { PageErrorComponent } from './page/page-error/page-error.component';
import { AboutComponent } from './page/about/about.component';
import { DepartmentsComponent } from './page/departments/departments.component';
import { DoctorsComponent } from './page/doctors/doctors.component';
import { ContactComponent } from './page/contact/contact.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    PageErrorComponent,
    AboutComponent,
    DepartmentsComponent,
    DoctorsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
