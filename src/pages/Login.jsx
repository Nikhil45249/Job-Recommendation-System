
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend authentication will be connected later.
    console.log("Login form submitted:", {
      email: formData.email,
      rememberMe: formData.rememberMe,
    });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-outer px-4 py-10 text-text-primary sm:px-6">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-[440px]">

        {/* Logo */}
        <Link
          to="/"
          className="mb-8 flex items-center justify-center gap-3"
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

        {/* Login Card */}
        <section className="rounded-2xl border border-border-dark bg-bg-dark p-6 shadow-2xl shadow-black/20 sm:p-8">

          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-text-light sm:text-[28px]">
              Welcome back!
            </h2>

            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Sign in to discover jobs matched to your skills.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
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
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-border-dark bg-bg-input pl-11 pr-4 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
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
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-border-dark bg-bg-input pl-11 pr-12 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-text-muted transition hover:bg-bg-dark hover:text-text-light"
                >
                  {showPassword ? (
                    <EyeOff size={18} strokeWidth={1.8} />
                  ) : (
                    <Eye size={18} strokeWidth={1.8} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-text-secondary">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="h-4 w-4 cursor-pointer accent-primary"
                />
                Remember me
              </label>

              <button
                type="button"
                onClick={() =>
                  alert("Password recovery will be implemented later.")
                }
                className="text-sm font-medium text-primary transition hover:text-primary-hover"
              >
                Forgot Password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-[#111214] shadow-lg shadow-primary/10 transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-dark"
            >
              Sign In

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border-dark" />

            <span className="text-xs text-text-muted">OR</span>

            <div className="h-px flex-1 bg-border-dark" />
          </div>

          {/* Signup Link */}
          <p className="text-center text-sm text-text-secondary">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary transition hover:text-primary-hover"
            >
              Create Account
            </Link>
          </p>

        </section>

        {/* Footer */}
        <p className="mt-6 text-center text-xs leading-5 text-text-muted">
          Find the right opportunities. Build your future.
        </p>

      </div>
    </main>
  );
};

export default Login;
