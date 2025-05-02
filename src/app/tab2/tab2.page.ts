import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// Definición de la interfaz fuera de la clase
export interface Sucursal {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  lat: number;
  lng: number;
  imagen: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // Lista de sucursales
  sucursales: Sucursal[] = [
    {
      id: 1,
      nombre: 'Los Mochis',
      direccion: 'Av. Siempre Viva 123',
      telefono: '1234-5678',
      lat: 25.814926573657242,
      lng: -108.97690280505894,
      imagen:
        'https://lh3.googleusercontent.com/gps-proxy/ALd4DhGXEFuBKnNtBLpMAsYokA16m84MnXoIvfP04UifZTS7UcU4g8A8uTwkVjbfhndoeUgvdtz3HyMXbCUnZ-eUXPjY0qPIISRasRph1Ew2yLZthRMSSxWN8x-14jbX0sg4PxYTmXdmzqoryfmlLTJ6glKjB8N6vXuTE4GdlQXPQQg4u0SOsaedH-Ew4Cqe-0ZgSTyePg=w203-h152-k-no',
    },
    {
      id: 2,
      nombre: 'El Carrizo',
      direccion: 'Calle Falsa 456',
      telefono: '9876-5432',
      lat: -34.5997,
      lng: -58.3815,
      imagen: 'assets/img/sucursal2.jpg',
    },
    {
      id: 3,
      nombre: 'Guasave',
      direccion: 'Calle Real 789',
      telefono: '1122-3344',
      lat: -34.6083,
      lng: -58.3833,
      imagen: 'assets/img/sucursal3.jpg',
    },
    {
      id: 4,
      nombre: 'Juan José Rios',
      direccion: 'Calle Real 789',
      telefono: '1122-3344',
      lat: 25.759603954203026,
      lng: -108.81330643596284,
      imagen:
        'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-1.9892413928543533&panoid=diF6NxZbC3t9Io2yfCdgtA&yaw=12.582147252101418',
    },
    {
      id: 5,
      nombre: 'Guamuchil',
      direccion: 'Calle Real 789',
      telefono: '1122-3344',
      lat: -34.6083,
      lng: -58.3833,
      imagen: 'assets/img/sucursal3.jpg',
    },
  ];

  sucursalActiva: Sucursal = this.sucursales[0];

  constructor(private sanitizer: DomSanitizer) {}

  // Cambiar sucursal al hacer clic en los botones
  cambiarSucursal(direccion: number) {
    const currentIndex = this.sucursales.indexOf(this.sucursalActiva);
    let newIndex = currentIndex + direccion;

    // Controlar los límites del carrusel
    if (newIndex < 0) {
      newIndex = this.sucursales.length - 1;
    } else if (newIndex >= this.sucursales.length) {
      newIndex = 0;
    }

    this.sucursalActiva = this.sucursales[newIndex];
  }

  // Generar el URL del mapa de Google para la sucursal activa
  getMapaUrl(sucursal: Sucursal): SafeResourceUrl {
    const url = `https://www.google.com/maps?q=${sucursal.lat},${sucursal.lng}&hl=es&z=16&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
