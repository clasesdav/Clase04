import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-cardproducto',
  standalone: false,
  templateUrl: './cardproducto.component.html',
  styleUrl: './cardproducto.component.css'
})
export class CardproductoComponent implements OnInit {
  producto:Producto=new Producto();

  constructor(
    private activatedRoute:ActivatedRoute
    ,private productosService:ProductosService
  ){  }

  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id')||'0';
    this.producto=this.productosService.getProducto(parseInt(id));
    console.log(this.producto);

  }

}
