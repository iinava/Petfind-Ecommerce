from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .models import log,user,seller,pet,booking,Payment
from petapp.serializers import userserializer,logserializer,sellerserializer,petserializer,bookingserializer,paymentserializer
from django.conf import settings
from .Sendmail import sendmail
from datetime import date
# Create your views here.


class userregister(GenericAPIView):
    serializer_class=userserializer
    serializer_class_login=logserializer
    # sSerializer
    def post(self,request):
        login_id=''
        email=request.data.get("email")
        name=request.data.get("name")
        uname=request.data.get("uname")
        phone=request.data.get("phone")
        adress=request.data.get("adress")
        pin=request.data.get("pin")
        password=request.data.get("password")
        role="user"
        userstatus='0'
        # role=request.data.get("role")


        # userstatus="1"
        
        if(log.objects.filter(uname=uname)):
            return Response({'message':'Duplicate username found'},status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'uname':uname,'password':password,'role':role})    
            # ,'role':role}
        if serializer_login.is_valid():
            Log=serializer_login.save()
            login_id=Log.id
            print(login_id)    
        serializer=self.serializer_class(
            data={
                'name':name,
                'uname':uname,
                
                'email':email,
                'phone':phone,
                'adress':adress,
                'pin':pin,
                'userstatus':userstatus,

             
                'login':login_id,


            }
        )
        print(serializer)
        # sendmail(email,"user")
        if serializer.is_valid():
            print('hi')
            serializer.save()
            return Response({'data':serializer.data,'message':"  user Registration succesful","sucess":True},status=status.HTTP_201_CREATED)
        return Response({'data': serializer.errors, 'message': ' user  Registarion failed', 'success': False}, status= status.HTTP_400_BAD_REQUEST)

# -----------------------------------------------------------------------------------------------------


class sellerregister(GenericAPIView):
    serializer_class=sellerserializer
    serializer_class_login=logserializer
    # sSerializer
    def post(self,request):
        login_id=''
        email=request.data.get("email")
        name=request.data.get("name")
        uname=request.data.get("uname")
        phone=request.data.get("phone")
        shop=request.data.get("shop")
        pin=request.data.get("pin")
        password=request.data.get("password")
        role='seller'
        adress=request.data.get("adress")
        sellerstatus='0'
        # role=request.data.get("role")


        userstatus="1"
        
        if(log.objects.filter(uname=uname)):
            return Response({'message':'Duplicate username found'},status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'uname':uname,'password':password,'role':role})    
            # ,'role':role}
        if serializer_login.is_valid():
            Log=serializer_login.save()
            login_id=Log.id
            print(login_id)    
        serializer=self.serializer_class(
            data={
                'name':name,
                'uname':uname,
                
                'email':email,
                'phone':phone,
                'shop':shop,
                'adress':adress,
                'pin':pin,
                'sellerstatus':sellerstatus,

             
                'login':login_id,


            }
        )
        print(serializer)
        # sendmail(email,"Seller")
        if serializer.is_valid():
            print('hi')
            serializer.save()
            return Response({'data':serializer.data,'message':" seller Registration succesful","sucess":True},status=status.HTTP_201_CREATED)
        return Response({'data': serializer.errors, 'message': ' seller Registarion failed', 'success': False}, status= status.HTTP_400_BAD_REQUEST)


# ---------------------------------------------------------------------------------------------------------

