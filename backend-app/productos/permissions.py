from rest_framework.permissions import BasePermission

class HasAppTokenPermission(BasePermission):
    def has_permission(self, request, view):
        # Solo permite acceso si la autenticación fue exitosa
        return request.auth is not None