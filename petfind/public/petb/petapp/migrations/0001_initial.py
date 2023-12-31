# Generated by Django 4.2.3 on 2023-09-12 17:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="log",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("uname", models.CharField(max_length=30, unique=True)),
                ("password", models.CharField(max_length=30, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="user",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=30, null=True)),
                ("email", models.CharField(max_length=30, null=True)),
                ("phone", models.CharField(max_length=30, null=True)),
                (
                    "login",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="petapp.log"
                    ),
                ),
            ],
        ),
    ]
