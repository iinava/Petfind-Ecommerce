# Generated by Django 3.2.18 on 2023-09-20 12:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('petapp', '0005_auto_20230919_2036'),
    ]

    operations = [
        migrations.CreateModel(
            name='pet',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30, null=True)),
                ('breed', models.CharField(max_length=30, null=True)),
                ('age', models.CharField(max_length=30, null=True)),
                ('cost', models.CharField(max_length=30, null=True)),
                ('image', models.CharField(max_length=30, null=True)),
                ('desciptiion', models.CharField(max_length=120, null=True)),
            ],
        ),
    ]