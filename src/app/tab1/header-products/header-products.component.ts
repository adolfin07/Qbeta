// header-products.component.ts
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-header-products',
  templateUrl: './header-products.component.html',
  styleUrls: ['./header-products.component.scss'],
  standalone: false,
})
export class HeaderProductsComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    });
  }
}
