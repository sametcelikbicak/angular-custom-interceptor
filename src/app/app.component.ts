import { Component, VERSION } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = `Angular ${VERSION.major} Custom Interceptor Usage`;
  public customData: string;

  constructor(private httpService: HttpService) {}

  public getCustomData(): void {
    this.httpService
      .makeGetRequest('https://my-json-server.typicode.com/typicode/demo/posts')
      .subscribe(response => (this.customData = JSON.stringify(response)));
  }
}
