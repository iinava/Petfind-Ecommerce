from django.contrib import admin

# Register your models here.
from .models import log,user,seller,pet,booking,Payment
admin.site.register(log)
admin.site.register(user)
admin.site.register(seller)
admin.site.register(pet)
admin.site.register(booking)
admin.site.register(Payment)








