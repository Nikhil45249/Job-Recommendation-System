import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bookmark,
  Search,
  MapPin,
  Wallet,
  BriefcaseBusiness,
  Building2,
  ArrowUpRight,
  Trash2,
  SlidersHorizontal,
  Sparkles,
  Clock3,
  BookmarkX,
} from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const initialSavedJobs = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Noida, India",
    type: "Internship",
    salary: "₹3–6 LPA",
    match: 94,
    posted: "1 day ago",
    skills: ["React", "JavaScript", "CSS"],
    savedDate: "2026-10-08",
  },
  {
    id: "2",
    title: "Software Developer Intern",
    company: "CodeSphere",
    location: "Bengaluru, India",
    type: "Internship",
    salary: "₹4–8 LPA",
    match: 88,
    posted: "2 days ago",
    skills: ["C++", "DSA", "Git"],
    savedDate: "2026-10-07",
  },
  {
    id: "3",
    title: "Junior Data Analyst",
    company: "DataBridge",
    location: "Remote",
    type: "Full-time",
    salary: "₹4–7 LPA",
    match: 82,
    posted: "3 days ago",
    skills: ["Python", "SQL", "Excel"],
    savedDate: "2026-10-05",
  },
  {
    id: "5",
    title: "Python Developer Intern",
    company: "DataNest",
    location: "Remote",
    type: "Internship",
    salary: "₹3–5 LPA",
    match: 91,
    posted: "1 day ago",
    skills: ["Python", "SQL", "Git"],
    savedDate: "2026-10-04",
  },
];

