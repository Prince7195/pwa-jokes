import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-jokes';

  update = false;
  joke: any;

  constructor(updates: SwUpdate, private data: DataService) {
    updates.activated.subscribe(event => {
      // this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res;
    });
  }
}
