# Create your views here.
from rest_framework import viewsets
from rest_framework import generics
from .serializers import VideoSerializer, UserSerializer
from rest_framework.permissions import AllowAny
from .models import Video
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


class CreateUserView(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer


class ManageUserView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    # authentication_classes = [TokenAuthentication]
    # permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
