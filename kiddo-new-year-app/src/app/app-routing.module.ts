import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** =============== user-defined components  =============== */
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WishComponent } from './components/wish/wish.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'new-year-wishes',
    component: WishComponent
  },
  {
    path: 'audio-player',
    component: AudioPlayerComponent
  },
  {
    path: 'gratitude',
    component: GratitudeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
