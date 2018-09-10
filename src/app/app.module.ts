import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SocialFooterComponent } from './social-footer/social-footer.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing';
import { AuthGuard } from './app.auth-guard';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      HeaderComponent,
      PortfolioComponent,
      SocialFooterComponent,
      FooterComponent,
      AboutComponent,
      WorksComponent,
      ContactComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
