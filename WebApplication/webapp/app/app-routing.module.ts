import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PingComponent } from './features/ping/components/ping.component';

const routes: Routes = [
    { path: 'ping', component: PingComponent },
    { path: '', redirectTo: 'ping', pathMatch: 'full' },
    { path: '**', redirectTo: 'ping', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }