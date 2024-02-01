import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from '../components/home/home.component';
// import { AboutmeComponent } from '../components/aboutme/aboutme.component';
// import { ProjectsComponent } from '../components/projects/projects.component';
// import { ContactComponent } from '../components/contact/contact.component';
// import { ResumeComponent } from '../components/aboutme/resume/resume.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'aboutme', component: AboutmeComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'resume', component: ResumeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
