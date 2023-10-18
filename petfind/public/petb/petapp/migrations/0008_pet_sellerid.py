# Generated by Django 4.2.3 on 2023-09-23 08:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("petapp", "0007_auto_20230920_1846"),
    ]

    operations = [
        migrations.AddField(
            model_name="pet",
            name="sellerid",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="petapp.seller",
            ),
            preserve_default=False,
        ),
    ]
