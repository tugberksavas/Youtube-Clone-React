import { useState } from "react";
import "./output.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-blue-500">
        Hello World
      </h1>
      <h1 className="underline">Altı Çizili Yazı</h1>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">Çalışıyor</h1>
      </div>
    </div>
  );
}

export default App;
