import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})

export class LoginComponent {
usuario = '';
clave = ''; 

constructor(private router: Router){}


iniciarSesion() { 
if(this.usuario === 'admin' && this.clave === '123'){
localStorage.setItem('SesionBasica', 'si');
this.router.navigate(['/libro']);
return;
}else{
alert('Credenciales Incorrectas');
return;
}
}
}
