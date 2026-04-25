from django.urls import path
from . import views
from django.conf import settings

urlpatterns = [
    # path('upload/', upload_image),
    path('register/', views.register_user),
    path('verify/', views.login_user),
    path("create-order/", views.create_order),
    path("verifys/", views.verify_payment),
    path("contact/", views.contact_api),
    path("add_college/", views.add_college),
    path("allcolleges/", views.get_all_colleges),
    path("submit/", views.submit_application),
    path("applications/", views.get_applications),
    path('application/<int:id>/status/', views.get_app_status),
    path("application-status/", views.get_application_status),
    path("send-notification/", views.send_notification),
    path('update-status/', views.update_status),
    path('application/<int:id>/update-status/', views.update_status),
    path("add_certificate/", views.add_certificate),
    path("colleges/<int:pk>/certificates/", views.get_college_certificates),
    path("certificates/<int:id>/", views.certificate_detail),  # PUT & DELETE
    path('download/<int:id>/', views.download_document),
    path("colleges/", views.get_colleges),
    path("verifications/", views.get_verified_applications, name="get_verifications"),
    path("refund/", views.refund_payment),
    




    
    
    
]
