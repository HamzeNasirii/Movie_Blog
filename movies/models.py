from django.db import models
from django.contrib.auth import get_user_model


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


QUALITY = (
    ('480p', 'bluray 480p'),
    ('720p', 'bluray 720p'),
    ('1080p', 'bluray 1080p'),
    ('480p', 'web_dl 480p'),
    ('720p', 'web_dl 720p'),
    ('1080p', 'web_dl 1080p'),


)


class Movie(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    genre = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='genre', blank=False)
    director = models.CharField(max_length=200)
    imdb = models.DecimalField(max_digits=2, decimal_places=1)
    writer = models.CharField(max_length=200)
    actors = models.CharField(max_length=200)
    country = models.CharField(max_length=200)
    language = models.CharField(max_length=200)
    ages = models.PositiveIntegerField()
    time = models.PositiveIntegerField()
    quality = models.CharField(choices=QUALITY, max_length=100)
    cover = models.ImageField(upload_to='cover/')
    description = models.TextField()

    datetime_created = models.DateTimeField(auto_now_add=True)
    datetime_modify = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
