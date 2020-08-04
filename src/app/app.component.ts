import { Component } from '@angular/core';

import { ShellService } from './shell/shell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private shellService: ShellService) { }

  title = 'angular-microfrontend-poc';

  ngOnInit() {
    this.shellService.init({
        initialRoute: '/home',
        outletId: 'content',
        preload: true,
        clients: {
          "project-a": {
            loaded: false,
            src: 'assets/projects/client-a/main.js',
            element: 'client-a',
            route: '/client-a'
          }
        }
    });
  }
}
