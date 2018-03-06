import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{MatListModule,MatGridListModule,MatGridTile,MatCardActions,MatCardModule,
  MatCardAvatar,MatCardHeader,MatCardTitle,MatToolbarModule,MatButtonModule,MatDialogModule,
MatInputModule,MatCheckboxModule, MatFormFieldModule,MatSlideToggleModule,MatOptionModule,MatSelectModule}
from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 

// import 'hammerjs';

import {PromotionService} from './services/promotion.service';
import {DishService} from './services/dish.service';
import {LeaderService} from './services/leader.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';

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
    LoginComponent,
    
   
  ],
  imports: [
    BrowserModule,MatListModule,FlexLayoutModule,
    MatGridListModule,MatCardModule,MatToolbarModule,MatButtonModule,
     AppRoutingModule,MatDialogModule,BrowserAnimationsModule,MatInputModule,
     MatCheckboxModule,FormsModule,MatFormFieldModule,MatIconModule,MatFormFieldModule,ReactiveFormsModule,
     MatSlideToggleModule,MatOptionModule,MatSelectModule
  ],
  providers: [DishService,PromotionService,LeaderService],
  entryComponents:[LoginComponent],//not directly used in our application but triggerd at other part not a part of router nor explictily called
  bootstrap: [AppComponent]
}) 
export class AppModule { }
