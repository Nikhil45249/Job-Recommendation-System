
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.acceptTerms) {
      setError("Please accept the terms and conditions.");
      return;
    }

    // Backend registration will be connected later.
    console.log("Signup form submitted:", {
      fullName: formData.fullName,
      email: formData.email,
    });

    setError("Form validated successfully. Registration is not connected yet.");
  };

  const inputClass =
    "h-12 w-full rounded-xl border border-border-dark bg-bg-input pl-11 pr-4 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-outer px-4 py-8 text-text-primary sm:px-6">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-[460px]">

        {/* Logo */}
        <Link
          to="/"
          className="mb-6 flex items-center justify-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
            <BriefcaseBusiness
              size={27}
              strokeWidth={2.2}
              className="text-primary"
            />
          </div>

          <h1 className="text-[25px] font-bold tracking-tight">
            <span className="text-text-light">Job</span>
            <span className="text-primary">Recommender</span>
          </h1>
        </Link>

        {/* Signup Card */}
        <section className="rounded-2xl border border-border-dark bg-bg-dark p-6 shadow-2xl shadow-black/20 sm:p-8">

          {/* Heading */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-text-light sm:text-[28px]">
              Create your account
            </h2>

            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Start discovering opportunities tailored to you.
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-text-light"
              >
                Full Name
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  strokeWidth={1.8}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="signupEmail"
                className="mb-2 block text-sm font-medium text-text-light"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  strokeWidth={1.8}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                  id="signupEmail"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="signupPassword"
                className="mb-2 block text-sm font-medium text-text-light"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  strokeWidth={1.8}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                  id="signupPassword"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                  minLength={8}
                  required
                  className={`${inputClass} pr-12`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-text-muted transition hover:bg-bg-dark hover:text-text-light"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-text-light"
              >
                Confirm Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={19}
                  strokeWidth={1.8}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className={`${inputClass} pr-12`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-text-muted transition hover:bg-bg-dark hover:text-text-light"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-sm leading-5 text-text-secondary">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-primary"
              />

              <span>
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-medium text-primary hover:text-primary-hover"
                >
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-medium text-primary hover:text-primary-hover"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            {/* Validation Message */}
            {error && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  error.startsWith("Form validated")
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {error}
              </p>
            )}

            {/* Create Account */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-[#111214] shadow-lg shadow-primary/10 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-dark"
            >
              Create Account

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-text-secondary">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary transition hover:text-primary-hover"
            >
              Sign In
            </Link>
          </p>

        </section>

        {/* Footer */}
        <p className="mt-5 text-center text-xs leading-5 text-text-muted">
          Find the right opportunities. Build your future.
        </p>

      </div>
    </main>
  );
};

export default SignUp;
