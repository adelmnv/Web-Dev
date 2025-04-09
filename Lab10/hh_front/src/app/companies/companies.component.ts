import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Company } from '../company';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-companies',
  imports: [RouterLink, CommonModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})
export class CompaniesComponent {
  companies: Company[] = [];
  loaded: boolean = false;

  constructor(private companiesService: CompaniesService) {}

  ngOnInit() {
    this.loaded = false;
    this.companiesService.getAllCompanies().subscribe((data) => {
      this.companies = data;
      this.loaded = true;
    });
  }

}
