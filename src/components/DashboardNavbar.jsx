import { useState, useEffect, useRef } from "react";
import {
  BriefcaseBusiness,
  Search,
  Bell,
  ChevronDown,
  UserRound,
  Settings,
  LogOut,
  CheckCheck,
  Briefcase,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const profileRef = useRef(null);
  const notificationsRef = useRef(null);
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: "New job matches your skills",
      message: "We found a job that matches your profile.",
      time: "Recently",
      icon: Briefcase,
    },
    {
      id: 2,
      title: "Complete your profile",
      message: "Add your skills to improve recommendations.",
      time: "Today",
      icon: UserRound,
    },
  ];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }

      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const closeDropdowns = () => {
    setProfileOpen(false);
    setNotificationsOpen(false);
  };

  const handleLogout = () => {
    closeDropdowns();
    navigate("/login");
  };

  return (
    <nav className="relative z-40 h-[72px] w-full border-b border-border bg-bg-main">
      <div className="flex h-full items-center px-4 sm:px-6 lg:px-9">

        {/* Logo */}
        <Link
          to="/dashboard"
          onClick={closeDropdowns}
          className="flex shrink-0 items-center gap-2.5"
        >
          <BriefcaseBusiness
            size={34}
            strokeWidth={2.5}
            className="text-primary"
          />

          <h1 className="text-[22px] font-bold tracking-tight">
            <span className="text-text-primary">Job</span>
            <span className="text-primary">Recommender</span>
          </h1>
        </Link>

        {/* Search */}
        <div className="absolute left-1/2 hidden w-[min(500px,38vw)] -translate-x-1/2 md:block">
          <div className="relative">
            <Search
              size={21}
              strokeWidth={2}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
            />

            <input
              type="text"
              placeholder="Search jobs, companies, skills..."
              aria-label="Search jobs, companies, and skills"
              className="h-11 w-full rounded-xl border border-border bg-bg-card pl-12 pr-4 text-sm text-text-primary outline-none placeholder:text-text-secondary transition focus:border-primary"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-3 sm:gap-6">

          {/* Notifications Dropdown */}
          <div className="relative" ref={notificationsRef}>
            <button
              type="button"
              aria-label="Notifications"
              aria-expanded={notificationsOpen}
              onClick={() => {
                setNotificationsOpen((open) => !open);
                setProfileOpen(false);
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition hover:bg-white/5 hover:text-text-primary"
            >
              <Bell size={23} strokeWidth={1.8} />

              <span className="absolute right-1 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-[#111827]">
                {notifications.length}
              </span>
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 top-12 w-[min(340px,calc(100vw-24px))] overflow-hidden rounded-xl border border-border bg-bg-card shadow-2xl">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <h3 className="font-semibold text-text-primary">
                    Notifications
                  </h3>

                  <button
                    type="button"
                    aria-label="Close notifications"
                    onClick={() => setNotificationsOpen(false)}
                    className="rounded-md p-1 text-text-secondary transition hover:bg-white/5 hover:text-text-primary"
                  >
                    <X size={17} />
                  </button>
                </div>

                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => {
                    const Icon = notification.icon;

                    return (
                      <div
                        key={notification.id}
                        className="flex gap-3 border-b border-border/70 px-4 py-4 transition hover:bg-white/[0.03]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon size={19} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-text-primary">
                            {notification.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-text-secondary">
                            {notification.message}
                          </p>

                          <p className="mt-2 text-[11px] text-text-muted">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Link
                  to="/applications"
                  onClick={() => setNotificationsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-primary transition hover:bg-white/[0.03]"
                >
                  <CheckCheck size={16} />
                  View All
                </Link>
              </div>
            )}
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              aria-expanded={profileOpen}
              onClick={() => {
                setProfileOpen((open) => !open);
                setNotificationsOpen(false);
              }}
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-white/5 sm:gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-base font-semibold text-white">
                N
              </div>

              <span className="hidden text-sm font-semibold text-text-primary sm:inline">
                Nikhil
              </span>

              <ChevronDown
                size={18}
                className={`text-text-secondary transition-transform ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-xl border border-border bg-bg-card py-2 shadow-2xl">
                <div className="border-b border-border px-4 py-3">
                  <p className="font-semibold text-text-primary">
                    Nikhil
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Manage your account
                  </p>
                </div>

                <Link
                  to="/profile"
                  onClick={closeDropdowns}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-text-secondary transition hover:bg-white/5 hover:text-primary"
                >
                  <UserRound size={18} />
                  My Profile
                </Link>

                <Link
                  to="/settings"
                  onClick={closeDropdowns}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-text-secondary transition hover:bg-white/5 hover:text-primary"
                >
                  <Settings size={18} />
                  Settings
                </Link>

                <div className="my-1 border-t border-border" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-danger transition hover:bg-danger/10"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;