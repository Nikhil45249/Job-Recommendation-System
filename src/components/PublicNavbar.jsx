import { BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-10 pt-2">
      <div className="relative flex h-[68px] w-full items-center rounded-xl border border-border bg-bg-card px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <BriefcaseBusiness
            size={32}
            strokeWidth={2.5}
            className="text-primary"
          />

          <h1 className="text-[22px] font-bold tracking-tight">
            <span className="text-text-primary">Job</span>
            <span className="text-primary">Recommender</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8">

          <Link
            to="/"
            className="text-[15px] text-text-secondary transition hover:text-primary-hover"
          >
            Home
          </Link>

          <a
            href="#about"
            className="text-[15px] text-text-secondary transition hover:text-primary-hover"
          >
            About
          </a>

          <a
            href="#features"
            className="text-[15px] text-text-secondary transition hover:text-primary-hover"
          >
            Features
          </a>

          <Link
            to="/jobs"
            className="text-[15px] text-text-secondary transition hover:text-primary-hover"
          >
            Jobs
          </Link>

          <a
            href="#contact"
            className="text-[15px] text-text-secondary transition hover:text-primary-hover"
          >
            Contact
          </a>

        </div>

        {/* Sign In */}
        <Link
          to="/login"
          className="ml-auto rounded-full border border-primary px-5 py-2 text-[15px] font-medium text-text-primary transition hover:bg-primary/10"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;