from django.urls import path, re_path, include
from django.views.generic import TemplateView
from auth.views import CustomConfirmEmailView, GoogleAuthCallbackView, GoogleLogin
from dj_rest_auth.views import PasswordResetConfirmView

urlpatterns = [
    path("", include("dj_rest_auth.urls")),
    re_path(
    r"^registration/account-confirm-email/(?P<key>[-:\w]+)/$",
    CustomConfirmEmailView.as_view(),
    name="account_confirm_email",
    ),
    path("registration/", include("dj_rest_auth.registration.urls")),
    
    path(
        'email/confirmation/done/',
        TemplateView.as_view(template_name='account/email_confirmation_done.html'),
        name='account_email_confirmation_done'
    ),
    
    path(
        "password/reset/confirm/<uidb64>/<token>/",
        PasswordResetConfirmView.as_view(),
        name="password_reset_confirm"
    ),
]
