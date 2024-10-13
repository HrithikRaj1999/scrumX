export const FORM_FIELDS = {
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

 