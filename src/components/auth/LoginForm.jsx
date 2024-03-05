import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../utility/Field";

export default function LoginForm() {
  const { setAuth } = useAuth(); // auth hook
  const navigate = useNavigate(); // navigation

  const {
    register, // registering the input elements
    handleSubmit, // form handler
    formState: { errors }, // errors state
    setError, // setting the errors
  } = useForm();

  // handling form submit
  const handleFormSubmit = async (formData) => {
    // console.log(formData);

    try {
      // Make an API call
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );

      if (response.status === 200) {
        // success response
        const { token, user } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;

          console.log(`Tokens while logged in: ${authToken}`);

          setAuth({ user, authToken, refreshToken }); // user info added to auth
          navigate("/"); // navigate to Home page
        }
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
    }
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
        {errors?.root?.random && <p>{errors?.root?.random?.message}</p>}
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
