import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { StringCutPipe } from '../../../pipes/string-cut.pipe';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule}  from '@angular/material/card';
import { MatPaginatorModule}  from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { FormsModule } from '@angular/forms';
//import { NavigationLinksComponent } from '../../navigation-links/navigation-links.component';

import { ImagesScreenSectionComponent } from '../images-screen-section.component';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';
import { SearchingSectionComponent } from '../searching-section/searching-section.component';


 


@NgModule({
  declarations: [
    ImagesScreenSectionComponent,
    BookmarksComponent,
    SearchingSectionComponent,
    StringCutPipe,
   // NavigationLinksComponent

  ],
  imports:[
    CommonModule,
    FormsModule,
      RouterModule.forChild([
          { path:'', component: SearchingSectionComponent},

          { path:'favorite', component: BookmarksComponent},
          
      ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
  ],
  exports:[ 
      RouterModule
  ] 
})
export class ImagesScreenModuleModule { }
