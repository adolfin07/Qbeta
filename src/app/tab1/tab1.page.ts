import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {
  constructor() {}

  ngOnInit() {}
  slideOpts = {
    slidesPerView: 2.5,
    spaceBetween: 10,
    freeMode: true
  };
  
  
  productsRow1 = [
    { name: 'Trigo', image: '../../assets/Products/products-row1/product1-r1.png' },
    { name: 'Trigo', image: '../../assets/Products/products-row1/product1-r1.png' },
    { name: 'Trigo', image: '../../assets/Products/products-row1/product1-r1.png' },
    { name: 'Trigo', image: '../../assets/Products/products-row1/product1-r1.png' },
    // ...
  ];
  
  productsRow2 = [
    { name: 'Carrito C', image: 'https://via.placeholder.com/100' },
    // ...
  ];
  
  productsRow3 = [
    { name: 'Carrito D', image: 'https://via.placeholder.com/100' },
    // ...
  ];
  
}
