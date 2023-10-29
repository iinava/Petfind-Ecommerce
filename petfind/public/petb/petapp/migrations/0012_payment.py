# Generated by Django 4.2.3 on 2023-10-24 04:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("petapp", "0011_pet_quantity_booking"),
    ]

    operations = [
        migrations.CreateModel(
            name="Payment",
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
                ("amount", models.CharField(max_length=30, null=True)),
                ("paymentdate", models.CharField(max_length=100)),
                (
                    "paymentstatus",
                    models.CharField(blank=True, max_length=100, null=True),
                ),
                (
                    "bookingid",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="petapp.booking"
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