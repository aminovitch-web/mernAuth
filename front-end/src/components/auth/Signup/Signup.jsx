import React from 'react';
import { NavLink } from 'react-router-dom';
import Background from "../../layouts/MainContent/Background";
import Form from "../../layouts/MainContent/Form";
import SubmitButton from "../../layouts/MainContent/Button";

export default function Signup() {
  const fields = [
    { label: "Username", type: "text", id: "username", placeholder: "Enter Username..." },
    { label: "Email", type: "email", id: "email", placeholder: "Enter valid email..." },
    { label: "Password", type: "password", id: "password", placeholder: "Enter Password..." },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <Background>
      <Form formName="Signup" fields={fields} onSubmit={handleSubmit}>
        <SubmitButton text="Signup" />
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Already have an account?
          </p>
          <NavLink to="/login" className="text-indigo-800 font-semibold">
            Login here
          </NavLink>
        </div>
      </Form>
    </Background>
  );
}