class updateseller(GenericAPIView):
    serializer_class=sellerserializer
    def post(self,request,id):
        queryset=seller.objects.get(pk=id)
        print(queryset)
        serializer=sellerserializer(instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():



            serializer.save()
            return Response({'data':serializer.data,'message':' seller details updated succesfulluyy','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','sucess':False},status=status.HTTP_400_BAD_REQUEST)

# ---------------------------------------------------------------------------------------------------------------------------------


class updateuser(GenericAPIView):
    serializer_class=userserializer
    def post(self,request,id):
        queryset=user.objects.get(pk=id)
        print(queryset)
        serializer=userserializer(instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():



            serializer.save()
            return Response({'data':serializer.data,'message':'updated succesfulluyy','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','sucess':False},status=status.HTTP_400_BAD_REQUEST)


# __________________________________________________________________________user forgot____________________________________________
# class userforgot(GenericAPIView):
#     serializer_class=logserializer
#     def post(self,request,id):


#         queryset=log.objects.get(pk=id)
#         print(queryset)
#         serializer=logserializer(instance=queryset,data=request.data,partial=True)
#         print(serializer)
#         if serializer.is_valid():



#             serializer.save()
#             return Response({'data':serializer.data,'message':'updated succesfulluyy','success':True},status=status.HTTP_200_OK)
#         else:
#             return Response({'data':'something went wrong','sucess':False},status=status.HTTP_400_BAD_REQUEST)




# ------------------------------------------------------------------------------------------------------------------

class LoginAPIView(GenericAPIView):
    serializer_class = logserializer
    def post (self,request):
        u_id= ''
        uname = request.data.get('uname')
        password = request.data.get('password')

        print(uname)
        print(password)
        logreg=log.objects.filter(uname=uname,password=password)
        #print(logreg)
        #print(logreg.count)
        if(logreg.count()>0):
            read_serializer = logserializer(logreg, many=True)
            for i in read_serializer.data:
                id=i['id']
                role=i['role']
                uname=i['uname']

                print(id)
                print(role)
                regdata = user.objects.all().filter(login= id).values()
                print(regdata)
 
                for i in regdata:
                    u_id = i['id']
                    name = i['name']
                    uname=i['uname']
                    phone=i['phone']
                    adress=i['adress']
                    shop=''

                    # l_status=i['userstatus']
                    print(u_id)
                    # --------------------------------------------------------------
                sellreg = seller.objects.all().filter(login= id).values()
                print(sellreg)
 
                for i in sellreg:
                    u_id = i['id']
                    name = i['name']
                    uname=i['uname']
                    adress=i['adress']
                    shop=i['shop']

                    # l_status=i['userstatus']
                    print(u_id)
                #   -----------------------------------------------------------------
            return Response({
                'data':{
                    
                    'login_id':id,
                    'role':role,
                    'name':name,
                    'uname':uname,
                    'shop':shop,
                    'adress':adress,
                    'password':password,


                    'userid':u_id
                }
            })

        else:
            return Response({
                'message':'username is invalid',
                'success':'false'
            },status=status.HTTP_400_BAD_REQUEST)          
# ======================================================================admin==============================================

# --------------------------------------------------------------------------viewing--------------------------------------------------

class allsellerview(GenericAPIView):
    serializer_class=sellerserializer
    def get(self,request):
        queryset=seller.objects.all()
        if(queryset.count()>0):
            serializer=sellerserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all seller data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    
# ____________________________________________________________________________________________________________
class alluserview(GenericAPIView):
    serializer_class=userserializer
    def get(self,request):
        queryset=user.objects.all()
        if(queryset.count()>0):
            serializer=userserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all user data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    









# ================================================================pet========================================================
# ================================================================pet========================================================




class addpet(GenericAPIView):
    serializer_class=petserializer


    def post(self,request):
        name=request.data.get("name")
        species=request.data.get("species")
        breed=request.data.get("breed")
        cost=request.data.get("cost")
        age=request.data.get("age")
        quantity=request.data.get("quantity")
        image=request.data.get("image")
        description=request.data.get("description")
        sellerid=request.data.get('sellerid')
        petstatus="0"



        serializer=self.serializer_class(data={'name':name, 'species':species,'breed':breed,'cost':cost,'quantity':quantity,'age':age,'image':image,'description':description,'sellerid':sellerid})
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'pet was added susccesfully','success':'1'},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'adding pet was failed','success':'0'},status=status.HTTP_400_BAD_REQUEST)            


# ---------------------------------------------------------------------------------------------------------------------
class updatepet(GenericAPIView):
    serializer_class=petserializer
    def post(self,request,id):
        queryset=pet.objects.get(pk=id)
        print(queryset)
        serializer=petserializer(instance=queryset,data=request.data,partial=True)
        print(serializer)
        if serializer.is_valid():



            serializer.save()
            return Response({'data':serializer.data,'message':'updated succesfulluyy','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','sucess':False},status=status.HTTP_400_BAD_REQUEST)




# --------------------------------------------------------------------------------view---------------------------------------

class allpetview(GenericAPIView):
    serializer_class=petserializer
    def get(self,request):
        queryset=pet.objects.all()
        if(queryset.count()>0):
            serializer=petserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all pet data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    
# ------------------------------------------------------------------------------------------------------------------



class singlepetview(GenericAPIView):
    def get(self,request,id):
        queryset=pet.objects.get(pk=id)
        serializer=petserializer(queryset)
        return Response({'data':serializer.data,'messgae':'single pet view','success':True},status=status.HTTP_200_OK)


