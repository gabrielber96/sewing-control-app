import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {
    this.obtenerNombreUsuario();
    this.obtenerFotoUsuario();
    this.obtenerSexouser();
  }

  fechaDeIngreso;
  dataUser;

  nombreUsuario = '';
  sexo = '';
  userMgmt: any = {};
  userAvatar: any = {};
  fotoUsuario = '';

  obtenerNombreUsuario() {
    if (localStorage.getItem('sexo')) {
      this.sexo = localStorage.getItem('sexo');
    } else {
      this.sexo = this.userMgmt.sexo;
      localStorage.setItem('sexo', this.nombreUsuario);
    }
  }

  obtenerSexouser() {
    if (localStorage.getItem('nombreCompleto')) {
      this.nombreUsuario = localStorage.getItem('nombreCompleto');
    } else {
      this.nombreUsuario = this.userMgmt.name + ' ' + this.userMgmt.lastname;
      localStorage.setItem('nombreCompleto', this.nombreUsuario);
    }
  }

  obtenerFotoUsuario() {
    if (localStorage.getItem('fotoUsuario')) {
      this.fotoUsuario = localStorage.getItem('fotoUsuario');
    } else {
      this.fotoUsuario = this.userAvatar.path;
      localStorage.setItem('fotoUsuario', this.fotoUsuario);
    }
  }
}
