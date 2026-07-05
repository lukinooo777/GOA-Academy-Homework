// App.jsx

import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import WeatherWidget from "./WeatherWidget";

function App() {
  return (
    <ErrorBoundary>
      <WeatherWidget />
    </ErrorBoundary>
  );
}

export default App;