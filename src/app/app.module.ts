import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatListModule,MatGridListModule,MatGridTile,MatCardActions,MatCardModule,
  MatCardAvatar,MatCardHeader,MatCardTitle,MatToolbarModule,MatButtonModule}from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



import 'hammerjs';

import {PromotionService} from './services/promotion.service';
import {DishService} from './services/dish.service';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
   
  ],
  imports: [
    BrowserModule,MatListModule,FlexLayoutModule,
    MatGridListModule,MatCardModule,MatToolbarModule,MatButtonModule,
     AppRoutingModule
  ],
  providers: [DishService,PromotionService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
