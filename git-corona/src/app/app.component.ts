import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1 class="heading">Number of cases</h1>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor() {}
}
