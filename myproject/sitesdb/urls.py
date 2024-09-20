from . import views
from django.urls import path
from .views import home, user_login, user_logout, user_profile, user_register, product_detail

urlpatterns = [
    path('home', home, name='home'),
    path('', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('profile/', user_profile, name='profile'),
    path('register/', user_register, name='register'),
    path('product/<int:pk>/', views.product_detail, name='product_detail'),
]