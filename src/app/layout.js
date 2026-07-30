"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import { FormProvider, useForm } from "./context/FormContext";

function PopupHandler({ children }) {
  const { showForm, setShowForm } = useForm();
  return (
    <>
      <Navbar />
      {children}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <UserForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <FormProvider>
          <PopupHandler>{children}</PopupHandler>
        </FormProvider>
      </body>
    </html>
  );
}
