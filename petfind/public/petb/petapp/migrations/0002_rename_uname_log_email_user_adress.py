# Generated by Django 4.2.3 on 2023-09-13 03:56

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("petapp", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="log",
            old_name="uname",
            new_name="email",
        ),
        migrations.AddField(
            model_name="user",
            name="adress",
            field=models.CharField(max_length=150, null=True),
        ),
    ]
