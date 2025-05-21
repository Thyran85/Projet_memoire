from rest_framework import serializers
from .models import CustomUser, DeparturePage, EphemeralReading, Vote
from dj_rest_auth.serializers import UserDetailsSerializer
from django.contrib.auth import get_user_model

class CustomUserDetailsSerializer(UserDetailsSerializer):
    class Meta(UserDetailsSerializer.Meta):
        model = get_user_model()
        fields = UserDetailsSerializer.Meta.fields
        read_only_fields = ('email',)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email']
