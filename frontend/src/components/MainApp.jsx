import React, { useState } from 'react';
import axios from 'axios';

function MainApp() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  async function predictImage() {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile); // 'image' must match your backend key

    try {
      const response = await axios.post('http://localhost:8080/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Prediction:', response.data);
      setPrediction(response.data);
    } catch (error) {
      console.error('Error during prediction:', error);
    }
  }

  return (
    <div className="bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Image Prediction</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        onClick={predictImage}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Predict Image
      </button>

      {prediction && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Prediction Result:</h2>
          <pre className="bg-gray-800 p-2 rounded mt-2">
            {JSON.stringify(prediction, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default MainApp;
