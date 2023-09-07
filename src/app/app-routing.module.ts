import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
// import { ExternalLinkComponent } from './external-link.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'external', component: ExternalLinkComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
