# Generated by Django 4.2.3 on 2023-10-24 15:03

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("petapp", "0013_pet_adress"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="pet",
            name="adress",
        ),
        migrations.AddField(
            model_name="booking",
            name="adress",
            field=models.CharField(max_length=30, null=True),
        ),
    ]
