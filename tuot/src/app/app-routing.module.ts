<<<<<<< HEAD
import { BodyComponent } from './share/body/body.component';
import { FavoritesComponent } from './share/favorites/favorites.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BodyComponent },
];
=======
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];
>>>>>>> 073b934bcb028f9826df3af89da4a6b9c208022a

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
