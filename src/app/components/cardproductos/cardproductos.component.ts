import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardproductos',
  standalone: false,
  templateUrl: './cardproductos.component.html',
  styleUrl: './cardproductos.component.css'
})
export class CardproductosComponent implements OnInit {

  productos:Producto[]=[];
  constructor(private productoService:ProductosService
    ,private router:Router
  )
  {}

  ngOnInit(): void {
    this.productos=this.productoService.getProductos();
    console.log(this.productos);
    
  }

  verProducto(id:number){
    this.router.navigate(['/producto',id])
  }

}
