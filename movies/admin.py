from django.contrib import admin
from .models import Category, Movie

admin.site.register(Category)


class AdminMovie(admin.ModelAdmin):
    list_display = ('title', 'director',)


admin.site.register(Movie)
