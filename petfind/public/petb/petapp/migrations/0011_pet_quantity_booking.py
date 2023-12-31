# Generated by Django 4.2.3 on 2023-10-13 04:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("petapp", "0010_alter_pet_image"),
    ]

    operations = [
        migrations.AddField(
            model_name="pet",
            name="quantity",
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.CreateModel(
            name="booking",
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
                ("username", models.CharField(max_length=30, null=True)),
                ("sellername", models.CharField(max_length=30, null=True)),
                ("name", models.CharField(max_length=30, null=True)),
                ("breed", models.CharField(max_length=30, null=True)),
                ("age", models.CharField(max_length=30, null=True)),
                ("cost", models.CharField(max_length=30, null=True)),
                ("image", models.ImageField(blank=True, null=True, upload_to="images")),
                ("description", models.CharField(max_length=120, null=True)),
                ("quantity", models.CharField(max_length=30, null=True)),
                ("booking_date", models.CharField(max_length=100)),
                (
                    "bookingstatus",
                    models.CharField(blank=True, max_length=100, null=True),
                ),
                (
                    "petid",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="petapp.pet"
                    ),
                ),
                (
                    "sellerid",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="petapp.seller"
                    ),
                ),
                (
                    "userid",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="petapp.user"
                    ),
                ),
            ],
        ),
    ]
