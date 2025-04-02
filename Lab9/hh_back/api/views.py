from django.http import JsonResponse
from django.shortcuts import render
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer

def company_list(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe = False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id = company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": {str(e)}}, status=404)
    serializer = CompanySerializer(company)
    return JsonResponse(serializer.data, safe = False)

def company_vacancies(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error": {str(e)}}, status=404)
    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many = True)
    return JsonResponse(serializer.data, safe = False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error": {str(e)}}, status=404)
    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data, safe = False)

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)