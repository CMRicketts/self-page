import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitlepageComponent } from './titlepage/titlepage.component';
import { ResumepageComponent } from './resumepage/resumepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { InfopageComponent } from './infopage/infopage.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { MeinfoComponent } from './meinfo/meinfo.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { MailComponent } from './mail/mail.component';
import { EmailComponent } from './email/email.component';
import { PingerComponent } from './pinger/pinger.component';
import { UpdateMeComponent } from './update-me/update-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitlepageComponent,
    ResumepageComponent,
    ContactpageComponent,
    InfopageComponent,
    ProjectpageComponent,
    ProjectinfoComponent,
    MeinfoComponent,
    LinkedinComponent,
    MailComponent,
    EmailComponent,
    PingerComponent,
    UpdateMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
