from django.contrib import admin
from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    

    # -------------------------------userandseller-----------------------------------
    path('userregister', views.userregister.as_view(), name='userregister'),
    path('sellerregister', views.sellerregister.as_view(), name='sellerregister'),
    path('LoginAPIView', views.LoginAPIView.as_view(), name='LoginAPIView'),
    path('updateuser/<int:id>', views.updateuser.as_view(), name='updateuser'),
    path('updateseller/<int:id>', views.updateseller.as_view(), name='updateseller'),
    path('singlesellerview/<int:id>', views.singlesellerview.as_view(), name='singlesellerview'),
    path('singleuserview/<int:id>', views.singleuserview.as_view(), name='singleuserview'),
    # path('userforgot/<int:id>', views.userforgot.as_view(), name='userforgot'),
    
    path('sellerpetview/<int:id>', views.sellerpetview.as_view(), name='sellerpetview'),
    path('petsearch', views.petsearch.as_view(), name='petsearch'),
    # path('otpsending', views.otpsending.as_view(), name='otpsending'),
    # ------------------------------------------------------------------------------

    # -------------------------------------pet-----------------------------------------
  
    path('addpet', views.addpet.as_view(), name='addpet'),
    path('allpetview', views.allpetview.as_view(), name='allpetview'),
    path('singlepetview/<int:id>', views.singlepetview.as_view(), name='singlepetview'),
    path('deletepet/<int:id>', views.deletepet.as_view(), name='deletepet'),
    path('updatepet/<int:id>', views.updatepet.as_view(), name='updatepet'),
    # ----------------------------------------------------------------------------------


    # --------------------------------------------------admin-----------------------------------------
    path('allsellerview', views.allsellerview.as_view(), name='allsellerview'),
    path('alluserview', views.alluserview.as_view(), name='alluserview'),
    path('adminviewpayments', views.adminviewpayments.as_view(), name='adminviewpayments'),



# __________________________________________booking table_________________________________________



    path('bookingAPIView', views.bookingAPIView.as_view(), name='bookingAPIView'),
    path('buyerviewbooking/<int:id>', views.buyerviewbooking.as_view(), name='buyerviewbooking'),
    path('buyerviewsinglebooking/<int:id>', views.buyerviewsinglebooking.as_view(), name='buyerviewsinglebooking'),
    path('buyerviewbookingpending/<int:id>', views.buyerviewbookingpending.as_view(), name='buyerviewbookingpending'),
    path('sellerviewbooking/<int:id>', views.sellerviewbooking.as_view(), name='sellerviewbooking'),
    path('deletebooking/<int:id>', views.deletebooking.as_view(), name='deletebooking'),
    path('SellerApprove_orderAPIView/<int:id>', views.SellerApprove_orderAPIView.as_view(), name='SellerApprove_orderAPIView'),
    

    # ____________________________payment table_________________________________

 path('paymentapi', views.paymentapi.as_view(), name='paymentapi'),
 path('sellerviewpayment/<int:id>', views.sellerviewpayment.as_view(), name='sellerviewpayment'),
    

]
