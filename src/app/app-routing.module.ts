import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {TitlepageComponent} from './titlepage/titlepage.component';
import {ContactpageComponent} from './contactpage/contactpage.component';
import {InfopageComponent} from './infopage/infopage.component';
import {ResumepageComponent} from './resumepage/resumepage.component';
import {ProjectpageComponent} from './projectpage/projectpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: TitlepageComponent},
  { path: 'about', component: InfopageComponent},
  { path: 'contact', component: ContactpageComponent},
  { path: 'resume', component: ResumepageComponent},
  { path: 'projects', component: ProjectpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
