import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from '../components/aboutme/aboutme.component';
import { MatrixComponent } from '../components/matrix/matrix.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ResumeComponent } from '../components/aboutme/resume/resume.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'matrix', component: MatrixComponent },
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
