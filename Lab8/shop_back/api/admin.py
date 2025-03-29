from django.contrib import admin

from api.models import Category, Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'description', 'count', 'is_active', 'category')
    search_fields = ('name', 'price')

admin.site.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')