# -----------------------seller prof view-----------------------------------
class singlesellerview(GenericAPIView):
    def get(self,request,id):
        queryset=seller.objects.get(pk=id)
        serializer=sellerserializer(queryset)
        return Response({'data':serializer.data,'messgae':'single seller view','success':True},status=status.HTTP_200_OK)

        # ____________________________________________________single user ceiw__
class singleuserview(GenericAPIView):
    def get(self,request,id):
        queryset=user.objects.get(pk=id)
        serializer=userserializer(queryset)
        return Response({'data':serializer.data,'messgae':'single user view','success':True},status=status.HTTP_200_OK)





# --------------------------------------------------------------------seller viewing pet-------------------------------------------------------


class sellerpetview(GenericAPIView):
    serializer_class=petserializer
    def get(self,request,id):
        queryset=pet.objects.filter(sellerid=id).values()
        for obj in queryset:
            
            obj['image'] = settings.MEDIA_URL + str(obj['image'])
        return Response({'data':queryset,'message':'all pet data  set' ,'success':1},status=status.HTTP_200_OK)
       



# ______________________________________________________________________________________________________________


class deletepet(GenericAPIView):

    def delete(self,request,id):
        deletesh=pet.objects.get(pk=id)
        deletesh.delete()
        return Response({'message':'Deleted suscesfully','sucess':True},status=status.HTTP_200_OK)




#------------------------------------------------------------------------------------------------------------------------



class petsearch(GenericAPIView):
    def post(self,request):
        query=request.data.get('query')
        print(query)
        i= pet.objects.filter(breed__icontains=query).values()
        # for data in i :
        #     print(data)

        # data=[{'name':info.name,'breed':breed,'age':age,'cost':cost,'image':image,'description':description}
        
        print(i)
        #          for info in i]            
        return Response({'data':i,'messgae':'successfully fetched ','success':True},status=status.HTTP_200_OK)



# _______________________________________________-api demo-forget-password-__________________________________   




# ____________________________________________________________booking of the petesh____________________________________


class bookingAPIView(GenericAPIView):
    serializer_class = bookingserializer

    def post(self, request):
        

        
        userid = request.data.get('userid')
        sellerid=request.data.get("sellerid")
        product=request.data.get('petid')
        booking_date = str(date.today())
        print(product)
        quty = request.data.get('quantity')
        bkquantity=int(quty)
        bookingstatus="0"
        
        bookings = booking.objects.filter(userid=userid, petid=product)
        if bookings.exists():
            return Response({'message':'Item is already in cart','success':False}, status=status.HTTP_400_BAD_REQUEST)

        else:
            data=pet.objects.all().filter(id=product).values()
            for i in data:
                # print(i)
                name=i['name']
                age=i['age']
                breed=i['breed']
                cost=i['cost']
                description=i['description']


            petdata=pet.objects.get(id=product)
            quant=petdata.quantity
            petcount=int(quant)
            if petcount <= 0:
                 return Response({'message':'item  is out  of stock','success':False}, status=status.HTTP_400_BAD_REQUEST)

            else:



                petdata.quantity=petcount-bkquantity
                petdata.save()


                data2=user.objects.all().filter(id=userid).values()
                for i in data2:
                    print(i)
                    username=i['uname']
                    uadress=i['adress']
                data3=seller.objects.all().filter(id=sellerid).values()
                for i in data3:
                    print(i)
                    sellername=i['uname']
                    




                peto = pet.objects.get(id=product)
                pet_image =peto.image
                print(pet_image)
                    


                serializer = self.serializer_class(data= {'username':username,'sellername':sellername,'adress':uadress,'sellerid':sellerid,'userid':userid,'petid':product,'quantity':bkquantity,'cost':cost,'name':name,'age':age,'image':pet_image,'breed':breed,'booking_date':booking_date,'description':description,'bookingstatus':bookingstatus})
                print(serializer)
                
                if serializer.is_valid():
                    print("hi")
                    serializer.save()
                    return Response({'data':serializer.data,'message':'booking added successfully', 'success':True}, status = status.HTTP_201_CREATED)

                return Response({'data':serializer.errors,'message':'Invalid','success':False}, status=status.HTTP_400_BAD_REQUEST)





# _____________________buyer viewing  pending orders_____________________________________


            
class buyerviewbookingpending(GenericAPIView):
    serializer_class=bookingserializer
    def get(self,request,id):
        queryset=booking.objects.filter(userid=id,bookingstatus=0).values()
        for obj in queryset:
            
            obj['image'] = settings.MEDIA_URL + str(obj['image'])
        return Response({'data':queryset,'message':'all pet booking  set' ,'success':1},status=status.HTTP_200_OK)
