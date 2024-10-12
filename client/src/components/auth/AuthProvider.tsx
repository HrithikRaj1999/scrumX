"use client";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

console.log({
  userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
  userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
});
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "", 
    },
  },
});
const formFields = {
  signUp: {
    username: {
      order: 1,
      Placeholder: "Choose a username",
      label: "Username",
      inputProps: { required: true },
    },
    email: {
      order: 2,
      Placeholder: "Enter your email address",
      label: "Email",
      inputProps: { type: "email", required: true },
    },
    password: {
      order: 3,
      Placeholder: "Enter your password",
      label: "Password",
      inputProps: { type: "password", required: true },
    },
    confirm_password: {
      order: 4,
      Placeholder: "Confirm your password",
      label: "Confirm Password",
      inputProps: { type: "password", required: true },
    },
  },
};
const AuthProvider = ({ children }: any) => {
  return (
    <div className="mt-5">
      <Authenticator formFields={formFields}>
        {({ user }: any) => {
          return user ? (
            children
          ) : (
            <div>
              <h1>Please Sign in Below:</h1>
            </div>
          );
        }}
      </Authenticator>
    </div>
  );
};

export default AuthProvider;
