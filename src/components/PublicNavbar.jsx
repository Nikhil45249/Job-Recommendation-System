import { useEffect, useState } from "react";
import { BriefcaseBusiness, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PublicNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  // Navigate to a section on the Home page.
  const scrollToSection = (sectionId) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Scroll after navigating back to Home from another page.
  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (location.pathname === "/" && sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });

      navigate("/", { replace: true, state: null });
    }
  }, [location.pathname, location.state, navigate]);

  // Shared styling ensures every navigation item looks consistent.
  const navLinkClass =
    "!text-text-secondary whitespace-nowrap text-[15px] font-medium transition-colors duration-200 hover:!text-primary";

  const sectionButtonClass =
    "!text-text-secondary whitespace-nowrap text-left text-[15px] font-medium transition-colors duration-200 hover:!text-primary";

  const mobileLinkClass =
    "!text-text-secondary rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-white/5 hover:!text-primary";

  return (
    <nav className="relative z-30 w-full px-4 pt-2 sm:px-6 lg:px-10">
      <div className="relative flex min-h-[68px] w-full items-center rounded-xl border border-border bg-bg-card px-4 sm:px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="JobRecommender Home"
        >
          <BriefcaseBusiness
            size={30}
            strokeWidth={2.5}
            className="text-primary"
          />

          <h1 className="whitespace-nowrap text-lg font-bold tracking-tight sm:text-[22px]">
            <span className="text-text-primary">Job</span>
            <span className="text-primary">Recommender</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8">

          {/* 1. Home */}
          <Link to="/" className={navLinkClass}>
            Home
          </Link>

          {/* 2. Features */}
          <button
            type="button"
            onClick={() => scrollToSection("features")}
            className={sectionButtonClass}
          >
            Features
          </button>

          {/* 3. Jobs */}
          <Link to="/jobs" className={navLinkClass}>
            Jobs
          </Link>

          {/* 4. About */}
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className={sectionButtonClass}
          >
            About
          </button>

          {/* 5. Contact */}
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className={sectionButtonClass}
          >
            Contact
          </button>

        </div>

        {/* Sign In */}
        <Link
          to="/login"
          onClick={closeMenu}
          className="ml-auto hidden shrink-0 rounded-full border border-primary px-5 py-2 text-[15px] font-medium text-text-primary transition-colors duration-200 hover:bg-primary/10 sm:inline-flex"
        >
          Sign In
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-text-primary transition hover:bg-white/5 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mt-2 rounded-xl border border-border bg-bg-card p-4 shadow-xl lg:hidden">
          <div className="flex flex-col gap-1">

            {/* 1. Home */}
            <Link
              to="/"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Home
            </Link>

            {/* 2. Features */}
            <button
              type="button"
              onClick={() => scrollToSection("features")}
              className={`${mobileLinkClass} text-left`}
            >
              Features
            </button>

            {/* 3. Jobs */}
            <Link
              to="/jobs"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Jobs
            </Link>

            {/* 4. About */}
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className={`${mobileLinkClass} text-left`}
            >
              About
            </button>

            {/* 5. Contact */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={`${mobileLinkClass} text-left`}
            >
              Contact
            </button>

            {/* Sign In */}
            <Link
              to="/login"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center rounded-full border border-primary px-5 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-primary/10"
            >
              Sign In
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default PublicNavbar;