# _____________________buyer viewing  accepted  orders_____________________________________

class buyerviewbooking(GenericAPIView):
    serializer_class=bookingserializer
    def get(self,request,id):
        queryset=booking.objects.filter(userid=id,bookingstatus=1).values()
        for obj in queryset:
            
            obj['image'] = settings.MEDIA_URL + str(obj['image'])
        return Response({'data':queryset,'message':'all pet booking  set' ,'success':1},status=status.HTTP_200_OK)
# ____________________________________________________singlebookingview___________________________
class buyerviewsinglebooking(GenericAPIView):
    def get(self,request,id):
        queryset=booking.objects.get(pk=id)
        serializer=bookingserializer(queryset)
        return Response({'data':serializer.data,'messgae':'single booking view','success':True},status=status.HTTP_200_OK)

  
       
# __________________________________________________________________seller viewing bookings_______________________________
class sellerviewbooking(GenericAPIView):
    serializer_class=bookingserializer
    def get(self,request,id):
        queryset=booking.objects.filter(sellerid=id,bookingstatus=0).values()
        for obj in queryset:
            
            obj['image'] = settings.MEDIA_URL + str(obj['image'])
        return Response({'data':queryset,'message':'all pet booking  set' ,'success':1},status=status.HTTP_200_OK)




 # _________________________delete booking_____________________________


class deletebooking(GenericAPIView):


    def delete(self,request,id):
        deletesh=booking.objects.get(pk=id)
        deletesh.delete()
        return Response({'message':'Deleted suscesfully','sucess':True},status=status.HTTP_200_OK)
       
# ________________________________________accepting order___________________________


class SellerApprove_orderAPIView(GenericAPIView):
    def post(self, request, id):
        serializer_class = bookingserializer
        book = booking.objects.get(pk=id)
        book.bookingstatus = 1
        book.save()
        serializer = serializer_class(book)
        return Response({'data':serializer.data,'message':'seller Approved order', 'success':True}, status=status.HTTP_200_OK)

        # __________________________________payment___________________________________________

        
class paymentapi(GenericAPIView):
    serializer_class = paymentserializer

    def post(self, request):
        

        
        userid = request.data.get('userid')
        sellerid=request.data.get("sellerid")
        bookingid=request.data.get('bookingid')
        amount=request.data.get('amount')
        paymentdate=str(date.today())
        paymentstatus="0"
        payments = Payment.objects.filter(userid=userid, bookingid=bookingid)
        if payments.exists():
            return Response({'message':'Aldready paid','success':False}, status=status.HTTP_400_BAD_REQUEST)

        else:


            data2=user.objects.all().filter(id=userid).values()

            for i in data2:
                
                print(i)
                username=i['uname']

            data4=booking.objects.all().filter(id=bookingid).values()

            for i in data4:
                
                print(i)
                petname=i['name']
                quantity=i['quantity']
                breed=i['breed']
            data3=seller.objects.all().filter(id=sellerid).values()
            for i in data3:
                print(i)
                sellername=i['uname']


            book = booking.objects.get(pk=bookingid)
            book.bookingstatus = 2
            book.save()



            serializer = self.serializer_class(data= {'username':username,'sellername':sellername,'sellerid':sellerid,'userid':userid,'bookingid':bookingid,'amount':amount,'paymentdate':paymentdate,'paymentstatus':paymentstatus,'petname':petname,'quantity':quantity,'breed':breed})
            print(serializer)
                    
            if serializer.is_valid():
                print("This payment is working")
                serializer.save()
                return Response({'data':serializer.data,'message':'payment  added successfully', 'success':True}, status = status.HTTP_201_CREATED)

            return Response({'data':serializer.errors,'message':'Invalid','success':False}, status=status.HTTP_400_BAD_REQUEST)
                



# __________________________seller view payments_______________________________________________________________
class sellerviewpayment(GenericAPIView):
    serializer_class=paymentserializer
    def get(self,request,id):
        queryset=Payment.objects.filter(sellerid=id).values()
        return Response({'data':queryset,'message':'all pet booking  set' ,'success':1},status=status.HTTP_200_OK)

class adminviewpayments(GenericAPIView):
    serializer_class=paymentserializer
    def get(self,request):
    
        queryset=Payment.objects.all()
        
        if(queryset.count()>0):
            serializer=paymentserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all payment data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    