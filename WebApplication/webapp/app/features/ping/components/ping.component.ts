import { Component, OnInit } from '@angular/core';

import { PingService } from '../services/ping.service';

@Component({
    selector: 'ping-component',
    templateUrl: './ping.component.html'
})
export class PingComponent implements OnInit {

    public pingMessage: string;
    public pingMessageUsingAsyncPipe: any;
    public hello: string;

    constructor(public pingService: PingService) {
    }

    public ngOnInit(): void {

        this.hello = 'Welcome to the ping controller';

        //using an observable
        this.pingService.ping() 
            .subscribe((data: any) => this.pingMessage = data);

        //using an observable with async pipe
        this.pingMessageUsingAsyncPipe= this.pingService.ping();
    }

}