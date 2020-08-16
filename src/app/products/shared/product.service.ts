import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fs: AngularFirestore) { }

  getTopProducts(amount: number): Observable<Product[]> {
    return this.fs
    .collection<Product>('top-products', ref => ref.limit(amount))
    .valueChanges();
  }
}
