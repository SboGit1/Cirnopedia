import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MashComponent } from './mash/mash.component';
import { NavigatebarComponent } from './navigatebar/navigatebar.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
        {
          path: 'sign-up',
          component: SignUpComponent
        },
        {
          path: 'mash',
          component: MashComponent
        },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
