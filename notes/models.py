from django.db import models

# Create your models here.
class Note(models.Model):
    title = models.Charfield(max_length=150)
    