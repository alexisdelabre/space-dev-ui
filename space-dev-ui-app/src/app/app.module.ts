import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppService } from './app.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CardComponent } from './card/card.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Store, StoreModule } from '@ngrx/store';
import { homepageReducer } from './_states/homepage.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HomepageEffects } from './_states/homepage.effects';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    ErrorPageComponent,
    CardComponent,
    DetailPageComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    StoreModule.forRoot({ homepageState: homepageReducer }),
    EffectsModule.forRoot([HomepageEffects]),
  ],
  providers: [AppService, Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
