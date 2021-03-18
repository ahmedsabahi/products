import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: any;
  constructor(public cartService: CartService) {
    console.log(cartService.getItems());
    this.items = cartService.getItems();
  }

  ngOnInit(): void {}

  deleteItem(item: any) {
    this.items = this.items.filter((arr: any) => arr.id != item.id);
    console.log(this.items);
  }
}
