from django.urls import path
from . import views

urlpatterns = [

    path('', views.Productos.as_view()),
    path('<int:pk>/', views.ProductoDetail.as_view()),
]
