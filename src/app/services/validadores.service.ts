import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor(control:FormControl) { }

  public fechaErronea(control:FormControl){

    let fecha1 = new Date(control.value);
    let fecha2 = new Date(control.value);
    
    let milisegundosDia = 24*60*60*1000;
    let milisegundosTranscurridos = Math.abs(fecha1.getTime()-fecha2.getTime());
    let diastrascurridos = Math.round(milisegundosTranscurridos/milisegundosDia);
    let mesesTrascurridos = Math.round(diastrascurridos/30);

    if(mesesTrascurridos>11){
      return { fechaErronea:true}    
    }
    return null;
  }
}
