from rest_framework.decorators import api_view
from rest_framework.response import Response
# from .models import ImageUpload
from .serializers import ImageUploadSerializer
# from PIL import Image, UnidentifiedImageError
# import io
# import uuid
# import subprocess
# import os
# from django.core.files.base import ContentFile
from django.conf import settings

# @api_view(['POST'])
# def upload_image(request):
#     file = request.FILES.get('image')

#     if not file:
#         return Response({'error': 'No file provided'}, status=400)

#     file_type = file.content_type
#     original_kb = file.size / 1024

#     # =====================================
#     # 🖼 IMAGE HANDLING
#     # =====================================
#     if file_type.startswith('image/'):
#         try:
#             img = Image.open(file)

#             if img.mode in ("RGBA", "P"):
#                 img = img.convert("RGB")

#             # Resize (performance boost)
#             img.thumbnail((1200, 1200))

#             # ✅ If <= 1MB → skip compression
#             if original_kb <= 1024:
#                 serializer = ImageUploadSerializer(data={'image': file})

#                 if serializer.is_valid():
#                     instance = serializer.save()

#                     return Response({
#                         "type": "image",
#                         "message": "Uploaded without compression",
#                         "original_kb": round(original_kb, 2),
#                         "compressed": False,
#                         "url": instance.image.url
#                     }, status=201)

#                 return Response(serializer.errors, status=400)

#             # 🔥 Compress (binary search)
#             target_kb = 100
#             min_q, max_q = 10, 95
#             best_output = None

#             while min_q <= max_q:
#                 mid = (min_q + max_q) // 2

#                 temp = io.BytesIO()
#                 img.save(temp, format='WEBP', quality=mid, optimize=True)

#                 size_kb = temp.tell() / 1024

#                 if size_kb <= target_kb:
#                     best_output = temp
#                     min_q = mid + 1
#                 else:
#                     max_q = mid - 1

#             if best_output is None:
#                 best_output = temp

#             best_output.seek(0)

#             filename = f"{uuid.uuid4()}.webp"
#             compressed_file = ContentFile(best_output.read(), name=filename)

#             serializer = ImageUploadSerializer(data={'image': compressed_file})

#             if serializer.is_valid():
#                 instance = serializer.save()

#                 compressed_kb = best_output.tell() / 1024

#                 return Response({
#                     "type": "image",
#                     "message": "Compressed & uploaded",
#                     "original_kb": round(original_kb, 2),
#                     "compressed_kb": round(compressed_kb, 2),
#                     "reduction_percent": round(
#                         ((original_kb - compressed_kb) / original_kb) * 100, 2
#                     ),
#                     "url": instance.image.url
#                 }, status=201)

#             return Response(serializer.errors, status=400)

#         except UnidentifiedImageError:
#             return Response({'error': 'Invalid image'}, status=400)

#     # =====================================
#     # 📄 PDF HANDLING
#     # =====================================
#     elif file_type == "application/pdf":

#         input_path = f"temp_{uuid.uuid4()}.pdf"
#         output_path = f"compressed_{uuid.uuid4()}.pdf"

#         # Save temp PDF
#         with open(input_path, 'wb+') as f:
#             for chunk in file.chunks():
#                 f.write(chunk)

#         try:
#             subprocess.run([
#                 "gs",
#                 "-sDEVICE=pdfwrite",
#                 "-dCompatibilityLevel=1.4",
#                 "-dPDFSETTINGS=/ebook",
#                 "-dNOPAUSE",
#                 "-dQUIET",
#                 "-dBATCH",
#                 f"-sOutputFile={output_path}",
#                 input_path
#             ], check=True)

#             compressed_kb = os.path.getsize(output_path) / 1024

#             with open(output_path, 'rb') as f:
#                 compressed_file = ContentFile(f.read(), name=f"{uuid.uuid4()}.pdf")

#             serializer = ImageUploadSerializer(data={'image': compressed_file})

#             if serializer.is_valid():
#                 instance = serializer.save()

