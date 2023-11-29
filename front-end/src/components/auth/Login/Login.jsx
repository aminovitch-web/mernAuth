import React from 'react';
import { NavLink } from 'react-router-dom';
import Background from "../../layouts/MainContent/Background";
import Form from "../../layouts/MainContent/Form";
import SubmitButton from "../../layouts/MainContent/Button";

export default function Login() {
  const fields = [
    { label: "Username", type: "text", id: "username", placeholder: "Enter Username..." },
    { label: "Password", type: "password", id: "password", placeholder: "Enter Password..." },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
 
  };

  return (
    <Background>
      <Form formName="Login" fields={fields} onSubmit={handleSubmit}>
        <SubmitButton text="Login" />
        <div className="mt-3 flex justify-between items-center">
          <NavLink to="/Password-recovery" className="text-indigo-800 font-semibold">
            Forgot Password?
          </NavLink>
          <NavLink to="/signup" className="text-indigo-800 font-semibold">
            Need an account?
          </NavLink>
        </div>
      </Form>
    </Background>
  );
}
