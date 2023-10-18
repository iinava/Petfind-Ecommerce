from django.db import models
class log(models.Model):
    uname=models.CharField(max_length=30,unique=True)
    
    password=models.CharField(max_length=30,unique=True)
    role=models.CharField(max_length=30,null=True)

  

    def __str__(self):
        return self.uname

class user(models.Model):
    name=models.CharField(max_length=30,null=True)
    uname=models.CharField(max_length=30,unique=True)

    email=models.CharField(max_length=30,null=True)
    phone=models.CharField(max_length=30,null=True)
    adress=models.CharField(max_length=150,null=True)
    pin=models.CharField(max_length=150,null=True)
    userstatus=models.CharField(max_length=150,null=True)
    
    


 
    login=models.ForeignKey(log, on_delete=models.CASCADE)
    def __str__(self):
        return self.name


class seller(models.Model):
    email=models.CharField(max_length=30,null=True)
    name=models.CharField(max_length=30,null=True)
    uname=models.CharField(max_length=30,unique=True)

    phone=models.CharField(max_length=30,null=True)
    shop=models.CharField(max_length=30,null=True)
    pin=models.CharField(max_length=30,null=True)
    sellerstatus=models.CharField(max_length=30,null=True)
    # password=models.CharField(max_length=30,null=True)

    adress=models.CharField(max_length=150,null=True)
    


 
    login=models.ForeignKey(log, on_delete=models.CASCADE)
    def __str__(self):
        return self.shop


# ------------------------------------------pet ------------------------        
class pet(models.Model):
    name=models.CharField(max_length=30,null=True)
    breed=models.CharField(max_length=30,null=True)
    age=models.CharField(max_length=30,null=True)
    cost=models.CharField(max_length=30,null=True)
    quantity=models.CharField(max_length=30,null=True)

    image=models.ImageField(upload_to="images",null=True,blank=True)
    description=models.CharField(max_length=120,null=True)
    sellerid=models.ForeignKey(seller, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
# ________________________________________________booking  pet_________________________________

class booking(models.Model):
    userid =models.ForeignKey(user,on_delete=models.CASCADE)
    petid=models.ForeignKey(pet,on_delete=models.CASCADE)
    sellerid=models.ForeignKey(seller,on_delete=models.CASCADE)
    # -------
    username=models.CharField(max_length=30,null=True)
    sellername=models.CharField(max_length=30,null=True)
    # ------
    name=models.CharField(max_length=30,null=True)
    breed=models.CharField(max_length=30,null=True)
    age=models.CharField(max_length=30,null=True)
    cost=models.CharField(max_length=30,null=True)
    image=models.ImageField(upload_to="images",null=True,blank=True)
    description=models.CharField(max_length=120,null=True)
    quantity=models.CharField(max_length=30,null=True)
    booking_date = models.CharField(max_length=100)  
    bookingstatus=models.CharField(max_length=100,null=True,blank=True)


    def __str__(self):
        return self.username

