import { Component, OnInit } from '@angular/core';
import { ShellService } from '../shell/shell.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html'
})

export class SidebarComponent implements OnInit {
    constructor(private shellService: ShellService) { }

    ngOnInit() { }

    navigate(url: string){
        this.shellService.navigate(url);
    }
}