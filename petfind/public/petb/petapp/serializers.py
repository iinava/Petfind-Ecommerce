from rest_framework import serializers
from .models import user,log,seller,pet,booking



class userserializer(serializers.ModelSerializer):
    class Meta:
        model=user
        fields='__all__'
    def Create (self,validated_data):
        return user.objects.Create(**validated_data)

class sellerserializer(serializers.ModelSerializer):
    class Meta:
        model=seller
        fields='__all__'
    def Create (self,validated_data):
        return seller.objects.Create(**validated_data)
        

class logserializer(serializers.ModelSerializer):
    class Meta:
        model=log
        fields='__all__'
    def Create (self,validated_data):
        return log.objects.Create(**validated_data)                

class petserializer(serializers.ModelSerializer):
    class Meta:
        model=pet
        fields='__all__'
    def Create (self,validated_data):
        return pet.objects.create(**validated_data)          

        # ________________________________________________booking inte serializer___________________


class bookingserializer(serializers.ModelSerializer):
    class Meta:
        model=booking
        fields='__all__'
    def Create (self,validated_data):
        return booking.objects.create(**validated_data)                