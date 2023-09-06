import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ExternalLinkComponent } from './external-link.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'external', component: ExternalLinkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
