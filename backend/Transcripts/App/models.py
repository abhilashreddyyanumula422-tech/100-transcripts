from django.db import models

class ImageUpload(models.Model):
    image = models.ImageField(upload_to='compressed/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.image.name

from django.db import models

class Users(models.Model):
   
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=10)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.email
    
class Admin(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.TextField()
     
    def __str__(self):
        return self.email
from django.db import models

class College(models.Model):
    REG_TYPE_CHOICES = [
        ('Private', 'Private'),
        ('Government', 'Government'),
        ('Autonomous', 'Autonomous'),
        ('University', 'University'),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=255)
    district = models.CharField(max_length=255)
    pincode = models.CharField(max_length=10)
    regType = models.CharField(max_length=20, choices=REG_TYPE_CHOICES)
    

    def __str__(self):
        return self.name


from django.db import models

class Application(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('completed', 'Completed'),
    ]
    fullName = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    altPhone = models.CharField(max_length=15)
    payment_status = models.CharField(max_length=20, default="Unpaid")
    requirement = models.CharField(max_length=50)
    referenceNumber = models.CharField(max_length=100, blank=True, null=True)

    termsAccepted = models.BooleanField(default=False)
    specialCondition = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    tracking_id = models.CharField(max_length=100, unique=True, null=True, blank=True)
    admin_message = models.TextField(null=True, blank=True)
    agent = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )

    def __str__(self):
        return self.fullName


class Degree(models.Model):
    application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name="degrees")
    type = models.CharField(max_length=100, blank=True, null=True)
    university = models.CharField(max_length=255)
    course = models.CharField(max_length=255, blank=True, null=True)
    college = models.CharField(max_length=255)

    def __str__(self):
        return self.university


class Document(models.Model):
    application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name="documents")
    doc_type = models.CharField(max_length=100)  # cmm / degree / internship
    name = models.CharField(max_length=255)
    file = models.FileField(upload_to="documents/")

    def __str__(self):
        return self.name

class Certificate(models.Model):
    college = models.ForeignKey(
        College,
        on_delete=models.CASCADE,
        related_name="certificates"
    )

    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"{self.name} - {self.college.name}"
    

from django.db import models

class Payment(models.Model):
    # 🔗 Relation to your application
    application = models.ForeignKey(
        "Application",
        on_delete=models.CASCADE,
        related_name="payments"
    )

    # 🆔 Razorpay IDs
    order_id = models.CharField(max_length=255)
    payment_id = models.CharField(max_length=255, null=True, blank=True)
    signature = models.CharField(max_length=500, null=True, blank=True)

    # 💰 Payment Info
    amount = models.IntegerField()  # in paise
    currency = models.CharField(max_length=10, default="INR")

    # 📊 Status
    status = models.CharField(max_length=50, default="created")
    payment_method = models.CharField(max_length=50, null=True, blank=True)  # card / upi
    captured = models.BooleanField(default=False)


    # 🔁 Refund Info
    refund_id = models.CharField(max_length=255, null=True, blank=True)
    refund_status = models.CharField(max_length=50, null=True, blank=True)

    # ⏱️ Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.payment_id} - {self.status}"