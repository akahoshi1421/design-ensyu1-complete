from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("building", views.building, name="building"),
    path("foods", views.foods, name="foods"),
    path("welcome", views.welcome, name="welcome"),
]
