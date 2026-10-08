import {
  BriefcaseBusiness,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

const DashboardNavbar = () => {
  return (
    <nav className="h-[72px] w-full border-b border-border bg-bg-main">
      <div className="flex h-full items-center px-9">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <BriefcaseBusiness
            size={34}
            strokeWidth={2.5}
            className="text-primary"
          />

          <h1 className="text-[22px] font-bold tracking-tight">
            <span className="text-text-primary">Job</span>
            <span className="text-primary">Recommender</span>
          </h1>
        </div>

        {/* Search */}
        <div className="absolute left-1/2 w-[500px] -translate-x-1/2">
          <div className="relative">
            <Search
              size={21}
              strokeWidth={2}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
            />

            <input
              type="text"
              placeholder="Search jobs, companies, skills..."
              className="h-11 w-full rounded-xl border border-border bg-bg-card pl-12 pr-4 text-sm text-text-primary outline-none placeholder:text-text-secondary transition focus:border-primary"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center gap-6">

          {/* Notification */}
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition hover:bg-white/5 hover:text-text-primary"
          >
            <Bell size={23} strokeWidth={1.8} />

            <span className="absolute right-1 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-bold text-[#111827]">
              1
            </span>
          </button>

          {/* User */}
          <button
            type="button"
            className="flex items-center gap-3 rounded-lg px-2 py-1.5 transition hover:bg-white/5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-base font-semibold text-white">
              N
            </div>

            <span className="text-sm font-semibold text-text-primary">
              Nikhil
            </span>

            <ChevronDown
              size={18}
              className="text-text-secondary"
            />
          </button>

        </div>

      </div>
    </nav>
  );
};

export default DashboardNavbar;