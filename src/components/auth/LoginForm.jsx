import { useForm } from "react-hook-form";
import Field from "../utility/Field";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", { required: "Email is required!" })}
            className={`auth-input ${errors.email ? "border-red-500" : ""}`}
          />
        </Field>
        <Field label="Password" error={errors.password}>
          <input
            type="password"
            name="password"
            id="password"
            {...register("password", {
              required: "Password is required!",
              minLength: {
                value: 4,
                message: "Password must be at least 4 characters",
              },
            })}
            className={`auth-input ${errors.email ? "border-red-500" : ""}`}
          />
        </Field>
        <Field>
          <button
            className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
            type="submit"
          >
            Login
          </button>
        </Field>
      </form>
    </>
  );
}
