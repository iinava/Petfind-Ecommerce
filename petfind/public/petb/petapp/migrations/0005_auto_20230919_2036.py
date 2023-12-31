# Generated by Django 3.2.18 on 2023-09-19 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petapp', '0004_auto_20230919_1419'),
    ]

    operations = [
        migrations.RenameField(
            model_name='log',
            old_name='email',
            new_name='uname',
        ),
        migrations.AddField(
            model_name='seller',
            name='uname',
            field=models.CharField(default=0, max_length=30, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='uname',
            field=models.CharField(default=1, max_length=30, unique=True),
            preserve_default=False,
        ),
    ]
