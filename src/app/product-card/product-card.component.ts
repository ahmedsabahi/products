import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  product: any;
  item: any;
  id: any;

  constructor(
    private productData: ProductsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.productData.getProductID(this.id).subscribe(
      (data) => {
        this.product = data;
      },
      (error) => {
        console.log('error: ', error);
      },
      () => {
        console.log('complete ', 'complete');
      }
    );
  }
}
