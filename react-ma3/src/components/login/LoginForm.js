import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  Username: yup.string().required("Please enter a username"),
  Password: yup
    .string()
    .required("Please enter a password")
    .min(4, "Please enter a password with minimum 4 characters."),
});

function LoginForm() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="Username"
        placeholder="Username"
        ref={register}
      />
      <p>{errors.Username?.message}</p>

      <input
        type="password"
        name="Password"
        placeholder="Password"
        ref={register}
      />
      <p>{errors.Password?.message}</p>

      <input type="submit" />
    </form>
  );
}

export default LoginForm;
