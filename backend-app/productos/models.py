from django.db import models

# Create your models here.
class Producto(models.Model):

    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=300)
    sku = models.CharField(max_length=10)

    def __str__(self):
        return self.nombre
