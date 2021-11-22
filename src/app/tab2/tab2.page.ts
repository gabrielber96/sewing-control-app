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

  fetchData2 = [
    { name: 'Test 2', link: '' },

    { name: 'Test 1', link: '' },
    { name: 'Test 3', link: '' },

    { name: 'Test 4', link: '' },
  ];
  ngOnInit(): void {}
}
