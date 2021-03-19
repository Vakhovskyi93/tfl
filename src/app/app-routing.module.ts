import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesScreenSectionComponent } from './components/images-screen-section/images-screen-section.component'
import { AuthComponent } from './components/auth/auth.component'

const routes: Routes = [
  { path:'home', component: ImagesScreenSectionComponent},
  { path:'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
