from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    city = models.CharField(max_length=255)
    address = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'
    
    def __str__(self):
        return f"{self.id} - {self.name}"


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')  # Added related_name

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f"{self.name} - {self.salary}"