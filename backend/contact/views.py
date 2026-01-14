from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings

class ContactView(APIView):
    """ API pour gérer les messages de contact envoyés via le formulaire.
    """
    def post(self, request):
        data = request.data

        name = data.get('name')
        email = data.get('email')
        profession = data.get('profession')
        subject = data.get('subject')
        message = data.get('message')

        if not all([name, email, subject, message]):
            return Response(
                {"error": "Champs obligatoires manquants"},
                status=status.HTTP_400_BAD_REQUEST
            )

        email_message = f"""
Nom : {name}
Email : {email}
Profession : {profession}

Message :
{message}
        """

        send_mail(
            subject=f"[Sociora] {subject}",
            message=email_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=['socioratech@gmail.com'],
            fail_silently=False,
        )

        return Response(
            {"success": "Message envoyé avec succès"},
            status=status.HTTP_200_OK
        )


class SubscribeView(APIView):
    """
    API pour recevoir les emails des utilisateurs souhaitant être informés.
    """

    def post(self, request):
        data = request.data
        email = data.get('email')

        if not email:
            return Response(
                {"error": "Veuillez fournir une adresse e-mail."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Construire le message
        email_message = f"L'utilisateur {email} souhaite être informé des nouvelles solutions."

        # Envoyer l'email
        send_mail(
            subject="[OrthoCabinet] Nouvelle inscription à l'infolettre",
            message=email_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.EMAIL_HOST_USER],  #  mail personnel
            fail_silently=False,
        )

        return Response(
            {"success": "Merci ! Votre email a été enregistré."},
            status=status.HTTP_200_OK
        )
