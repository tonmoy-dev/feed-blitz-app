import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../utility/Field";

export default function LoginForm() {
  const navigate = useNavigate(); // navigation

  const {
    register, // registering the input elements
    handleSubmit, // form handler
    formState: { errors }, // errors state
  } = useForm();

  // handling form submit
  const handleFormSubmit = (formData) => {
    console.log(formData);
    navigate("/"); // navigate to Home page
  };
  return (
    <>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* email */}
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              // rules for email
              required: "Email is required!",
            })}
            className={`auth-input ${errors.email ? "border-red-500" : ""}`}
          />
        </Field>
        {/* password */}
        <Field label="Password" error={errors.password}>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              // rules for password
              required: "Password is required!",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
            })}
            className={`auth-input ${errors.email ? "border-red-500" : ""}`}
          />
        </Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
}
