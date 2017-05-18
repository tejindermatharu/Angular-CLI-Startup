import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './features/nav/nav.component';

import { PingModule } from './features/ping/ping.module';

@NgModule({

    imports: [BrowserModule, AppRoutingModule, HttpModule, PingModule],
    declarations: [AppComponent,
        NavComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

