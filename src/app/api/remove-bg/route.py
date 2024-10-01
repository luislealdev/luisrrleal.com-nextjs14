# app/api/remove_bg/route.py

import base64
from io import BytesIO
from rembg import remove
from PIL import Image
from django.http import JsonResponse

async def handler(request):
    try:
        # Lee la imagen desde la solicitud
        data = (await request.json()).get('image')
        image_data = base64.b64decode(data)
        
        # Cargar la imagen
        input_image = Image.open(BytesIO(image_data))
        
        # Remover el fondo
        output_image = remove(input_image)
        
        # Convertir la imagen a base64
        buffered = BytesIO()
        output_image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")

        # Respuesta con la imagen procesada
        return JsonResponse({"image": img_str}, status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
