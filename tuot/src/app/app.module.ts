import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
=======
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
>>>>>>> 8c3da8daa1097c490ac14a260f98933aedc7a517

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    FooterComponent,
    BodyComponent
=======
    FooterComponent
>>>>>>> 8c3da8daa1097c490ac14a260f98933aedc7a517
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
