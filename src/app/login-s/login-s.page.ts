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
    dni: ['', [Validators.required]],
    password: ['', [Validators.required]],
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
        async (response: any) => {
          const toast = await this.toastController.create({
            message: 'Bievenido, :)',
            duration: 4000,
          });
          toast.present();
          this.form.reset();

          this.router.navigateByUrl('/dashboard/tabs/tab2');

          localStorage.setItem('system_token', response['jwt']);
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
