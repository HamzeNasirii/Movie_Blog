# Generated by Django 4.1 on 2022-08-15 13:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('director', models.CharField(max_length=200)),
                ('imdb', models.DecimalField(decimal_places=1, max_digits=2)),
                ('writer', models.CharField(max_length=200)),
                ('actors', models.CharField(max_length=200)),
                ('country', models.CharField(max_length=200)),
                ('language', models.CharField(max_length=200)),
                ('ages', models.PositiveIntegerField(max_length=2)),
                ('time', models.PositiveIntegerField(max_length=3)),
                ('quality', models.CharField(choices=[('480p', 'bluray 480p'), ('720p', 'bluray 720p'), ('1080p', 'bluray 1080p'), ('480p', 'web_dl 480p'), ('720p', 'web_dl 720p'), ('1080p', 'web_dl 1080p')], max_length=100)),
                ('cover', models.ImageField(upload_to='cover/')),
                ('description', models.TextField()),
                ('datetime_created', models.DateTimeField(auto_now_add=True)),
                ('datetime_modify', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
