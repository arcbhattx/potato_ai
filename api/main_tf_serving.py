from fastapi import FastAPI, File, UploadFile
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import requests
app = FastAPI()

endpoint = "http://localhost:8501/v1/models/potato_model:predict" #dynamically loading models



#new versions are built: tf serving


CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"] 


@app.get('/ping')
async def ping():
    return "Hello I am alive!!"

z
def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image



@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)

    json_data = {
        "instances": img_batch.tolist()
    }


    requests.post(endpoint, json=json_data)


    predictions = MODEL.predict(img_batch)
    predicted_class = CLASS_NAMES[np.argmax(predictions[0])] #maximum value between ex: (0.22, 0.99, 0.44) this will give index for class name
    cofidence = np.max(predictions[0])

    return{
        'class': predicted_class,
        'confidence': float(cofidence)
    }


if __name__ == "__main__":
    uvicorn.run(app, host = 'localhost', port=8080)

