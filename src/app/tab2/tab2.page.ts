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
      direccion:
        'Blvd. Adolfo López Mateos 2463, Las Fuentes, 81223 Los Mochis, Sin.',
      telefono: '668-812-2426',
      lat: 25.814926573657242,
      lng: -108.97690280505894,
      imagen:
        'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-10.414608473547744&panoid=snN8Rc9UXbCj-4P9fW577Q&yaw=125.57288761880184',
    },
    {
      id: 2,
      nombre: 'El Carrizo',
      direccion:
        'Presa Ocoroni y Río Tamazula 210 Sur, Villa, 81343 Gustavo Díaz Ordaz, Sin.',
      telefono: '668-865-0580',
      lat: 26.26765451293984,
      lng: -109.03789179524172,
      imagen:
        'https://lh3.googleusercontent.com/p/AF1QipNiui7UAUJ_MF-EUYIGwztIxFbM0cLdR9XHlg7D=s680-w680-h510-rw',
    },
    {
      id: 3,
      nombre: 'Guasave',
      direccion:
        '81000 Blvd. 16 de septiembre, Agustina Ramírez y, 81030 Guasave, Sin.',
      telefono: '687-872-2384',
      lat: 25.577006942328232,
      lng: -108.46341400090388,
      imagen:
        'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=5.903256304208924&panoid=T11h8ut26F9Q0G0RBjtwBA&yaw=72.17193226978364',
    },
    {
      id: 4,
      nombre: 'Juan José Rios',
      direccion:
        'Calle Cero, entre Jambiola y Papariqui, Juan José Ríos, 81015 Juan José Ríos, Sin.',
      telefono: '687-896-1235',
      lat: 25.759603954203026,
      lng: -108.81330643596284,
      imagen:
        'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?cb_client=maps_sv.tactile&w=900&h=600&pitch=-1.9892413928543533&panoid=diF6NxZbC3t9Io2yfCdgtA&yaw=12.582147252101418',
    },
    {
      id: 5,
      nombre: 'Guamuchil',
      direccion:
        'Nicolás Bravo y, Salvador Alvarado s/n, Zona Centro, 81400 Guamúchil, Sin.Calle Real 789',
      telefono: '673-732-1313',
      lat: 25.460275275479763,
      lng: -108.07746013677846,
      imagen:
        'https://lh3.googleusercontent.com/p/AF1QipNoIDA7qtR-MzTjZJYIfxbl8Vu-1voLldNuciIv=w114-h86-k-no',
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

  getMapaUrl(sucursal: any): SafeResourceUrl {
    if (!sucursal || !sucursal.direccion) return '';
  
    const url = `https://maps.google.com/maps?q=${encodeURIComponent(sucursal.direccion)}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  
  
}
