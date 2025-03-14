import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { 
    console.log('Servicio listo para usar!!!');
  }
  private productos:Producto[]=[
    {nombre:'audifonos',img:'./img/0.jpg',precio:10},
    {nombre:'Tenis',img:'./img/1.jpg',precio:2000},
    {nombre:'Reloj',img:'./img/2.jpg',precio:300},
  ];

  getProductos(): Producto[]
  {
    return this.productos;
  }
  getProducto(id:number){
    return this.productos[id];
  }

}
