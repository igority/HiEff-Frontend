import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: '../app/main/main.module#MainModule'
  },
  {
    path: 'alarms',
    loadChildren: '../app/alarms/alarms.module#AlarmsModule'
  },
  {
    path: 'log',
    loadChildren: '../app/log/log.module#LogModule'
  },
  {
    path: 'settings',
    loadChildren: '../app/settings/settings.module#SettingsModule'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
