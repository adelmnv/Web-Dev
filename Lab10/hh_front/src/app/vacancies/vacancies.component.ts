import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { Vacancy } from '../vacancy';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancies',
  imports: [CommonModule],
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})
export class VacanciesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  vacancies: Vacancy[] = [];
  loaded: boolean = false;
  company_name: string = '';

  constructor(private companiesService: CompaniesService) {}

  ngOnInit(): void {
    this.loaded = false;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companiesService.getCompanyVacancies(id).subscribe((vacancies) => {
      this.vacancies = vacancies;
      this.loaded = true;
    });
    this.companiesService.getCompany(id).subscribe((company) => {
      this.company_name = company.name;
    });
  }

}
