
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Bookmark,
  ArrowRight,
  SlidersHorizontal,
  X,
  RotateCcw,
  Clock3,
  Banknote,
  Building2,
  ChevronDown,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

// Demo jobs for frontend development
const jobsData = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Noida, India",
    type: "Internship",
    experience: "Fresher",
    salary: 4.5,
    salaryLabel: "₹3–6 LPA",
    match: 94,
    skills: ["React", "JavaScript", "CSS"],
    logo: "T",
    postedDays: 1,
    description:
      "Build responsive user interfaces and collaborate with the product team.",
  },
  {
    id: "2",
    title: "Software Developer Intern",
    company: "CodeSphere",
    location: "Bengaluru, India",
    type: "Internship",
    experience: "Fresher",
    salary: 6,
    salaryLabel: "₹4–8 LPA",
    match: 88,
    skills: ["C++", "DSA", "Git"],
    logo: "C",
    postedDays: 2,
    description:
      "Work with engineers to develop, test, and improve software applications.",
  },
  {
    id: "3",
    title: "Junior Data Analyst",
    company: "DataBridge",
    location: "Remote",
    type: "Full-time",
    experience: "0–1 years",
    salary: 5,
    salaryLabel: "₹4–7 LPA",
    match: 82,
    skills: ["Python", "SQL", "Excel"],
    logo: "D",
    postedDays: 3,
    description:
      "Analyze datasets and create reports that support business decisions.",
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "PixelWorks",
    location: "Noida, India",
    type: "Full-time",
    experience: "1–3 years",
    salary: 9,
    salaryLabel: "₹7–12 LPA",
    match: 79,
    skills: ["React", "Node.js", "MongoDB"],
    logo: "P",
    postedDays: 4,
    description:
      "Develop and maintain frontend and backend features for web products.",
  },
  {
    id: "5",
    title: "Python Developer Intern",
    company: "DataNest",
    location: "Remote",
    type: "Internship",
    experience: "Fresher",
    salary: 3.5,
    salaryLabel: "₹3–5 LPA",
    match: 91,
    skills: ["Python", "SQL", "Git"],
    logo: "D",
    postedDays: 1,
    description:
      "Assist in building Python applications and working with data APIs.",
  },
  {
    id: "6",
    title: "UI/UX Designer",
    company: "CreativeLabs",
    location: "Delhi, India",
    type: "Full-time",
    experience: "1–3 years",
    salary: 7,
    salaryLabel: "₹5–9 LPA",
    match: 68,
    skills: ["Figma", "Prototyping", "UI Design"],
    logo: "C",
    postedDays: 5,
    description:
      "Design intuitive user experiences and high-quality product interfaces.",
  },
];

const initialFilters = {
  role: "All Roles",
  location: "All Locations",
  experience: "Any Experience",
  salary: "Any Salary",
  type: "All Types",
};

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm font-medium text-text-secondary">
        {label}
      </span>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-lg border border-border-dark bg-bg-input px-3 py-2.5 pr-9 text-sm text-text-primary outline-none transition focus:border-primary"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
        />
      </div>
    </label>
  );
}

function JobCard({ job, isSaved, onToggleSave }) {
  return (
    <article className="rounded-xl border border-border-dark bg-bg-dark p-4 transition duration-200 hover:border-primary/50 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-dark bg-bg-input text-lg font-bold text-primary">
          {job.logo}
        </div>

        <div className="min-w-0 flex-1">
          <Link
            to={`/jobs/${job.id}`}
            className="font-semibold leading-6 text-text-light transition hover:text-primary"
          >
            {job.title}
          </Link>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-text-secondary">
            <Building2 size={14} />
            {job.company}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onToggleSave(job.id)}
          aria-label={isSaved ? "Remove saved job" : "Save job"}
          aria-pressed={isSaved}
          title={isSaved ? "Remove saved job" : "Save job"}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition ${
            isSaved
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-border-dark text-text-muted hover:border-primary/40 hover:text-primary"
          }`}
        >
          <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-secondary">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} />
          {job.location}
        </span>

        <span className="flex items-center gap-1.5">
          <BriefcaseBusiness size={14} />
          {job.type}
        </span>

        <span className="flex items-center gap-1.5">
          <Clock3 size={14} />
          {job.experience}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-text-secondary">
        {job.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-border-dark bg-bg-input px-2.5 py-1 text-xs text-text-secondary"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-5 border-t border-border-dark pt-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs text-text-muted">Expected salary</p>
            <p className="mt-1 font-semibold text-text-light">
              {job.salaryLabel}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-text-muted">Profile match</p>
            <p className="mt-1 text-lg font-bold text-primary">
              {job.match}%
            </p>
          </div>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-bg-input">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${job.match}%` }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xs text-text-muted">
            {job.postedDays === 1
              ? "Posted 1 day ago"
              : `Posted ${job.postedDays} days ago`}
          </span>

          <Link
            to={`/jobs/${job.id}`}
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-3 py-2 text-sm font-medium text-primary transition hover:bg-primary/10"
          >
            View Details
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

