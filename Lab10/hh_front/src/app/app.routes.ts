import { Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'companies',
        pathMatch: 'full',
    },
    {
        path:'companies',
        component: CompaniesComponent,
        title:'Companies Page',
    },
    {
        path:'companies/:id/vacancies',
        component: VacanciesComponent,
        title:'Vacancies Page',
    }
];
