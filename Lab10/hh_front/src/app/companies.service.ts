import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from './company';
import { Observable } from 'rxjs';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  url = 'http://127.0.0.1:8000/api/'

  constructor(private httpClient: HttpClient) { }

  getAllCompanies():Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.url}companies/`);
  }
  getCompany(id: number):Observable<Company> {
    return this.httpClient.get<Company>(`${this.url}companies/${id}/`);
  }
  getCompanyVacancies(id: number):Observable<Vacancy[]> {
    return this.httpClient.get<Vacancy[]>(`${this.url}companies/${id}/vacancies/`);
  }
}
