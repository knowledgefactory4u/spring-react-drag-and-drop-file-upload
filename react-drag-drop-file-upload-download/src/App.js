import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./components/UploadFilesComponent";

function App() {
  return (

    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="btn-group mx-auto">
          <h2 class="text-white">Spring Boot
            + React Drag and Drop File Upload
            & Download</h2>
        </div>
      </nav><br></br>
      <div class="container">
        <UploadFiles />
      </div></div>
  );
}

export default App;
