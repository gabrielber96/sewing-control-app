import { Component } from '@angular/core';
import { RolService } from '../service/rol.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private _sRol: RolService) {
    this.userRol = this._sRol.getR();
    console.log(this.userRol, 'obteniendo numero en compoennte 2');
  }
  userRol;
  fetchData2;

  ngOnInit(): void {
    if (this.userRol == 1) {
      this.fetchData2 = [
        { name: 'Empleados', ico: '', link: 'session-admin' },
        { name: 'Pagos', ico: '', link: '' },
        { name: 'Metricas', ico: '', link: '' },
      ];
    }
    if (this.userRol == 2) {
      this.fetchData2 = [
        { name: 'Inventario', ico: '', link: '' },

        { name: 'Gestion de tareas', ico: '', link: '' },
      ];
    }
    if (this.userRol == 3) {
      this.fetchData2 = [
        { name: 'Validación de tareas', ico: '', link: '' },
        { name: 'Reporte de tareas', ico: '', link: '' },
      ];
    }
    if (this.userRol == 4) {
      this.fetchData2 = [
        { name: 'Inventario', ico: '', link: '' },
        { name: 'Gestion de tareas', ico: '', link: '' },
        { name: 'Validación de tareas', ico: '', link: '' },
        { name: 'Reporte de tareas', ico: '', link: '' },
      ];
    }
    if (this.userRol == 5) {
      this.fetchData2 = [
        { name: 'Tareas', ico: '', link: '' },
        { name: 'Tareas completadas', ico: '', link: '' },
      ];
    }
  }
}
