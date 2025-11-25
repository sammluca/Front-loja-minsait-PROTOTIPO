import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  imports: [CommonModule, ProductCard]
})
export class ProductList {
  products = [
    {
      nome: 'Camiseta Preta',
      descricao: 'Camiseta de algodão 100%.',
      preco: 49.9,
      desconto: 10,
      estoque: 100,
      imagem: '/tshirt.jpg'
    },
    {
      nome: 'Tênis Esportivo',
      descricao: 'Tênis leve para corrida e treino.',
      preco: 349.9,
      desconto: 15,
      estoque: 42,
      imagem: '/shoes.jpg'
    },
    {
      nome: 'Headphone',
      descricao: 'Fone com cancelamento de ruído.',
      preco: 299.9,
      desconto: 5,
      estoque: 0,
      imagem: '/headphones.jpg'
    }
  ];
}
