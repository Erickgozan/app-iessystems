import { Component, OnInit } from '@angular/core';
import { Campos } from 'src/app/entities/campos';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {

  public array1: Array<Campos>=
  [{ value: 1, name: 'CampoUno' },
  { value: 2, name: 'CampoDos' },
  { value: 3, name: 'CampoTres' },
  { value: 4, name: 'CampoCuatro' },
  { value: 5, name: 'CampoCinco' },
  { value: 6, name: 'CampoSeis' }];

  public array2: Array<Campos>=
  [
    { value: 21, name: 'a' },
    { value: 20, name: 'b' },
    { value: 19, name: 'c' },
    { value: 18, name: 'd' },
    { value: 17, name: 'e' },
    { value: 16, name: 'f' },];

    public miArray:Array<Campos>;

  constructor() {}

  ngOnInit(): void {
  }

  public metodo(array:Campos[]): void {

      if(this.array2){
        this.miArray = array;
      }else{
        this.miArray = array;
      }  
  }



}