const Jobs = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState("match");
  const [savedJobs, setSavedJobs] = useState([]);
  const [showFilters, setShowFilters] = useState(true);

  const updateFilter = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setSearch("");
    setFilters(initialFilters);
    setSortBy("match");
  };

  const toggleSave = (jobId) => {
    setSavedJobs((current) =>
      current.includes(jobId)
        ? current.filter((id) => id !== jobId)
        : [...current, jobId]
    );
  };

  const filteredJobs = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = jobsData.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.skills.some((skill) => skill.toLowerCase().includes(query));

      const matchesRole =
        filters.role === "All Roles" ||
        (filters.role === "Developer" &&
          /developer|engineer/i.test(job.title)) ||
        (filters.role === "Data Analyst" &&
          /data analyst/i.test(job.title)) ||
        (filters.role === "Designer" && /designer/i.test(job.title));

      const matchesLocation =
        filters.location === "All Locations" ||
        (filters.location === "Remote" && job.location === "Remote") ||
        (filters.location === "Noida" && job.location.includes("Noida")) ||
        (filters.location === "Bengaluru" &&
          job.location.includes("Bengaluru")) ||
        (filters.location === "Delhi" && job.location.includes("Delhi"));

      const matchesExperience =
        filters.experience === "Any Experience" ||
        job.experience === filters.experience;

      const matchesSalary =
        filters.salary === "Any Salary" ||
        (filters.salary === "Below ₹5 LPA" && job.salary < 5) ||
        (filters.salary === "₹5–8 LPA" &&
          job.salary >= 5 &&
          job.salary <= 8) ||
        (filters.salary === "Above ₹8 LPA" && job.salary > 8);

      const matchesType =
        filters.type === "All Types" || job.type === filters.type;

      return (
        matchesSearch &&
        matchesRole &&
        matchesLocation &&
        matchesExperience &&
        matchesSalary &&
        matchesType
      );
    });

    if (sortBy === "match") {
      result.sort((a, b) => b.match - a.match);
    } else if (sortBy === "salary") {
      result.sort((a, b) => b.salary - a.salary);
    } else if (sortBy === "recent") {
      result.sort((a, b) => a.postedDays - b.postedDays);
    }

    return result;
  }, [search, filters, sortBy]);

  const hasActiveFilters =
    search.trim() !== "" ||
    Object.keys(initialFilters).some(
      (key) => filters[key] !== initialFilters[key]
    );

  return (
    <DashboardLayout>
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        {/* Page Header */}
        <header className="shrink-0 pb-5">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-primary">
                EXPLORE OPPORTUNITIES
              </p>

              <h1 className="mt-2 text-2xl font-bold text-text-light sm:text-3xl">
                All Jobs
              </h1>

              <p className="mt-2 text-sm text-text-secondary">
                Find opportunities that match your skills and career goals.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-lg border border-border-dark bg-bg-dark px-3 py-2 text-sm text-text-secondary sm:self-auto">
              <Bookmark size={16} className="text-primary" />
              {savedJobs.length} saved
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <div className="relative min-w-0 flex-1">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search job title, company, or skill..."
                aria-label="Search jobs"
                className="w-full rounded-xl border border-border-dark bg-bg-dark py-3.5 pl-11 pr-4 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary"
              />
            </div>

            <button
              type="button"
              onClick={() => setShowFilters((current) => !current)}
              aria-expanded={showFilters}
              className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                showFilters
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border-dark bg-bg-dark text-text-secondary hover:border-primary/40"
              }`}
            >
              <SlidersHorizontal size={17} />
              Filters
            </button>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain pr-1 pb-5">
          {/* Filters */}
          {showFilters && (
            <section className="mb-5 rounded-xl border border-border-dark bg-bg-dark p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-semibold text-text-light">
                    Refine your search
                  </h2>

                  <p className="mt-1 text-xs text-text-muted">
                    Use filters to narrow down the opportunities.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm text-text-secondary transition hover:text-primary"
                >
                  <RotateCcw size={14} />
                  Reset
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <FilterSelect
                  label="Job Role"
                  value={filters.role}
                  onChange={(value) => updateFilter("role", value)}
                  options={[
                    { value: "All Roles", label: "All Roles" },
                    { value: "Developer", label: "Developer" },
                    { value: "Data Analyst", label: "Data Analyst" },
                    { value: "Designer", label: "Designer" },
                  ]}
                />

                <FilterSelect
                  label="Location"
                  value={filters.location}
                  onChange={(value) => updateFilter("location", value)}
                  options={[
                    { value: "All Locations", label: "All Locations" },
                    { value: "Noida", label: "Noida" },
                    { value: "Bengaluru", label: "Bengaluru" },
                    { value: "Delhi", label: "Delhi" },
                    { value: "Remote", label: "Remote" },
                  ]}
                />

                <FilterSelect
                  label="Experience"
                  value={filters.experience}
                  onChange={(value) => updateFilter("experience", value)}
                  options={[
                    { value: "Any Experience", label: "Any Experience" },
                    { value: "Fresher", label: "Fresher" },
                    { value: "0–1 years", label: "0–1 years" },
                    { value: "1–3 years", label: "1–3 years" },
                  ]}
                />

                <FilterSelect
                  label="Salary"
                  value={filters.salary}
                  onChange={(value) => updateFilter("salary", value)}
                  options={[
                    { value: "Any Salary", label: "Any Salary" },
                    { value: "Below ₹5 LPA", label: "Below ₹5 LPA" },
                    { value: "₹5–8 LPA", label: "₹5–8 LPA" },
                    { value: "Above ₹8 LPA", label: "Above ₹8 LPA" },
                  ]}
                />

                <FilterSelect
                  label="Job Type"
                  value={filters.type}
                  onChange={(value) => updateFilter("type", value)}
                  options={[
                    { value: "All Types", label: "All Types" },
                    { value: "Full-time", label: "Full-time" },
                    { value: "Internship", label: "Internship" },
                  ]}
                />
              </div>
            </section>
          )}

          {/* Results Toolbar */}
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-semibold text-text-light">
                Available Opportunities
              </h2>

              <p className="mt-1 text-sm text-text-secondary">
                Showing{" "}
                <span className="font-medium text-primary">
                  {filteredJobs.length}
                </span>{" "}
                {filteredJobs.length === 1 ? "job" : "jobs"}
              </p>
            </div>

            <label className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="shrink-0">Sort by</span>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="appearance-none rounded-lg border border-border-dark bg-bg-dark py-2.5 pl-3 pr-9 text-sm text-text-primary outline-none focus:border-primary"
                >
                  <option value="match">Best Match</option>
                  <option value="recent">Most Recent</option>
                  <option value="salary">Highest Salary</option>
                </select>

                <ChevronDown
                  size={15}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
                />
              </div>
            </label>
          </div>

          {/* Job Results */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isSaved={savedJobs.includes(job.id)}
                  onToggleSave={toggleSave}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-border-dark bg-bg-dark px-5 py-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-bg-input text-text-muted">
                <Search size={24} />
              </div>

              <h3 className="mt-4 font-semibold text-text-light">
                No jobs found
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-text-secondary">
                Try a different search term or reset your filters to see more
                opportunities.
              </p>

              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-[#111214] transition hover:bg-primary-hover"
              >
                <X size={16} />
                Clear Search and Filters
              </button>
            </div>
          )}

          {/* Demo Data Notice */}
          <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-text-muted">
            <Banknote size={15} className="mt-0.5 shrink-0" />
            Job listings, salary ranges, and match percentages are sample data
            for the frontend preview.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Jobs;
