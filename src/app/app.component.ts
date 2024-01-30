import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/structure/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/structure/footer/footer.component';
import { Section5Component } from './components/section5/section5.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { OurServicesComponent } from './components/ourservices/ourservices.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    HeroComponent, 
    OurServicesComponent,
    TestimonialsComponent, 
    PricingComponent, 
    Section5Component,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularLandingTemplate';
}
