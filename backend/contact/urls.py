from django.urls import path
from .views import ContactView, SubscribeView

urlpatterns = [
    path('contact/', ContactView.as_view()),
    path('subscribe/', SubscribeView.as_view()),
]
