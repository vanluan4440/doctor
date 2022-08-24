import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { PageErrorComponent } from './page/page-error/page-error.component';
import { AboutComponent } from './page/about/about.component';
import { DepartmentsComponent } from './page/departments/departments.component';
import { DoctorsComponent } from './page/doctors/doctors.component';
import { ContactComponent } from './page/contact/contact.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch:'full' },
  { path: 'about', component: AboutComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
