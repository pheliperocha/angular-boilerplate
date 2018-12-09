import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) { }

  request() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').toPromise().then();
  }

}
