import { Component } from '@angular/core';
import { RolService } from './service/rol.service';
import { ServiciosGenerales } from './service/servicios-generales.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private _sRol: RolService, private _service: ServiciosGenerales) {
    if (localStorage.getItem('system_token')) {
      this._sRol.setR(localStorage.getItem('sub_rol_id'));

      localStorage.getItem('sub_rol_id');
      console.log(localStorage.getItem('sub_rol_id'));
    } else {
      /*        this._sRol.cerrarSesion();
       */
    }
  }
}
