import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavigatebarComponent } from './navigatebar/navigatebar.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: NavigatebarComponent,
    children: [
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'profile',
          component: ProfileComponent
        },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
