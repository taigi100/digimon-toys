import { ShopItem } from './../domain/shop-item.model';
import { ShopService } from './shop.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  ItemsLocation: string;
  Items : Array<ShopItem>;
  constructor(private _shopService: ShopService, private route: ActivatedRoute) { 
    this.ItemsLocation = this.route.snapshot.data['url'];
    this._shopService.getItems(this.ItemsLocation)
    .subscribe((res: ShopItem[]) => this.Items = res);
  }

  ngOnInit() {
  }
}
