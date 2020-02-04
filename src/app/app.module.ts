import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { SliderComponent } from './components/slider/slider.component';
import { QualifiersComponent } from './components/qualifiers/qualifiers.component';
import { OffersComponent } from './components/offers/offers.component';
import { AboutComponent } from './components/about/about.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { VioletComponent } from './components/violet/violet.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { PricingComponent } from './components/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    SliderComponent,
    QualifiersComponent,
    OffersComponent,
    AboutComponent,
    ProgramsComponent,
    TestimoniosComponent,
    TeachersComponent,
    VioletComponent,
    QuestionsComponent,
    BlogsComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
