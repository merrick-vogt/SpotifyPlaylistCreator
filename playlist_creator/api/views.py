from django.http import HttpResponse
from rest_framework import generics, status
from .serializers import RoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.


def main(request):
    return HttpResponse("<h1>Playlist Creator</h1>")


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