const SavedJobCard = ({ job, onRemove }) => {
  return (
    <article className="rounded-2xl border border-border-default bg-bg-card p-5 transition hover:border-primary/50 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-default bg-bg-dark text-primary">
            <Building2 size={23} />
          </div>

          <div className="min-w-0">
            <Link
              to={`/jobs/${job.id}`}
              className="text-base font-semibold text-text-primary transition hover:text-primary"
            >
              {job.title}
            </Link>

            <p className="mt-1 text-sm text-text-secondary">
              {job.company}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onRemove(job.id)}
          aria-label={`Remove ${job.title} from saved jobs`}
          title="Remove saved job"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-default text-text-muted transition hover:border-status-danger/50 hover:bg-status-danger/10 hover:text-status-danger"
        >
          <Trash2 size={17} />
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-text-secondary">
        <span className="flex items-center gap-1.5">
          <MapPin size={15} className="text-text-muted" />
          {job.location}
        </span>

        <span className="flex items-center gap-1.5">
          <BriefcaseBusiness size={15} className="text-text-muted" />
          {job.type}
        </span>

        <span className="flex items-center gap-1.5">
          <Wallet size={15} className="text-text-muted" />
          {job.salary}
        </span>
      </div>

      <div className="mt-5 rounded-xl border border-border-default bg-bg-dark/60 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="flex items-center gap-2 text-sm text-text-secondary">
            <Sparkles size={16} className="text-primary" />
            Profile match
          </span>

          <span className="text-sm font-semibold text-status-success">
            {job.match}%
          </span>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-bg-card">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${job.match}%` }}
          />
        </div>
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-medium text-text-muted">
          Required skills
        </p>

        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-border-default bg-bg-dark px-2.5 py-1.5 text-xs text-text-secondary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border-default pt-4">
        <span className="flex items-center gap-1.5 text-xs text-text-muted">
          <Clock3 size={14} />
          Posted {job.posted}
        </span>

        <Link
          to={`/jobs/${job.id}`}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
        >
          View Details
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
};

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState(initialSavedJobs);
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("All");
  const [sortBy, setSortBy] = useState("match");

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return savedJobs
      .filter((job) => {
        const matchesSearch =
          job.title.toLowerCase().includes(query) ||
          job.company.toLowerCase().includes(query) ||
          job.skills.some((skill) =>
            skill.toLowerCase().includes(query)
          );

        const matchesType =
          jobType === "All" || job.type === jobType;

        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        if (sortBy === "match") {
          return b.match - a.match;
        }

        if (sortBy === "salary") {
          const getSalary = (salary) =>
            Number(salary.match(/(\d+(?:\.\d+)?)/)?.[1] || 0);

          return getSalary(b.salary) - getSalary(a.salary);
        }

        return b.savedDate.localeCompare(a.savedDate);
      });
  }, [savedJobs, search, jobType, sortBy]);

  const removeSavedJob = (jobId) => {
    setSavedJobs((currentJobs) =>
      currentJobs.filter((job) => job.id !== jobId)
    );
  };

  const clearFilters = () => {
    setSearch("");
    setJobType("All");
  };

  return (
    <DashboardLayout>
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        {/* Header */}
        <div className="shrink-0 border-b border-border-default px-4 py-5 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-text-muted">
                Dashboard / Saved Jobs
              </p>

              <h1 className="mt-2 text-2xl font-bold text-text-primary sm:text-3xl">
                Saved Jobs
              </h1>

              <p className="mt-2 text-sm text-text-secondary">
                Keep track of opportunities you want to explore.
              </p>
            </div>

            <Link
              to="/jobs"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
            >
              <Search size={17} />
              Explore Jobs
            </Link>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
          <div className="mx-auto max-w-7xl">
            {/* Summary cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border-default bg-bg-card p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-text-secondary">
                    Saved Jobs
                  </p>
                  <Bookmark size={20} className="text-primary" />
                </div>

                <p className="mt-3 text-3xl font-bold text-text-primary">
                  {savedJobs.length}
                </p>

                <p className="mt-2 text-xs text-text-muted">
                  Opportunities in your collection
                </p>
              </div>

              <div className="rounded-2xl border border-border-default bg-bg-card p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-text-secondary">
                    High Match Jobs
                  </p>
                  <Sparkles size={20} className="text-status-success" />
                </div>

                <p className="mt-3 text-3xl font-bold text-text-primary">
                  {savedJobs.filter((job) => job.match >= 85).length}
                </p>

                <p className="mt-2 text-xs text-text-muted">
                  Profile match of 85% or higher
                </p>
              </div>

              <div className="rounded-2xl border border-border-default bg-bg-card p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-text-secondary">
                    Internship Opportunities
                  </p>
                  <BriefcaseBusiness size={20} className="text-secondary" />
                </div>

                <p className="mt-3 text-3xl font-bold text-text-primary">
                  {
                    savedJobs.filter(
                      (job) => job.type === "Internship"
                    ).length
                  }
                </p>

                <p className="mt-2 text-xs text-text-muted">
                  Internships in your saved list
                </p>
              </div>
            </div>

            {/* Search and filters */}
            <section className="mt-7 rounded-2xl border border-border-default bg-bg-card p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-text-primary">
                    Your Collection
                  </h2>

                  <p className="mt-1 text-sm text-text-muted">
                    {filteredJobs.length}{" "}
                    {filteredJobs.length === 1 ? "job" : "jobs"} found
                  </p>
                </div>

                <span className="flex items-center gap-2 text-sm text-text-secondary">
                  <SlidersHorizontal size={17} />
                  Filter and sort
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search title, company, or skill..."
                    className="w-full rounded-xl border border-border-default bg-bg-input py-3 pl-10 pr-4 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary"
                  />
                </div>

                <select
                  value={jobType}
                  onChange={(event) => setJobType(event.target.value)}
                  aria-label="Filter saved jobs by type"
                  className="w-full rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
                >
                  <option value="All">All Job Types</option>
                  <option value="Internship">Internship</option>
                  <option value="Full-time">Full-time</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  aria-label="Sort saved jobs"
                  className="w-full rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
                >
                  <option value="match">Highest Match</option>
                  <option value="salary">Salary Range</option>
                  <option value="recent">Recently Saved</option>
                </select>
              </div>
            </section>

            {/* Saved jobs */}
            {filteredJobs.length > 0 ? (
              <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {filteredJobs.map((job) => (
                  <SavedJobCard
                    key={job.id}
                    job={job}
                    onRemove={removeSavedJob}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-2xl border border-border-default bg-bg-card px-5 py-14 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-bg-dark text-text-muted">
                  <BookmarkX size={30} />
                </div>

                <h2 className="mt-5 text-xl font-semibold text-text-primary">
                  {savedJobs.length === 0
                    ? "No saved jobs yet"
                    : "No matching jobs found"}
                </h2>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-text-secondary">
                  {savedJobs.length === 0
                    ? "Browse available opportunities and save jobs you want to revisit later."
                    : "Try changing your search or filters to find a saved job."}
                </p>

                {savedJobs.length === 0 ? (
                  <Link
                    to="/jobs"
                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
                  >
                    Browse Jobs
                    <ArrowUpRight size={16} />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-5 rounded-xl border border-border-default px-4 py-2.5 text-sm font-medium text-text-primary transition hover:border-primary hover:text-primary"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}

            <p className="mt-5 pb-3 text-xs leading-5 text-text-muted">
              Demo data is used for now. Removed jobs return after a page
              refresh. Saved jobs are not yet synchronized with the All Jobs
              or Job Details pages.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SavedJobs;