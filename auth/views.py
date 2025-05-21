import requests
from urllib.parse import urljoin
import requests as external_requests
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from allauth.account.views import ConfirmEmailView
from dj_rest_auth.registration.views import SocialLoginView
from django.conf import settings
from django.urls import reverse
from django.template.response import TemplateResponse
from django.http import HttpResponseRedirect
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from app.models import CustomUser

class CustomConfirmEmailView(ConfirmEmailView):
    template_name = 'auth/email_confirm.html'
    error_template_name = 'auth/email_confirm_error.html'

    def get_template_names(self):
        return [self.template_name]

    def get(self, request, *args, **kwargs):
        try:
            self.object = self.get_object()
            context = {
                'confirmation': self.object,
                'confirm_url': request.path,
            }
        except Exception:
            context = {
                'confirmation': None,
                'confirm_url': request.path,
            }
        return TemplateResponse(request, self.get_template_names(), context)

    def post(self, request, *args, **kwargs):
        try:
            self.object = self.get_object()
            self.object.confirm(request)
            return HttpResponseRedirect(settings.LOGIN_REDIRECT_URL)
        except Exception as e:
            context = {
                'error': str(e),
                'confirm_url': request.path,
            }
            return TemplateResponse(request, self.error_template_name, context)