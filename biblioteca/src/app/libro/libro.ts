import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

interface Libro {
id:number;
nombre:string;
autor:string;
}

@Component({
  imports: [FormsModule],
  selector: 'app-libro',
  styleUrl: './libro.css',
  templateUrl: './libro.html',
})

export class LibroComponent {
  libros: Libro[]=[];

nombre = '';
autor = '';
indiceEditar = -1;



constructor(private router: Router){
  if(localStorage.getItem('SesionBasica') !== 'si'){
    this.router.navigate(['/login']);
  }
  const datos = localStorage.getItem('librosBasico');
  if (datos !== null){
    this.libros = JSON.parse(datos)
  }
}

  cerrarSesion() {
    localStorage.removeItem('SesionBasica');
    this.router.navigate(['/login']);
    return;
  }

  guardar(){}

  editar(indice:number){
    this.indiceEditar = indice;
    this.nombre = this.libros[indice].nombre;
    this.nombre = this.libros[indice].autor;


  }

  eliminar(indice:number){}

  limpiar(){
    this.nombre = '';
    this.autor = '';
    this.indiceEditar = -1;


  }

  guardarLocalStorage(){
    localStorage.setItem('librosBasico', JSON.stringify(this.libros));
  }
}
