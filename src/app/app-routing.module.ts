import { AuthGuard } from './Core/auth/auth.guard';
import { MyCardsComponent } from './account/myCards/myCards.component';
import { SigninComponent } from './Core/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CardListComponent } from './card-list/card-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { SignupComponent } from './Core/signup/signup.component';
import { ProfileComponent } from './account/profile/profile.component';
import { CardDetailsComponent } from './cardDetails/cardDetails.component';

const routes: Routes = [
  { path: 'viewProduct', component: CardDetailsComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cardList', component: CardListComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  { path: 'myCards', component: MyCardsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