#                 return Response({
#                     "type": "pdf",
#                     "message": "PDF compressed & uploaded",
#                     "original_kb": round(original_kb, 2),
#                     "compressed_kb": round(compressed_kb, 2),
#                     "reduction_percent": round(
#                         ((original_kb - compressed_kb) / original_kb) * 100, 2
#                     ),
#                     "url": instance.image.url
#                 }, status=201)

#             return Response(serializer.errors, status=400)

#         finally:
#             if os.path.exists(input_path):
#                 os.remove(input_path)
#             if os.path.exists(output_path):
#                 os.remove(output_path)

#     # =====================================
#     # ❌ INVALID FILE
#     # =====================================
#     else:
#         return Response({'error': 'Only images and PDFs allowed'}, status=400)



from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer

@api_view(["POST"])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)

    if serializer.is_valid():
        user = serializer.save()
        return Response({
            "message": "Registered successfully",
        }, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Users,Admin


@api_view(['POST'])
def login_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    # 🔹 1. Check Admin
    admin = Admin.objects.filter(email=email).first()
    if admin:
        if password == admin.password:
            return Response({
                "message": "Admin Login successful",
                "type": "admin",
                "data": {
                    "email": admin.email
                }
            }, status=200)
        else:
            return Response({"error": "Invalid password"}, status=401)
    # 🔹 2. Check Normal User
    user = Users.objects.filter(email=email).first()
    if user:
        if password == user.password:
            return Response({
                "message": "User Login successful",
                "type": "user",
                "data": {
                    "name": user.name,
                    "email": user.email
                }
            }, status=200)
        else:
            return Response({"error": "Invalid password"}, status=401)
    return Response({"error": "User not found"}, status=404)



from django.http import JsonResponse
import razorpay
from django.conf import settings
from django.http import JsonResponse
import json

from django.views.decorators.csrf import csrf_exempt
import razorpay
import json
from django.conf import settings
from django.http import JsonResponse


@csrf_exempt   # ✅ ADD THIS
def create_order(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid method"}, status=405)

    try:
        data = json.loads(request.body)

        amount = int(data.get("amount")) * 100
        application_id = data.get("application_id")

        # 🔒 Validate
        if not amount:
            return JsonResponse({"error": "Amount is required"}, status=400)

        client = razorpay.Client(auth=(
            settings.RAZORPAY_KEY_ID,
            settings.RAZORPAY_KEY_SECRET
        ))

        order = client.order.create({
            "amount": amount,
            "currency": "INR",
            "payment_capture": 1
        })

        print("✅ Order Created:", order)

        return JsonResponse({
            "order_id": order["id"],
            "amount": order["amount"]
        })

    except Exception as e:
        print("🔥 Create Order Error:", str(e))
        return JsonResponse({"error": str(e)}, status=500)
    
import razorpay
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings

import razorpay
import json
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
 
client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))
 
 
# ✅ CREATE ORDER
@csrf_exempt
def create_order(request):
    if request.method == "POST":
        data = json.loads(request.body)

        application_id = data.get("application_id")
        amount = int(data.get("amount", 1)) * 100  # convert to paise

        from .models import Application, Payment

        try:
            app = Application.objects.get(id=application_id)
        except Application.DoesNotExist:
            return JsonResponse({"error": "Invalid application"}, status=400)

        order = client.order.create({
            "amount": amount,
            "currency": "INR",
            "payment_capture": "1"
        })

        # ✅ SAVE ORDER IN DB
        Payment.objects.create(
            application=app,
            order_id=order["id"],
            amount=amount,
            currency="INR",
            status="created"
        )

        return JsonResponse({
            "order_id": order["id"],
            "amount": amount,
            "key": settings.RAZORPAY_KEY_ID
        })
 
