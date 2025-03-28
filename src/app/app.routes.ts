import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'education', component: EducationComponent},
    { path: 'experience', component: WorkExperienceComponent},
    { path: '**', redirectTo: '' }
];
