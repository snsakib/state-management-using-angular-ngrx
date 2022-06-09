import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let products: Product[] = [
      {
        id: 1,
        title: 'Product Title',
        description: 'Insurance policy number PO1',
        imgUrl: 'https://snsakib.com',
        price: 1000,
        quantity: 50,
      },
      {
        id: 2,
        title: 'Product Title',
        description: 'Insurance policy number PO2',
        imgUrl: 'https://snsakib.com',
        price: 2000,
        quantity: 50,
      },
      {
        id: 3,
        title: 'Product Title',
        description: 'Insurance policy number PO3',
        imgUrl: 'https://snsakib.com',
        price: 3000,
        quantity: 50,
      },
      {
        id: 4,
        title: 'Product Title',
        description: 'Insurance policy number PO4',
        imgUrl: 'https://snsakib.com',
        price: 4000,
        quantity: 50,
      },
    ];

    return { products };
  }
}
