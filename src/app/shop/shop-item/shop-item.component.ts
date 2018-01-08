import { ShopItem } from './../../domain/shop-item.model';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
   selector: 'app-shop-item',
   template: `
    <div class="item" *ngIf="item">
      <div class="card">
      <img class="card-img-top card-img" [src]="item.image" alt="Item image not found">
      <div class="card-block">
           <h4 class="card-title">{{item.name}}</h4>
             <a [href]="item.linkToBuy">
               <button type="button" class="btn btn-outline-dark">Buy now!</button>
             </a>
      </div>

  `,
   styleUrls: ['shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
   @Input() item: ShopItem;

   ngOnInit() {

   }
}
