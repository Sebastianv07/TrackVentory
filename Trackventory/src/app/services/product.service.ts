import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(filters: any): Observable<Product[]> {
    let params = new HttpParams();
    if (filters.reference) {
      params = params.set('reference', filters.reference);
    }
    if (filters.name) {
      params = params.set('name', filters.name);
    }
    if (filters.price) {
      params = params.set('price', filters.price);
    }
    if (filters.categoryId) {
      params = params.set('categoryId', filters.categoryId);
    }

    return this.httpClient.get<Product[]>(`${baserUrl}/products`, { params });
  }
}
