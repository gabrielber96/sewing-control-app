import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  fetchData2 = [
    { name: 'Test 2', link: '' },

    { name: 'Test 1', link: '' },
    { name: 'Test 3', link: '' },

    { name: 'Test 4', link: '' },
  ];
  ngOnInit(): void {
    console.log(this.fetchData2);
  }
}
