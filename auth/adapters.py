from allauth.account.adapter import DefaultAccountAdapter
from django.conf import settings


class CustomAccountAdapter(DefaultAccountAdapter):
    def send_mail(self, template_prefix, email_template_suffix, context, **kwargs):

        if 'password_reset_url' in context:
            uid = context.get('uid')
            token = context.get('token')
            frontend_url = f"{settings.FRONT_HOST}password/reset/{uid}/{token}"
            context['password_reset_url'] = frontend_url

        super().send_mail(template_prefix, email_template_suffix, context, **kwargs)
