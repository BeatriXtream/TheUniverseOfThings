import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { BannerComponent } from './share/banner/banner.component';
import { BodyComponent } from './share/body/body.component';
import { FavoritesComponent } from './share/favorites/favorites.component';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

const appRoutes: Routes = [
  { path: './share/favorites/:id',      component: FavoritesComponent },
  {
    path: './share/favorites',
    component: FavoritesComponent,
    data: { title: 'Favorites' }
  },
  { path: '',
    redirectTo: './share/favorites',
    pathMatch: 'full'
  },
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BodyComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: './share/favorites', component: FavoritesComponent},
      {path: '', redirectTo: './share/favorites', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
