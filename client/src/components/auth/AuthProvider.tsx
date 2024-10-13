"use client";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { FORM_FIELDS } from "@/utils/contants";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
    },
  },
});

const AuthProvider = ({ children }: any) => {
  return (
    <div>
      <Authenticator formFields={FORM_FIELDS}>
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
