import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MatCardModule,
    HttpModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
