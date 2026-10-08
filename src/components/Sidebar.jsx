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
  return (
    <aside className="h-[calc(100vh-92px)] w-[272px] shrink-0 rounded-xl border border-border bg-bg-card p-4">

      {/* Profile Section */}
      <div className="border-b border-border pb-5">

        {/* User Info */}
        <div className="flex items-center gap-3 px-1">
          
          {/* Avatar */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-semibold text-white">
            N
          </div>

          {/* User Details */}
          <div>
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

          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium text-text-primary">
              Profile Completeness
            </span>

            <span className="text-sm font-medium text-text-primary">
              70%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 overflow-hidden rounded-full bg-border">
            <div className="h-full w-[70%] rounded-full bg-primary" />
          </div>

        </div>

        {/* Complete Profile Button */}
        <NavLink
          to="/complete-profile"
          className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-[#111827] transition hover:bg-primary-hover"
        >
          Complete Profile →
        </NavLink>

      </div>

      {/* Navigation */}
      <nav className="mt-5 space-y-2">

        {/* Dashboard */}
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg px-3 py-3.5 text-sm font-medium transition ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`
          }
        >
          <LayoutDashboard size={21} strokeWidth={1.8} />
          <span>Dashboard</span>
        </NavLink>

        {/* All Jobs */}
        <NavLink
          to="/jobs"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg px-3 py-3.5 text-sm font-medium transition ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`
          }
        >
          <BriefcaseBusiness size={21} strokeWidth={1.8} />
          <span>All Jobs</span>
        </NavLink>

        {/* My Applications */}
        <NavLink
          to="/applications"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg px-3 py-3.5 text-sm font-medium transition ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`
          }
        >
          <FileText size={21} strokeWidth={1.8} />
          <span>My Applications</span>
        </NavLink>

        {/* Saved Jobs */}
        <NavLink
          to="/saved-jobs"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg px-3 py-3.5 text-sm font-medium transition ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`
          }
        >
          <Bookmark size={21} strokeWidth={1.8} />
          <span>Saved Jobs</span>
        </NavLink>

        {/* My Profile */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg px-3 py-3.5 text-sm font-medium transition ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`
          }
        >
          <UserRound size={21} strokeWidth={1.8} />
          <span>My Profile</span>
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-4 rounded-lg px-3 py-3.5 text-sm font-medium transition ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`
          }
        >
          <Settings size={21} strokeWidth={1.8} />
          <span>Settings</span>
        </NavLink>

      </nav>

    </aside>
  );
};

export default Sidebar;