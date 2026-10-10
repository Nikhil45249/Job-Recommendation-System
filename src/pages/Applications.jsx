import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BriefcaseBusiness,
  Clock3,
  CheckCircle2,
  XCircle,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  SlidersHorizontal,
  Building2,
  FileText,
  CircleDot,
} from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const applications = [
  {
    id: "1",
    jobId: "1",
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Noida, India",
    type: "Internship",
    salary: "₹3–6 LPA",
    appliedDate: "2026-10-08",
    status: "Under Review",
  },
  {
    id: "2",
    jobId: "2",
    title: "Software Developer Intern",
    company: "CodeSphere",
    location: "Bengaluru, India",
    type: "Internship",
    salary: "₹4–8 LPA",
    appliedDate: "2026-10-06",
    status: "Shortlisted",
  },
  {
    id: "3",
    jobId: "3",
    title: "Junior Data Analyst",
    company: "DataBridge",
    location: "Remote",
    type: "Full-time",
    salary: "₹4–7 LPA",
    appliedDate: "2026-10-04",
    status: "Applied",
  },
  {
    id: "4",
    jobId: "4",
    title: "Full Stack Developer",
    company: "PixelWorks",
    location: "Noida, India",
    type: "Full-time",
    salary: "₹7–12 LPA",
    appliedDate: "2026-10-02",
    status: "Rejected",
  },
  {
    id: "5",
    jobId: "5",
    title: "Python Developer Intern",
    company: "DataNest",
    location: "Remote",
    type: "Internship",
    salary: "₹3–5 LPA",
    appliedDate: "2026-09-30",
    status: "Under Review",
  },
  {
    id: "6",
    jobId: "6",
    title: "UI/UX Designer",
    company: "CreativeLabs",
    location: "Delhi, India",
    type: "Full-time",
    salary: "₹5–9 LPA",
    appliedDate: "2026-09-28",
    status: "Shortlisted",
  },
];

const statusStyles = {
  Applied: {
    badge: "border-primary/30 bg-primary/10 text-primary",
    dot: "bg-primary",
    icon: CircleDot,
  },
  "Under Review": {
    badge: "border-status-warning/30 bg-status-warning/10 text-status-warning",
    dot: "bg-status-warning",
    icon: Clock3,
  },
  Shortlisted: {
    badge: "border-status-success/30 bg-status-success/10 text-status-success",
    dot: "bg-status-success",
    icon: CheckCircle2,
  },
  Rejected: {
    badge: "border-status-danger/30 bg-status-danger/10 text-status-danger",
    dot: "bg-status-danger",
    icon: XCircle,
  },
};

const formatDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const SummaryCard = ({ title, value, icon: Icon, description }) => (
  <div className="rounded-2xl border border-border-default bg-bg-card p-5">
    <div className="flex items-start justify-between gap-3">
      <div>
        <p className="text-sm text-text-secondary">{title}</p>
        <p className="mt-3 text-3xl font-bold text-text-primary">{value}</p>
      </div>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-dark text-primary">
        <Icon size={21} />
      </div>
    </div>
    <p className="mt-3 text-xs text-text-muted">{description}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const style = statusStyles[status] || statusStyles.Applied;
  const Icon = style.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-medium ${style.badge}`}
    >
      <Icon size={13} />
      {status}
    </span>
  );
};

const Applications = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const counts = useMemo(
    () => ({
      total: applications.length,
      applied: applications.filter((app) => app.status === "Applied").length,
      review: applications.filter((app) => app.status === "Under Review").length,
      shortlisted: applications.filter(
        (app) => app.status === "Shortlisted"
      ).length,
      rejected: applications.filter((app) => app.status === "Rejected").length,
    }),
    []
  );

  const filteredApplications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return applications
      .filter((app) => {
        const matchesSearch =
          app.title.toLowerCase().includes(query) ||
          app.company.toLowerCase().includes(query) ||
          app.location.toLowerCase().includes(query);

        const matchesStatus =
          statusFilter === "All" || app.status === statusFilter;

        return matchesSearch && matchesStatus;
      })
      .sort((a, b) =>
        sortOrder === "newest"
          ? b.appliedDate.localeCompare(a.appliedDate)
          : a.appliedDate.localeCompare(b.appliedDate)
      );
  }, [search, statusFilter, sortOrder]);

  return (
    <DashboardLayout>
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border-default px-4 py-5 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-text-muted">
                Dashboard / My Applications
              </p>
              <h1 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
                My Applications
              </h1>
              <p className="mt-2 text-sm text-text-secondary">
                Track your job applications and follow their progress.
              </p>
            </div>

            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
            >
              <Search size={17} />
              Find More Jobs
            </Link>
          </div>
        </div>

        {/* Scrollable page content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
          <div className="mx-auto max-w-7xl">
            {/* Summary */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <SummaryCard
                title="Total Applications"
                value={counts.total}
                icon={BriefcaseBusiness}
                description="All submitted demo applications"
              />
              <SummaryCard
                title="Under Review"
                value={counts.review}
                icon={Clock3}
                description="Applications awaiting review"
              />
              <SummaryCard
                title="Shortlisted"
                value={counts.shortlisted}
                icon={CheckCircle2}
                description="Applications shortlisted"
              />
              <SummaryCard
                title="Rejected"
                value={counts.rejected}
                icon={XCircle}
                description="Applications not selected"
              />
            </div>

            {/* Application list */}
            <section className="mt-7 overflow-hidden rounded-2xl border border-border-default bg-bg-card">
              <div className="border-b border-border-default p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold text-text-primary">
                      All Applications
                    </h2>
                    <p className="mt-1 text-sm text-text-muted">
                      {filteredApplications.length}{" "}
                      {filteredApplications.length === 1
                        ? "application"
                        : "applications"}{" "}
                      found
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-text-secondary">
                    <SlidersHorizontal size={16} />
                    Manage your applications
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
                  {/* Search */}
                  <div className="relative md:col-span-1">
                    <Search
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                    />
                    <input
                      type="text"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search job or company..."
                      className="w-full rounded-xl border border-border-default bg-bg-input py-3 pl-10 pr-4 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary"
                    />
                  </div>

                  {/* Status filter */}
                  <select
                    value={statusFilter}
                    onChange={(event) => setStatusFilter(event.target.value)}
                    className="w-full rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
                    aria-label="Filter applications by status"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Applied">Applied</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Rejected">Rejected</option>
                  </select>

                  {/* Sort */}
                  <select
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    className="w-full rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
                    aria-label="Sort applications by date"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>

                {/* Quick status filters */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {["All", "Applied", "Under Review", "Shortlisted", "Rejected"].map(
                    (status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => setStatusFilter(status)}
                        className={`rounded-lg px-3 py-2 text-xs font-medium transition ${
                          statusFilter === status
                            ? "bg-primary text-bg-outer"
                            : "border border-border-default bg-bg-dark text-text-secondary hover:border-primary/60 hover:text-text-primary"
                        }`}
                      >
                        {status}
                        {status === "All" && (
                          <span className="ml-2">{counts.total}</span>
                        )}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Desktop table */}
              <div className="hidden overflow-x-auto md:block">
                <table className="w-full min-w-[800px] text-left">
                  <thead>
                    <tr className="border-b border-border-default bg-bg-dark/60 text-xs uppercase tracking-wider text-text-muted">
                      <th className="px-6 py-4 font-medium">Job & Company</th>
                      <th className="px-5 py-4 font-medium">Applied Date</th>
                      <th className="px-5 py-4 font-medium">Salary</th>
                      <th className="px-5 py-4 font-medium">Status</th>
                      <th className="px-5 py-4 text-right font-medium">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredApplications.map((app) => (
                      <tr
                        key={app.id}
                        className="border-b border-border-default/70 transition last:border-0 hover:bg-bg-dark/40"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-start gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-default bg-bg-dark text-primary">
                              <Building2 size={21} />
                            </div>
                            <div>
                              <p className="font-semibold text-text-primary">
                                {app.title}
                              </p>
                              <p className="mt-1 text-sm text-text-secondary">
                                {app.company}
                              </p>
                              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                                <span className="flex items-center gap-1">
                                  <MapPin size={13} />
                                  {app.location}
                                </span>
                                <span>{app.type}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-5">
                          <span className="flex items-center gap-2 text-sm text-text-secondary">
                            <CalendarDays
                              size={15}
                              className="text-text-muted"
                            />
                            {formatDate(app.appliedDate)}
                          </span>
                        </td>

                        <td className="px-5 py-5 text-sm text-text-secondary">
                          {app.salary}
                        </td>

                        <td className="px-5 py-5">
                          <StatusBadge status={app.status} />
                        </td>

                        <td className="px-5 py-5 text-right">
                          <Link
                            to={`/jobs/${app.jobId}`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border-default px-3 py-2 text-xs font-medium text-text-primary transition hover:border-primary hover:text-primary"
                          >
                            View Job
                            <ArrowUpRight size={14} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile application cards */}
              <div className="space-y-3 p-4 md:hidden">
                {filteredApplications.map((app) => (
                  <article
                    key={app.id}
                    className="rounded-xl border border-border-default bg-bg-dark/40 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-default bg-bg-card text-primary">
                        <Building2 size={21} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-text-primary">
                          {app.title}
                        </h3>
                        <p className="mt-1 text-sm text-text-secondary">
                          {app.company}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {app.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {formatDate(app.appliedDate)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FileText size={14} />
                        {app.salary}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border-default pt-4">
                      <StatusBadge status={app.status} />
                      <Link
                        to={`/jobs/${app.jobId}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-hover"
                      >
                        View Job
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Empty state */}
              {filteredApplications.length === 0 && (
                <div className="px-5 py-14 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-bg-dark text-text-muted">
                    <Search size={25} />
                  </div>
                  <h3 className="mt-4 font-semibold text-text-primary">
                    No applications found
                  </h3>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-text-secondary">
                    Try another search term or change the status filter.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setStatusFilter("All");
                    }}
                    className="mt-5 rounded-xl border border-border-default px-4 py-2.5 text-sm font-medium text-text-primary transition hover:border-primary hover:text-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </section>

            {/* Information note */}
            <div className="mt-5 flex items-start gap-3 rounded-xl border border-border-default bg-bg-card p-4">
              <FileText
                size={19}
                className="mt-0.5 shrink-0 text-primary"
              />
              <div>
                <p className="text-sm font-medium text-text-primary">
                  Application tracking
                </p>
                <p className="mt-1 text-xs leading-5 text-text-secondary">
                  These are sample application records for the frontend.
                  Application statuses and dates are illustrative and are not
                  connected to real employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Applications;