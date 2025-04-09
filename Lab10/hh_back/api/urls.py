from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:company_id>/', views.company_detail),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.VacancyListView.as_view()),
    path('vacancies/<int:vacancy_id>/', views.VacancyDetailView.as_view()),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]