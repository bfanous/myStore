import { MyCardsComponent } from './account/myCards/myCards.component';
import { HomeComponent } from './home/home.component';
import { CardListComponent } from './card-list/card-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ProfileComponent } from './account/profile/profile.component';
import { CardDetailsComponent } from './cardDetails/cardDetails.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'viewProduct', component: CardDetailsComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'cardList',
    component: CardListComponent,
    pathMatch: 'full',
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'myCards', component: MyCardsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
