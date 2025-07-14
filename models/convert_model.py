import tensorflow as tf

for version in [1, 2, 3]:
    model = tf.keras.models.load_model(f"{version}.h5")
    export_path = f"keras_models/potato_model/{version}"
    model.export(export_path)  # ✅ Use export for TF Serving
    print(f"Exported version {version} to {export_path}")
