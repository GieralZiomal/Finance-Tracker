from django.db import models
from django.conf import settings
from datetime import datetime

# Create your models here.
class Modification(models.Model):
    WPLYWORWYDATEK = [

        ("Receipts","Receipts"),
        ("Expenses","Expenses"),

    ]
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,)
    typeofMod = models.CharField(choices=WPLYWORWYDATEK, max_length=8)
    name = models.CharField(max_length=50)
    amount = models.FloatField()
    dateofMod = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.name