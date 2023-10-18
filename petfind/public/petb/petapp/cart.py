from datetime import date

class bookingAPIView(GenericAPIView):
    serializer_class = bookingserializer

    def post(self, request):
        

        
        user = request.data.get('userid')
        seller=request.data.get("sellerid")
        product=request.data.get('petid')
        booking_date = date.today()
        print(product)
        quty = request.data.get('quantity')
        bkquantity=int(quty)
        bookingstatus="0"
        
        bookings = booking.objects.filter(userid=user, petid=product)
        if bookings.exists():
            return Response({'message':'Item is already in cart','success':False}, status=status.HTTP_400_BAD_REQUEST)

        else:
            data=pet.objects.all().filter(id=product).values()
            for i in data:
                print(i)
                name=i['name']
                age=i['age']
                breed=i['breed']
                cost=i['cost']
                description=i['description']


            petdata=pet.objects.get(id=product)
            quant=petdata.quantity
            petcount=int(quant)


            petdata.quantity=petcount-bkquantity
            petdata.save()


            data2=user.objects.all().filter(id=user).values()
            for i in data:
                print(i)
                username=i['uname']
            data3=seller.objects.all().filter(id=seller).values()
            for i in data:
                print(i)
                sellername=i['uname']




            peto = pet.objects.get(id=product)
            pet_image = peto.image
            print( pet_image)
                

    
            serializer = self.serializer_class(data= {'username':username,'sellername':sellername,'sellerid':seller,'userid':user,'petid':product,'quantity':quantity,'cost':cost,'name':name,'age':age,'image':product_image,'breed':breed,'booking_date':booking_date,'description':description})
            print(serializer)
            if serializer.is_valid():
                print("hi")
                serializer.save()
                return Response({'data':serializer.data,'message':'cart added successfully', 'success':True}, status = status.HTTP_201_CREATED)