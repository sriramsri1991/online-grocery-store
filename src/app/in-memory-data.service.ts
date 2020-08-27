import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Products} from './products/products';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(): Products[] {
    const products = [
      {
        id: 1001,
        name: 'Mango',
        imagePath: '/../../assets/Mango.jpg',
        description: 'Sweet Mangoes from Coutrallam',
        longDescription: 'It is a juicy and fibrous fruit, with a stone inside. Its size oscillates between 5-20 cm long, weighing between 300-400 g, although some of them may get to weigh one kilo. Mango is also known as "tropical peach\' for its orange colour and pleasant taste. The most trustworthy sign of its maturation is its smell',
        price: 300,
        quantity: 1
      },
      {
        id: 1002,
        name: 'Apple',
        imagePath: '/../../assets/Apple.jpg',
        description: 'Apples from Indian Himalayan',
        longDescription: 'The apple is a pome (fleshy) fruit, in which the ripened ovary and surrounding tissue both become fleshy and edible. ... When harvested, apples are usually roundish, 5–10 cm (2–4 inches) in diameter, and some shade of red, green, or yellow in colour; they vary in size, shape, and acidity depending on the variety',
        price: 400,
        quantity: 1
      },
      {
        id: 1003,
        name: 'Grapes',
        imagePath: '/../../assets/Grapes.jpg',
        description: 'Grapes from Ooty',
        longDescription: 'Grapes are fleshy, rounded fruits that grow in clusters made up of many fruits of greenish, yellowish or purple skin. The pulp is juicy and sweet, and it contain several seeds or pips. It is a well-known fruit; it is eaten raw, although it is mainly used for making wine',
        price: 150,
        quantity: 1
      },
      {
        id: 1004,
        name: 'Banana',
        imagePath: '/../../assets/Banana.jpg',
        description: 'Naturally Riped Banana from Kerala',
        longDescription: 'The banana is a lengthy yellow fruit, found in the market in groups of three to twenty fruits, similar to a triangular cucumber, oblong and normally yellow. Its flavour is more or less sweet, depending on the variety. Nutrition and eating. The banana is rich in fibre, potassium and some beneficial vitamins for health',
        price: 150,
        quantity: 1
      },
      {
        id: 1005,
        name: 'Wheat Flour',
        imagePath: '/../../assets/Wheat.jpeg',
        description: 'Wheat Flour from Aashirvaadh',
        longDescription: 'Wheat flour is a powder made from the grinding of wheat used for human consumption. Wheat varieties are called "soft" or "weak" if gluten content is low, and are called "hard" or "strong" if they have high gluten content. ... Germ flour is made from the endosperm and germ, excluding the bran',
        price: 200,
        quantity: 1
      }
    ];
    return {products};
  }
}
