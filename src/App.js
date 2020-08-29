import React, { useState, Component } from 'react';
import './App.css';

function App() {

  const [image, setImage] = useState({})

  const selectImage = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImage(reader.result)
    }
    reader.readAsDataURL(file)
  }
  return (
    <div className="App">
      <h1>Image Uploader</h1>
      <input onChange={(e) => selectImage(e)} type="file" />
      <img src={image} />
    </div>
  );
}

export default App;