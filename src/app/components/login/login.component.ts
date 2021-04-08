import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entities/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formRegistro = false;
  public formPassword = false;

  public usuario:Usuario;

  public valido:boolean = false;

  constructor(private loginService:LoginService,
    private router:Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }


  public login(usuario:Usuario):void{

    this.loginService.login(usuario).subscribe(
      data=>{
        if(data.resultado==null){
          this.valido = false;
        }else{
          
          this.loginService.guardarUsuario(data);

          if(this.loginService.usuario.role!="DISTRIBUIDOR"){
            console.log("no esta autorizado");
            this.router.navigate(["/login"])
          console.log(data);
          }else{
            this.router.navigate(["/componente-uno"])
          console.log(data);
          }
          
        }   
      }
    );
    
  }

}
