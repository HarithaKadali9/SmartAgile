from rest_framework import serializers
from .models import SignupData

class SignupDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignupData
        fields = ['first_name', 'last_name', 'email', 'password']
