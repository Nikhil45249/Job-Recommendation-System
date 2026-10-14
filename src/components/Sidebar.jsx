import {
  LayoutDashboard,
  BriefcaseBusiness,
  FileText,
  Bookmark,
  UserRound,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-4 rounded-lg px-3 py-3.5 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-primary/10 text-primary"
        : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
    }`;

  return (
    <aside className="h-[calc(100vh-92px)] w-[272px] shrink-0 overflow-y-auto rounded-xl border border-border bg-bg-card p-4">

      {/* Profile Section */}
      <div className="border-b border-border pb-5">

        {/* User Info */}
        <div className="flex items-center gap-3 px-1">

          {/* Avatar */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-semibold text-white">
            N
          </div>

          {/* User Details */}
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-text-primary">
              Nikhil
            </h2>

            <p className="mt-0.5 text-xs text-text-secondary">
              B.Tech CSE (Data Science)
            </p>
          </div>

        </div>

        {/* Profile Completion */}
        <div className="mt-5 px-1">

          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-text-primary">
              Profile Completeness
            </span>

            <span className="shrink-0 text-sm font-medium text-text-primary">
              70%
            </span>
          </div>

          {/* Progress Bar */}
          <div
            className="h-2 overflow-hidden rounded-full bg-border"
            role="progressbar"
            aria-label="Profile completeness"
            aria-valuenow={70}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="h-full w-[70%] rounded-full bg-primary transition-all duration-300" />
          </div>

        </div>

        {/* Complete Profile Button */}
        <NavLink
          to="/complete-profile"
          className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-[#111827] transition-colors duration-200 hover:bg-primary-hover"
        >
          Complete Profile
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </NavLink>

      </div>

      {/* Navigation */}
      <nav className="mt-5 space-y-2" aria-label="Dashboard navigation">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          end
          className={navLinkClass}
        >
          <LayoutDashboard size={21} strokeWidth={1.8} />
          <span>Dashboard</span>
        </NavLink>

        {/* All Jobs */}
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `${navLinkClass({ isActive })}`
          }
        >
          <BriefcaseBusiness size={21} strokeWidth={1.8} />
          <span>All Jobs</span>
        </NavLink>

        {/* My Applications */}
        <NavLink
          to="/applications"
          end
          className={navLinkClass}
        >
          <FileText size={21} strokeWidth={1.8} />
          <span>My Applications</span>
        </NavLink>

        {/* Saved Jobs */}
        <NavLink
          to="/saved-jobs"
          end
          className={navLinkClass}
        >
          <Bookmark size={21} strokeWidth={1.8} />
          <span>Saved Jobs</span>
        </NavLink>

        {/* My Profile */}
        <NavLink
          to="/profile"
          end
          className={navLinkClass}
        >
          <UserRound size={21} strokeWidth={1.8} />
          <span>My Profile</span>
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          end
          className={navLinkClass}
        >
          <Settings size={21} strokeWidth={1.8} />
          <span>Settings</span>
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;