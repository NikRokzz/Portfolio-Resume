import { Routes, RouterModule } from '@angular/router'
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './app.auth-guard';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'works', component: WorksComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PortfolioComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
