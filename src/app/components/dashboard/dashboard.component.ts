import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { PaisService } from 'src/app/services/pais.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

export class Pais {
  country: string;
  region: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public form: FormGroup;
  public hoy = new Date().getDate();

  public paises: Array<any>;
  public arregloPaises: Array<Pais>;

  constructor(public loginAuth: LoginService,
    private paisesService: PaisService,
    private fb: FormBuilder) {

    this.paises = new Array();
    this.arregloPaises = new Array();
  }

  ngOnInit(): void {
    this.crearFormulario()
    this.paisesService.paises().subscribe(data => {
      this.paises = data;

      for (let pais in this.paises) {
        this.arregloPaises.push(this.paises[pais]);

      }
    }
    );
  }

  public crearFormulario() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
      pais: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required]
    })
  }

  public get nombreInvalido(): boolean | undefined {
    return this.form.get('nombre').invalid && this.form.get('nombre').touched
  }

  public get emailInvalido(): boolean | undefined {
    return this.form.get('email').invalid && this.form.get('email').touched
  }
  public get paisInvalido(): boolean | undefined {
    return this.form.get('pais').invalid && this.form.get('pais').touched
  }

  public get fechaInicioInvalida(): boolean | undefined {
    return this.form.get('fechaInicio').invalid && this.form.get('fechaInicio').touched
  }

  public get fechaFinalInvalida(): boolean | undefined {
    return this.form.get('fechaFinal').invalid && this.form.get('fechaFinal').touched
  }

  public reserva(fechaInicio: string, fechaFinal: string) {

    let fecha1 = new Date(fechaInicio);
    let fecha2 = new Date(fechaFinal);
    let milisegundosDia = 24 * 60 * 60 * 1000;
    let milisegundosTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());
    let diastrascurridos = Math.round(milisegundosTranscurridos / milisegundosDia);
    let mesesTrascurridos = Math.round(diastrascurridos / 30);

    if (mesesTrascurridos > 11) {
      alert("La fecha es erronea");
      this.form.reset({
        fechaInicio: [''],
        fechaFinal: ['']
      });

    }
  }

  public guardar() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        control.markAllAsTouched();
      })
    } else {
      console.log(this.form.value);

    }
  }



}
 // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // }

/* let diaInicio = fecha1.getDate();
  let mesInicio = (fecha1.getMonth()+1);
  let anioInicio = fecha1.getFullYear();

  let diaFinal = fecha1.getDate();
  let mesFinal = (fecha1.getMonth()+1);
  let anioFinal = fecha1.getFullYear();

  let fechaIni = diaInicio+ ": " + mesInicio + ": "+ anioInicio;
  let fechaFin = diaInicio+ ": " + mesInicio + ": "+ anioInicio; */