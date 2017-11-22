import { url, ShopItem } from './../domain/shop-item.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShopService {

    constructor(private http: HttpClient) {

    }
    
    public getItems(ItemsLocation: url) : Observable<ShopItem[]> {
        return this.http.get<ShopItem[]>(ItemsLocation);
    }

}