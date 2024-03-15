from core.models import Modification
from rest_framework import serializers

class ModificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modification
        fields = ['owner','typeofMod','name','amount','dateofMod']