from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.conf import settings
from django.contrib.auth.models import AnonymousUser

class AppTokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get('Authorization')

        if not token:
            return None

        expected_token = f"Token {settings.APP_API_KEY}"

        if token != expected_token:
            raise AuthenticationFailed('Invalid application token.')

        # Puedes retornar un usuario anónimo o un usuario "falso"
        return (None, token)