# ✅ VERIFY PAYMENT
@csrf_exempt
def verify_payment(request):
    data = json.loads(request.body)

    razorpay_order_id = data.get("razorpay_order_id")
    razorpay_payment_id = data.get("razorpay_payment_id")
    razorpay_signature = data.get("razorpay_signature")

    params_dict = {
        "razorpay_order_id": razorpay_order_id,
        "razorpay_payment_id": razorpay_payment_id,
        "razorpay_signature": razorpay_signature
    }

    try:
        # ✅ Verify signature
        client.utility.verify_payment_signature(params_dict)

        from .models import Payment

        payment = Payment.objects.filter(order_id=razorpay_order_id).first()

        if payment:
            # ✅ Fetch extra details from Razorpay
            payment_data = client.payment.fetch(razorpay_payment_id)

            payment.payment_id = razorpay_payment_id
            payment.signature = razorpay_signature
            payment.status = "paid"
            payment.captured = True
            payment.payment_method = payment_data.get("method")

            payment.save()

        return JsonResponse({"status": "success"})

    except Exception as e:
        print("❌ Verification Error:", str(e))

        # ❗ Mark as failed in DB
        from .models import Payment
        payment = Payment.objects.filter(order_id=razorpay_order_id).first()
        if payment:
            payment.status = "failed"
            payment.save()

        return JsonResponse({"status": "failed"})
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
import razorpay
from django.conf import settings
from .models import Payment

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
import razorpay
from django.conf import settings
from .models import Payment

client = razorpay.Client(auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET))


import requests
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.conf import settings
import json
import requests
from .models import Payment


@csrf_exempt
def refund_payment(request):
    if request.method != "POST":
        return JsonResponse({"error": "Invalid method"}, status=405)

    try:
        data = json.loads(request.body)
        application_id = data.get("application_id")

        if not application_id:
            return JsonResponse({"error": "application_id required"}, status=400)

        # ✅ Get latest successful payment
        payment = Payment.objects.filter(
            application_id=application_id,
            status="paid",
            captured=True
        ).order_by("-created_at").first()

        if not payment:
            return JsonResponse({"error": "No successful payment found"}, status=400)

        if not payment.payment_id:
            return JsonResponse({"error": "Payment ID missing"}, status=400)

        print("---- REFUND DEBUG ----")
        print("Payment ID:", payment.payment_id)

        # 🔥 Razorpay Refund API (DIRECT CALL)
        url = f"https://api.razorpay.com/v1/payments/{payment.payment_id}/refund"

        response = requests.post(
            url,
            auth=(settings.RAZORPAY_KEY_ID, settings.RAZORPAY_KEY_SECRET),
            data={}   # ✅ IMPORTANT: use form-data, NOT json
        )

        print("Status Code:", response.status_code)
        print("Response:", response.text)

        # ❌ If error from Razorpay
        if response.status_code != 200:
            try:
                error_data = response.json()
            except:
                error_data = response.text

            return JsonResponse({
                "error": error_data
            }, status=400)

        refund = response.json()

        # ✅ Save refund details
        payment.refund_id = refund.get("id")
        payment.refund_status = refund.get("status")
        payment.status = "refunded"
        payment.save()

        return JsonResponse({
            "status": "refund_success",
            "refund_id": refund.get("id")
        })

    except Exception as e:
        import traceback
        traceback.print_exc()
        return JsonResponse({"error": str(e)}, status=500)
 
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.core.mail import send_mail
import json

@csrf_exempt
def contact_api(request):
    if request.method == "POST":
        data = json.loads(request.body)

        name = data.get("name")
        email = data.get("email")
        subject = data.get("subject")
        message = data.get("message")

        full_message = f"""
New Contact Form Message:

Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
"""

        send_mail(
            subject=f"Contact Form: {subject}",
            message=full_message,
            from_email=email,
            recipient_list=["admin@100transcripts.com"],
            fail_silently=False,
        )

        return JsonResponse({"message": "Email sent successfully"})

    return JsonResponse({"error": "Invalid request"}, status=400)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import College
from .serializers import CollegeSerializer


@api_view(['POST'])
def add_college(request):
    serializer = CollegeSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import College
from .serializers import CollegeSerializer


@api_view(['GET'])
def get_all_colleges(request):
    colleges = College.objects.all().order_by('-id')
    serializer = CollegeSerializer(colleges, many=True)
    return Response(serializer.data)



import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Application, Degree, Document
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Application, Degree, Document
import json


