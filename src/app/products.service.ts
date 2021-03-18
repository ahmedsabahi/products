import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProductList() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }

  getProductID(id: any) {
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`);
  }
}
