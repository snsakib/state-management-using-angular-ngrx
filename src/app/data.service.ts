import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let products: any = [
      {
        id: 1,
        title: 'The Angular Masterclass',
        author: 'Educative',
        description: 'Learn all about Angular',
        imgUrl: '../assets/img/the-angular-masterclass.jpg',
        quantity: 124,
        price: 24.38,
        cart: 0,
      },
      {
        id: 2,
        title: 'The Ultimate Guide to Redux',
        author: 'Educative',
        description: 'Learn about Redux',
        imgUrl: '../assets/img/the-ultimate-guide-to-redux.jpg',
        quantity: 524,
        price: 22.38,
        cart: 0,
      },
      {
        id: 3,
        title: 'Developing Mobile Apps with Ionic and Angular',
        author: 'Educative',
        description: 'Learn how to build mobile apps with Ionic and Angular',
        imgUrl:
          '../assets/img/developing-mobile-apps-with-ionic-and-angular.jpg',
        quantity: 146,
        price: 38.99,
        cart: 0,
      },
      {
        id: 4,
        title: 'Angular: Designing and Architecting Web Applications',
        author: 'Educative',
        description: 'Design and architect your web applications using Angular',
        imgUrl:
          '../assets/img/angular-designing-and-architecting-web-applications.jpg',
        quantity: 500,
        price: 11.98,
        cart: 0,
      },
      {
        id: 5,
        title: 'Developing Robust Angular Applications with AuthO and MongoDB',
        author: 'Educative',
        description:
          'Implement authentication using Angular, AuthO and MongoDB',
        imgUrl:
          '../assets/img/developing-robust-angular-applications-with-auth0-and-mongodb.jpg',
        quantity: 453,
        price: 30.18,
        cart: 0,
      },
      {
        id: 6,
        title: 'Full Reactive Stack with Spring Boot 2 and Spring WebFlux',
        author: 'Educative',
        description: 'Learn about Spring Boot 2 and Spring WebFlux',
        imgUrl:
          '../assets/img/full-reactive-stack-with-spring-boot-2-and-spring-webflux.jpg',
        quantity: 124,
        price: 37.18,
        cart: 0,
      },
    ];

    let shoppingCart: any = [];

    return { products, shoppingCart };
  }
}
