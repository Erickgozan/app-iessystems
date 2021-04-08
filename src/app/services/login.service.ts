import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../entities/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public _usuario: Usuario;

  constructor(private http: HttpClient) { }


  public login(usuario: Usuario): Observable<any> {
    const urlEndpoint = "http://ies-webcontent.com.mx/xccm/user/validarUsuario";
    return this.http.post(urlEndpoint,usuario);
  }

  //Obtener el usuario desde el sessionStorage
  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this._usuario;
    }
    return new Usuario();
  }


  public guardarUsuario(data:any): void {
    this._usuario = new Usuario();
    this._usuario.role = data.resultado.desc_rol;
    this._usuario.exito = data.resultado.exito;
    this._usuario.id_rol = data.resultado.id_rol;

    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));

  }


  public hasRole(role:string):boolean{
    if (this.usuario.role.includes(role)) {
      return true
    }
   
    return false;

  }

  public isAuthenticated(): boolean {
    let payload = this.usuario;

    if (payload != null && payload.role && payload.role.length > 0) {
      return true;
    }
    return false;
  }
  

  public logout() {
    this._usuario = null;
    sessionStorage.clear();
  }

}
