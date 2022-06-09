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
        title: 'Atomic Habits',
        author: 'James Clear',
        description:
          "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
        imgUrl:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg',
        quantity: 500,
        price: 11.98,
      },
      {
        id: 2,
        title: 'The Pragmatic Programmer',
        author: 'David Thomas, Andrew Hunt',
        description:
          'Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way.',
        imgUrl:
          'https://images-na.ssl-images-amazon.com/images/I/518FqJvR9aL._SX382_BO1,204,203,200_.jpg',
        quantity: 146,
        price: 38.99,
      },
      {
        id: 3,
        title: 'Clean Code',
        author: 'Martin Robert C.',
        description:
          'Dave Thomas and Andy Hunt wrote the first edition of this influential book in 1999 to help their clients create better software and rediscover the joy of coding. These lessons have helped a generation of programmers examine the very essence of software development, independent of any particular language, framework, or methodology, and the Pragmatic philosophy has spawned hundreds of books, screencasts, and audio books, as well as thousands of careers and success stories.',
        imgUrl:
          'https://images-na.ssl-images-amazon.com/images/I/41SH-SvWPxL._SX376_BO1,204,203,200_.jpg',
        quantity: 453,
        price: 30.18,
      },
      {
        id: 4,
        title: 'Cracking the PM Interview',
        author: 'Gayle Laakmann McDowell',
        description:
          'How many pizzas are delivered in Manhattan? How do you design an alarm clock for the blind? What is your favorite piece of software and why? How would you launch a video rental service in India? This book will teach you how to answer these questions and more.',
        imgUrl:
          'https://m.media-amazon.com/images/P/B00ISYMUR6.01._SCLZZZZZZZ_SX500_.jpg',
        quantity: 124,
        price: 37.18,
      },
      {
        id: 5,
        title: 'The 5 AM Club',
        author: 'Robin S. Sharma',
        description:
          'Legendary leadership and elite performance expert Robin Sharma introduced The 5am Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity.',
        imgUrl:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545910967l/37502596._SY475_.jpg',
        quantity: 124,
        price: 24.38,
      },
      {
        id: 6,
        title: 'The 7 Habits of Highly Effective People',
        author: 'Stephen R. Covey',
        description:
          'When Stephen Covey first released The Seven Habits of Highly Effective People, the book became an instant rage because people suddenly got up and took notice that their lives were headed off in the wrong direction; and more than that, they realized that there were so many simple things they could do in order to navigate their life correctly. This book was wonderful education for people, education in how to live life effectively and get closer to the ideal of being a ‘success’ in life.',
        imgUrl:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421842784l/36072.jpg',
        quantity: 524,
        price: 22.38,
      },
      {
        id: 7,
        title: 'The Power of Habit',
        author: 'Charles Duhigg',
        description:
          'A young woman walks into a laboratory. Over the past two years, she has transformed almost every aspect of her life. She has quit smoking, run a marathon, and been promoted at work. The patterns inside her brain, neurologists discover, have fundamentally changed.',
        imgUrl:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545854312l/12609433._SY475_.jpg',
        quantity: 345,
        price: 54.34,
      },
      {
        id: 8,
        title: 'Deep Work',
        author: 'Cal Newport',
        description:
          "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time. Deep work will make you better at what you do and provide the sense of true fulfillment that comes from craftsmanship. In short, deep work is like a super power in our increasingly competitive twenty-first century economy. And yet, most people have lost the ability to go deep-spending their days instead in a frantic blur of e-mail and social media, not even realizing there's a better way.",
        imgUrl:
          'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1447957962l/25744928._SY475_.jpg',
        quantity: 231,
        price: 28.45,
      }
    ];

    return { products };
  }
}
