import tensorflow as tf

from tensorflow.keras import models

import matplotlib.pyplot as plt

IMAGE_SIZE = 256
BATCH_SIZE = 32
channels = 3
EPOCHS = 50

directory = "../archive/PlantVillage"
dataset  = tf.keras.preprocessing.image_dataset_from_directory(

    directory,
    shuffle=True,
    image_size = (IMAGE_SIZE, IMAGE_SIZE),
    batch_size = BATCH_SIZE,
)

class_names = dataset.class_names

#print(class_names)


'''
for image_batch, label_batch in dataset.take(1):
    for i in range(12):
        ax = plt.subplot(3,4, i+1)
        plt.imshow(image_batch[i].numpy().astype("uint8"))
        plt.title(class_names[label_batch[i]])
        print(image_batch[i])
        plt.show()
        plt.axis("off")
'''

#80 percent as training data
#20 percent: 10 validation, 10 training

train_size = 0.8

print(len(dataset)*train_size)

train_Ds = dataset.take(54)

