from django.http import JsonResponse
from django.shortcuts import render
from api.models import Product, Category

def get_product_list(request):
    products = Product.objects.all()
    products_json = [product.to_json() for product in products]
    return JsonResponse(products_json, safe=False)

def get_product(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product.to_json(), safe=False)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def get_category_list(request):
    categories = Category.objects.all()
    categories_json = [category.to_json() for category in categories]
    return JsonResponse(categories_json, safe=False)

def get_category(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category.to_json(), safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def get_product_list_by_category(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        products_json = [p.to_json() for p in products]
        return JsonResponse(products_json, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
