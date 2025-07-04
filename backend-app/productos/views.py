from django.shortcuts import render
from rest_framework.views import APIView
from .models import Producto
from .serializers import ProductoSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .permissions import HasAppTokenPermission

# Create your views here.
class Productos(APIView):
    permission_classes = [HasAppTokenPermission]
    #get Productos
    def get(self, request):
        productos = Producto.objects.all()
        serializer = ProductoSerializer(productos, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    #create Productos
    def post(self, request):
        serializer = ProductoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        #de lo contrario, devolvemos un error
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductoDetail(APIView):
    permission_classes = [HasAppTokenPermission]
    # obtenemos la información en base al id
    def get_object(self, pk):
        try:
            return Producto.objects.get(pk=pk)
        except Producto.DoesNotExist:
            raise Http404
    
    #get producto
    def get(self, request, pk):
        producto = self.get_object(pk)
        serializer = ProductoSerializer(producto)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
    #eliminar producto
    def delete(self, request, pk):
        producto = self.get_object(pk)
        producto.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)