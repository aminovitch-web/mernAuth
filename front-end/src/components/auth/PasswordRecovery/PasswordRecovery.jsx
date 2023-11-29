import React from 'react';
import { NavLink } from 'react-router-dom';
import Background from "../../layouts/MainContent/Background";
import Form from "../../layouts/MainContent/Form";
import SubmitButton from "../../layouts/MainContent/Button";

export default function PasswordRecovery() {
  const fields = [
    { label: "Email", type: "email", id: "email", placeholder: "Enter your email..." }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <Background>
      <Form formName="Reset Password" fields={fields} onSubmit={handleSubmit}>
        <SubmitButton text="Submit" />
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Enter your email and we'll send you a link to reset your password.
          </p>
          <NavLink to="/login" className="text-indigo-800 font-semibold">
            Back to Login
          </NavLink>
        </div>
      </Form>
    </Background>
  );
}
