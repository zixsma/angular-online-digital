import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-digital';

  getHtml(): string {
    return "<h1>bla bla</h1>"
  }
}
