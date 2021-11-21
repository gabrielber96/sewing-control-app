import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
/* import { environment } from 'src/environments/environment';
 */

// import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root',
})
export class RolService {
  private _us_er_ro_l: string = null;
  private _us_er_id: number = null;
  private _u_s_e_r_d_a_t_a: any = null;
  constructor(private _router: Router, private http: HttpClient) {}

  getId() {
    return this._us_er_id;
  }

  setId(id: number) {
    this._us_er_id = id;
  }

  getR() {
    return this._us_er_ro_l;
  }

  setR(rol: string) {
    this._us_er_ro_l = rol;
  }
  getData() {
    return this._u_s_e_r_d_a_t_a;
  }
  setData(data: any) {
    this._u_s_e_r_d_a_t_a = data;
    /*     this.asignarEstiloLog();
     */
  }

  /*   noPermission() {
    this.notifierService.systemNotify({
      title: "Info",
      message: "No tiene permisos para realizar esta acción.",
      type: "info",
    });
  }
 */
  /*   cerrarSesion() {
    this._logout.Logout().subscribe();
    localStorage.removeItem("jwt");
    localStorage.removeItem("nombreCompleto");
    localStorage.clear();
    // this.cookieService.delete('jwt');
    this._router.navigate(["/login"]);
  } */
  //estilos works
  /*   asignarEstiloLog() {
    localStorage.setItem("us_st", this._u_s_e_r_d_a_t_a.nightmode);
    if ("" + this._u_s_e_r_d_a_t_a.nightmode == "false") {
      this._sStyle.setStyle(Style.default);
    } else if ("" + this._u_s_e_r_d_a_t_a.nightmode == "true") {
      this._sStyle.setStyle(Style.dark);
    }
  } */
  /*   asignarEstiloLS() {
    let estilo = localStorage.getItem("us_st");
    if (estilo) {
      if (estilo == "false") {
        this._sStyle.setStyle(Style.default);
      } else if (estilo == "true") {
        this._sStyle.setStyle(Style.dark);
      }
    } else {
      this._sStyle.setStyle(Style.default);
    }
  }
 */
  toggleModeLS() {
    // localStorage.setItem("us_st", mode);
    // let t = Boolean(localStorage.getItem("us_st"));
    let boolValue =
      localStorage.getItem('us_st').toLowerCase() == 'true' ? true : false;
    localStorage.setItem('us_st', `${!boolValue}`);
  }

  /* changeStyleMode() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    headers = headers.set('Authorization', 'Basic ' + localStorage.getItem('jwt'));
    return this.http.put<any>(
      Constants.URL_BACKEND + `/users/nightmode`,
      {},
      {
        headers: headers,
      }
    );
  } */
}
