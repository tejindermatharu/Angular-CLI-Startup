import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { PingComponent } from './components/ping.component';
import { PingService } from './services/ping.service';

@NgModule({
    imports: [FormsModule, BrowserModule],
    declarations: [PingComponent],
    providers: [PingService]
})
export class PingModule { }