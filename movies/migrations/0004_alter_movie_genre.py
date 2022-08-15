# Generated by Django 4.1 on 2022-08-15 13:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0003_movie_genre_alter_movie_ages_alter_movie_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='genre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='genre', to='movies.category'),
        ),
    ]
