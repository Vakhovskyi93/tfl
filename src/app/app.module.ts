import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'; 
import { MatToolbarModule}  from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms'; 
import { NavigationLinksComponent } from './components/navigation-links/navigation-links.component'

import { ImagesScreenModuleModule } from './components/images-screen-section/images-screen-module/images-screen-module.module';
import { AuthComponent } from './components/auth/auth.component'
import { ImagesScreenSectionComponent } from './components/images-screen-section/images-screen-section.component'
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    NavigationLinksComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    ImagesScreenModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
