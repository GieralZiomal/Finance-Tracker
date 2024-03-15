from django.contrib import admin
from django.urls import path, include
from core import urls as core_urls
from . import views

urlpatterns = [
    path('get/', views.get_mod),
    path('login/', views.LoginView.as_view(), name='login'),
]