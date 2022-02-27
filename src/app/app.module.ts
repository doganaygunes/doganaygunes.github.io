import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { WorkComponent } from './work/work.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesService } from './services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollComponent } from './scroll/scroll.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    NavMenuComponent,
    AboutComponent,
    ContactComponent,
    ScrollComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
