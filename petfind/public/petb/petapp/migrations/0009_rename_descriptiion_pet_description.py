# Generated by Django 4.2.3 on 2023-09-23 09:09

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("petapp", "0008_pet_sellerid"),
    ]

    operations = [
        migrations.RenameField(
            model_name="pet",
            old_name="descriptiion",
            new_name="description",
        ),
    ]
