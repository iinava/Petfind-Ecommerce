# Generated by Django 3.2.18 on 2023-09-19 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petapp', '0003_log_role_user_pin_seller'),
    ]

    operations = [
        migrations.AddField(
            model_name='seller',
            name='sellerstatus',
            field=models.CharField(max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='userstatus',
            field=models.CharField(max_length=150, null=True),
        ),
    ]