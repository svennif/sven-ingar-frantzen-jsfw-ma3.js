import React from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Username"
        name="Username"
        ref={register({ required: true })}
      />{" "}
      {errors.Username && <p>First name is required</p>}
      <input
        type="password"
        placeholder="password"
        name="Password"
        ref={register({ required: true, min: 4 })}
      />
      {errors.Password && <p>A password is required</p>}
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
