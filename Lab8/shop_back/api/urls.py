from django.urls import path
from api import views


urlpatterns = [
    path("products/", views.get_product_list),
    path("products/<int:id>/", views.get_product),
    path("categories/", views.get_category_list),
    path("categories/<int:id>/", views.get_category),
    path("categories/<int:id>/products/", views.get_product_list_by_category)
]