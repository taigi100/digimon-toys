import { ShopItem } from './../../domain/shop-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
   selector: 'app-shop-item',
   template: `
    <div class="item" *ngIf="item">
      <div class="card" style="width: 20rem;">
      <img class="card-img-top" [src]="item.image" alt="Item image not found">
      <div class="card-block">
        <h4 class="card-title">{{item.name}}</h4>
          <a [href]="item.linkToBuy" class="btn btn-primary buy-button">Buy now!</a>
      </div>
  `,
   styleUrls: ['shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
   @Input() item: ShopItem;

   ngOnInit() {

   }
}