@api_view(['POST'])
def submit_application(request):
    try:
        data = request.POST

        # ✅ Basic validation (avoid NULL crash)
        required_fields = ["fullName", "email", "phone", "altPhone", "requirement"]
        for field in required_fields:
            if not data.get(field):
                return Response({"error": f"{field} is required"}, status=400)

        # ✅ Create Application safely
        app = Application.objects.create(
            fullName=data.get("fullName", "").strip(),
            email=data.get("email", "").strip(),
            phone=data.get("phone", "").strip(),
            altPhone=data.get("altPhone", "").strip(),
            requirement=data.get("requirement", "").strip(),
            referenceNumber=data.get("referenceNumber", "").strip() or None,
            termsAccepted=str(data.get("termsAccepted")).lower() == "true",
            specialCondition=str(data.get("specialCondition")).lower() == "true",
            tracking_id=data.get("trackingId", "").strip() or None,
        )

        # ✅ Degrees (OPTIONAL + SAFE)
        degrees = []
        degrees_raw = data.get("degrees")

        if degrees_raw:
            try:
                degrees = json.loads(degrees_raw)
            except json.JSONDecodeError:
                degrees = []

        for d in degrees:
            # skip empty degree rows
            if not (d.get("university") or d.get("college")):
                continue

            Degree.objects.create(
                application=app,
                type=d.get("type") or None,
                university=d.get("university") or "",
                course=d.get("course") or None,
                college=d.get("college") or "",
            )

        # ✅ Documents (OPTIONAL)
        for key, file in request.FILES.items():
            Document.objects.create(
                application=app,
                doc_type=key,
                name=file.name,
                file=file
            )

        return Response({
            "message": "Submitted Successfully",
            "application_id": app.id
        }, status=201)

    except Exception as e:
        print("❌ ERROR:", str(e))  # important for debugging
        return Response({"error": str(e)}, status=500)
    
@api_view(['GET'])
def get_applications(request):
    apps = Application.objects.all().order_by('-id')

    data = []
    for app in apps:
        # Get the first degree info if it exists
        first_degree = app.degrees.first()
        university = first_degree.university if first_degree else "N/A"
        app_type = app.requirement

        data.append({
            "id": f"REQ-{app.id:03}",
            "raw_id": app.id,
            "fullName": app.fullName,
            "email": app.email,
            "phone": app.phone,
            "university": university,
            "type": app_type,
            "payment": app.payment_status,
            "status": app.status,
            "agent": app.agent or "Unassigned",
            "district": getattr(app, 'district', 'N/A'), # if added
            "documentsList": [
                {"id": doc.id, "name": doc.name, "status": "Verified", "url": f"http://192.168.1.12:8000{doc.file.url}"}
                for doc in app.documents.all()
            ]
        })
    return Response(data)


from django.http import FileResponse
from rest_framework.decorators import api_view
from .models import Document

@api_view(['GET'])
def download_document(request, id):
    try:
        doc = Document.objects.get(id=id)

        return FileResponse(
            doc.file.open(),
            as_attachment=True,   # 🔥 THIS FORCES DOWNLOAD
            filename=doc.name
        )

    except Document.DoesNotExist:
        return Response({"error": "File not found"}, status=404)
    

from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def send_notification(request):
    try:
        email = request.data.get("email")
        subject = request.data.get("subject")
        message = request.data.get("message")

        if not email or not subject or not message:
            return Response({"error": "All fields required"}, status=400)

        # ✅ SEND EMAIL
        send_mail(
            subject,
            message,
            "yourgmail@gmail.com",  # sender
            [email],                # receiver
            fail_silently=False,
        )

        return Response({"message": "Email sent successfully ✅"})

    except Exception as e:
        print("ERROR:", str(e))
        return Response({"error": str(e)}, status=500)
    
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from .models import Application

@csrf_exempt
def update_status(request, id=None):
    if request.method in ["POST", "PUT"]:
        data = json.loads(request.body)

        email = data.get("email")
        status = data.get("status")
        agent = data.get("agent")
        admin_message = data.get("admin_message")

        try:
            if id:
                app = Application.objects.get(id=id)
            elif email:
                app = Application.objects.get(email=email)
            else:
                return JsonResponse({"error": "ID or Email required"}, status=400)

            app.status = status
            if agent is not None:
                app.agent = agent
            if admin_message is not None:
                app.admin_message = admin_message
            app.save()

            return JsonResponse({"message": "Status updated"})
        except Application.DoesNotExist:
            return JsonResponse({"error": "User not found"}, status=404)

