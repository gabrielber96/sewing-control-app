import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ServiciosGenerales } from '../service/servicios-generales.service';

@Component({
  selector: 'app-login-s',
  templateUrl: './login-s.page.html',
  styleUrls: ['./login-s.page.scss'],
})
export class LoginSPage implements OnInit {
  constructor(
    public router: Router,
    private fb: FormBuilder,
    public loadingController: LoadingController,
    public toastController: ToastController,

    private _serviceG: ServiciosGenerales
  ) {}

  form: FormGroup = this.fb.group({
    dni: ['75652678', [Validators.required]],
    password: ['1234578', [Validators.required]],
    /*  password: ['', [Validators.required]], */
  });

  ngOnInit() {}

  async presentLoading(message: string = 'Verificando.....') {
    if (this.form !== null) {
      const loading = await this.loadingController.create({
        cssClass: '',
        message,
      });
      await loading.present();
      return loading;
    }
  }

  async entraDashboard() {
    const loading = await this.presentLoading();

    /*     this.router.navigate(['dashboard/tabs/tab2']);
     */
    this._serviceG
      .loginNormal(this.form.get('dni').value, this.form.get('password').value)
      .subscribe(
        async (userResponse: any) => {
          const toast = await this.toastController.create({
            message: 'Bievenido, ten un buen día',
            duration: 2000,
          });
          toast.present();
          this.form.reset();

          this.router.navigateByUrl('/dashboard/tabs/tab2');

          localStorage.setItem('system_token', userResponse['jwt']);
          localStorage.setItem(
            'nombreCompleto',
            (userResponse.name !== null ? userResponse.name : '') +
              ' ' +
              (userResponse.lastname !== null ? userResponse.lastname : '')
          );
          localStorage.setItem('fotoUsuario', userResponse.path);
          localStorage.setItem('cumpleaños', userResponse.date);
          localStorage.setItem('sexo', userResponse.sexo);
          localStorage.setItem('rol_id', userResponse.rol_id);
          localStorage.setItem('sub_rol_id', userResponse.sub_rol_id);

          loading.dismiss();
        },

        async (error) => {
          const toast = await this.toastController.create({
            message: error.error.errors[0].msg,
            duration: 3000,
          });
          toast.present();
          loading.dismiss();
          /*           console.log(error.error.errors[0].msg);
           */
        }
      );
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
