from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100)
    image = ProcessedImageField(
        upload_to='product_images/',
        processors=[ResizeToFill(640, 640)],
        format='JPEG',
        options={'quality': 40}
    )

    def __str__(self):
        return self.name
