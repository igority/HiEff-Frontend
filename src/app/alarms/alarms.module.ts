import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmsRoutingModule } from './alarms-routing.module';
import { AlarmsComponent } from './alarms/alarms.component';

@NgModule({
  imports: [
    CommonModule,
    AlarmsRoutingModule
  ],
  declarations: [AlarmsComponent]
})
export class AlarmsModule { }
