import { AuthModule } from '@auth0/auth0-angular';
import { InvoiceComponent } from './account/invoice/invoice.component';
import { MyCardsComponent } from './account/myCards/myCards.component';
import { ProfileComponent } from './account/profile/profile.component';
import { CardPopupComponent } from './card-list/cardPopup/cardPopup.component';
import { NgModule } from '@angular/core';
import { CardDetailsComponent } from './cardDetails/cardDetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CardListComponent } from './card-list/card-list.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
    HomeComponent,
    FooterComponent,
    CardDetailsComponent,
    CardPopupComponent,
    ProfileComponent,
    MyCardsComponent,
    InvoiceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AuthModule.forRoot({
      ...environment.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