@api_view(['GET'])
def get_app_status(request, id):
    try:
        app = Application.objects.get(id=id)
        return Response({
            "status": app.status,
            "admin_message": app.admin_message,
            "payment_status": app.payment_status,
            "tracking_id": app.tracking_id
        })
    except Application.DoesNotExist:
        return Response({"error": "Application not found"}, status=404)

@api_view(['GET'])
def get_application_status(request):
    tracking_id = request.GET.get('tracking_id')
    email = request.GET.get('email')
    
    try:
        if tracking_id:
            app = Application.objects.get(tracking_id=tracking_id)
        elif email:
            app = Application.objects.get(email=email)
        else:
            return Response({"error": "Tracking ID or Email required"}, status=400)
            
        return Response({
            "status": app.status,
            "admin_message": app.admin_message,
            "payment_status": app.payment_status,
            "fullName": app.fullName,
            "tracking_id": app.tracking_id,
            "application_id": app.id
        })
    except Application.DoesNotExist:
        return Response({"error": "Application not found"}, status=404)

from .models import Certificate
from .serializers import CertificateSerializer
@api_view(['POST'])
def add_certificate(request):
    serializer = CertificateSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors, status=400)


@api_view(['GET'])
def get_college_certificates(request, pk):
    certificates = Certificate.objects.filter(college_id=pk)

    serializer = CertificateSerializer(certificates, many=True)
    return Response(serializer.data)


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Certificate
from .serializers import CertificateSerializer


@api_view(["PUT", "DELETE"])
def certificate_detail(request, id):
    try:
        cert = Certificate.objects.get(id=id)
    except Certificate.DoesNotExist:
        return Response({"error": "Certificate not found"}, status=status.HTTP_404_NOT_FOUND)

    # ✅ UPDATE
    if request.method == "PUT":
        serializer = CertificateSerializer(cert, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response({
                "message": "Updated successfully",
                "data": serializer.data
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # ✅ DELETE
    if request.method == "DELETE":
        cert.delete()
        return Response({"message": "Deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
from django.http import FileResponse
from .models import Document
import os

@api_view(['GET'])
def download_document(request, doc_id):
    try:
        doc = Document.objects.get(id=doc_id)
        response = FileResponse(doc.file.open(), as_attachment=True, filename=doc.name)
        return response
    except Document.DoesNotExist:
        return Response({"error": "Document not found"}, status=404)
    except Exception as e:
        return Response({"error": str(e)}, status=500)

@api_view(['POST'])
def send_notification(request):
    data = request.data
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')
    
    if not email or not subject or not message:
        return Response({"error": "Missing required fields"}, status=400)
    
    # In a real app, use send_mail(...)
    print(f"?? Notification sent to {email}: {subject}")
    
    return Response({"message": "Notification sent successfully"})


from django.http import JsonResponse
from .models import College
 
def get_colleges(request):
    colleges = College.objects.all()
 
    data = [
        {
            "id": c.id,
            "name": c.name
        }
        for c in colleges
    ]
 
    return JsonResponse(data, safe=False)
 
from django.http import JsonResponse
from .models import Application
 
from django.http import JsonResponse
from .models import Application
 
def get_verified_applications(request):
    try:
        # We filter for 'approved' status (standardized with StudentRequests)
        apps = Application.objects.filter(status="approved").order_by('-created_at')
        
        data = []
        for app in apps:
            first_degree = app.degrees.first()
            university = first_degree.university if first_degree else "N/A"
            
            data.append({
                "id": f"VER-{app.id:03}",
                "raw_id": app.id,
                "student": app.fullName,
                "college": university,
                "country": "India", # Default or derived from university if possible
                "email": app.email,
                "date": app.created_at.strftime("%Y-%m-%d"),
                "status": "Verified", # UI expectation
                "assigned": app.agent or "Unassigned",
                "mode": "Email",
                "history": [
                    { "step": "Application Received", "time": app.created_at.strftime("%d %b, %H:%M"), "done": True },
                    { "step": "Documents Sent to College", "time": "In Progress", "done": False },
                ]
            })
        return JsonResponse(data, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
