from django.shortcuts import render
from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'pages/home.html'

# Create your views here.
