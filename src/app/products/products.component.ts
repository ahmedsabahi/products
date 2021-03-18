import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any;
  id: any;

  constructor(
    private productData: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.productData.getProductList().subscribe(
      (data) => {
        this.productList = data;
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete ', 'complete');
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
