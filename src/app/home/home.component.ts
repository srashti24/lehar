import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
dish:Dish;
promotion:Promotion;
  constructor(private dishservice:DishService,private promotionservice:PromotionService
  ,private leaderservice:LeaderService) { }

  ngOnInit() {
      this.dish = this.dishservice.getFeauteredDish(); 
        this.promotion = this.promotionservice.getFeauteredPromotion(); 

    
  }

}
