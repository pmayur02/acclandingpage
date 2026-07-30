"use client";
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  return (
    <FormContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
