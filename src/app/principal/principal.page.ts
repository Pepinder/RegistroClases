import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  usuario: string = "";
  contrasena: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
    // Tu código de inicialización aquí
    let parametros = this.router.getCurrentNavigation();
    if (parametros?.extras.state) {
      this.usuario = parametros?.extras.state['user'];
      this.contrasena = parametros?.extras.state['pass'];
    }
  }

  volver() {
    let parametros: NavigationExtras = {
      state: {
        user: this.usuario,
        pass: this.contrasena
      },
      replaceUrl: true
    };
    this.router.navigate(['login'], parametros);
  }

  scannerResult: string = '';

  onCodeResult(result: string) {
    this.scannerResult = result;

    const navigationExtras: NavigationExtras = {
      state: {
        user: this.usuario,
        pass: this.contrasena,
        qrData: this.scannerResult
      }
    };

    this.router.navigate(['clase'], navigationExtras);
  }
}
