# Generated by Django 5.0.6 on 2024-06-18 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sitesdb', '0002_alter_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='photos/%y/%m/%d'),
        ),
    ]
