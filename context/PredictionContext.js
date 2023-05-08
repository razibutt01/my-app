import React, { createContext, useState } from "react";

export const PredictionContext = createContext();

export const PredictionProvider = ({ children }) => {
  const [prediction, setPrediction] = useState("");

  return (
    <PredictionContext.Provider value={{ prediction, setPrediction }}>
      {children}
    </PredictionContext.Provider>
  );
};
