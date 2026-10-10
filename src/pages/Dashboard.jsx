
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Send,
  Bookmark,
  UserRoundCheck,
  MapPin,
  Clock3,
  ArrowRight,
  FileText,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

import DashboardLayout from "../layouts/DashboardLayout";

// Static dashboard data
const stats = [
  {
    label: "Recommended Jobs",
    value: "24",
    description: "Based on your profile",
    icon: BriefcaseBusiness,
    iconColor: "text-primary",
  },
  {
    label: "Applications",
    value: "8",
    description: "Jobs you've applied to",
    icon: Send,
    iconColor: "text-secondary",
  },
  {
    label: "Saved Jobs",
    value: "6",
    description: "Jobs saved for later",
    icon: Bookmark,
    iconColor: "text-primary",
  },
  {
    label: "Profile Completion",
    value: "70%",
    description: "Complete your profile",
    icon: UserRoundCheck,
    iconColor: "text-success",
  },
];

const recommendedJobs = [
  {
    id: "1",
    role: "Frontend Developer Intern",
    company: "TechNova",
    location: "Noida, India",
    type: "Internship",
    match: 94,
    skills: ["React", "JavaScript", "CSS"],
    logo: "T",
  },
  {
    id: "2",
    role: "Software Developer Intern",
    company: "CodeSphere",
    location: "Bengaluru, India",
    type: "Full-time Internship",
    match: 88,
    skills: ["C++", "DSA", "Git"],
    logo: "C",
  },
  {
    id: "3",
    role: "Junior Data Analyst",
    company: "DataBridge",
    location: "Remote",
    type: "Full-time",
    match: 82,
    skills: ["Python", "SQL", "Excel"],
    logo: "D",
  },
];

const recentActivity = [
  {
    id: 1,
    title: "Application submitted",
    description: "Frontend Developer Intern",
    time: "2 hours ago",
    icon: Send,
  },
  {
    id: 2,
    title: "Job saved",
    description: "Software Developer Intern",
    time: "Yesterday",
    icon: Bookmark,
  },
  {
    id: 3,
    title: "Profile updated",
    description: "Technical skills updated",
    time: "2 days ago",
    icon: CheckCircle2,
  },
];

// Statistics card
function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <div className="rounded-xl border border-border-dark bg-bg-dark p-4 transition hover:border-primary/40 xl:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-text-secondary">{stat.label}</p>

          <h3 className="mt-3 text-3xl font-bold text-text-light">
            {stat.value}
          </h3>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-input">
          <Icon size={21} className={stat.iconColor} />
        </div>
      </div>

      <p className="mt-3 text-xs text-text-muted">{stat.description}</p>
    </div>
  );
}

// Recommended job card
function JobCard({ job }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border-dark bg-bg-dark p-4 transition hover:border-primary/40 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-dark bg-bg-input text-lg font-bold text-primary">
          {job.logo}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="break-words font-semibold leading-5 text-text-light">
            {job.role}
          </h3>

          <p className="mt-1 text-sm text-text-secondary">{job.company}</p>
        </div>

        <button
          type="button"
          aria-label={`Save ${job.role}`}
          title="Save job (UI preview)"
          className="shrink-0 rounded-lg p-2 text-text-muted transition hover:bg-bg-input hover:text-primary"
        >
          <Bookmark size={19} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-secondary">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} />
          {job.location}
        </span>

        <span className="flex items-center gap-1.5">
          <Clock3 size={14} />
          {job.type}
        </span>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-xs text-text-secondary">Profile match</span>

          <span className="text-sm font-semibold text-primary">
            {job.match}%
          </span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-bg-input">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${job.match}%` }}
          />
        </div>
      </div>

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

      <Link
        to={`/jobs/${job.id}`}
        className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-primary/40 px-4 py-2.5 text-sm font-medium text-primary transition hover:bg-primary/10"
      >
        View Job Details
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}

const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Dashboard Root: fixed available height */}
      <div className="grid h-full min-h-0 w-full grid-rows-[auto_auto_minmax(0,1fr)] gap-5 overflow-hidden">
        {/* Fixed Welcome Section */}
        <section className="flex flex-col justify-between gap-4 rounded-xl border border-border-dark bg-bg-dark p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <p className="text-sm font-medium text-primary">
              YOUR CAREER OVERVIEW
            </p>

            <h1 className="mt-2 text-2xl font-bold text-text-light sm:text-3xl">
              Welcome back, Nikhil!
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-text-secondary">
              Explore opportunities selected for your skills and career goals.
            </p>
          </div>

          <Link
            to="/jobs"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-[#111214] transition hover:bg-primary-hover"
          >
            Explore Jobs
            <ArrowRight size={17} />
          </Link>
        </section>

        {/* Fixed Overview Statistics */}
        <section className="min-h-0">
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-text-light">
              Your Overview
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              A quick look at your job search progress.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 2xl:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </section>

        {/* Only this section scrolls */}
        <section className="min-h-0 min-w-0 overflow-x-hidden overflow-y-auto overscroll-y-contain pr-2 pb-5">
          {/* Recommended for You Heading */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-text-light">
                Recommended for You
              </h2>

              <p className="mt-1 text-sm text-text-secondary">
                Opportunities that may fit your profile.
              </p>
            </div>

            <Link
              to="/jobs"
              className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition hover:text-primary-hover"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Recommended Job Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {recommendedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Lower Dashboard Sections */}
          <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
            {/* Profile Completion */}
            <section className="rounded-xl border border-border-dark bg-bg-dark p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <TrendingUp size={22} className="text-primary" />
                </div>

                <div>
                  <h2 className="font-semibold text-text-light">
                    Complete Your Profile
                  </h2>

                  <p className="mt-1 text-xs text-text-secondary">
                    Improve your job recommendations.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  Profile completeness
                </span>

                <span className="text-sm font-semibold text-primary">
                  70%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-bg-input">
                <div className="h-full w-[70%] rounded-full bg-primary" />
              </div>

              <Link
                to="/complete-profile"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-hover"
              >
                Update Profile
                <ArrowRight size={16} />
              </Link>
            </section>

            {/* Recent Activity */}
            <section className="rounded-xl border border-border-dark bg-bg-dark p-5">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                  <FileText size={21} className="text-secondary" />
                </div>

                <div>
                  <h2 className="font-semibold text-text-light">
                    Recent Activity
                  </h2>

                  <p className="mt-1 text-xs text-text-secondary">
                    A summary of your recent actions.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;

                  return (
                    <div
                      key={activity.id}
                      className="flex items-start gap-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bg-input">
                        <Icon size={17} className="text-primary" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-text-light">
                          {activity.title}
                        </p>

                        <p className="mt-1 text-xs text-text-secondary">
                          {activity.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs text-text-muted">
                        {activity.time}
                      </span>
                    </div>
                  );
                })}
              </div>

              <Link
                to="/applications"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary-hover"
              >
                View Applications
                <ArrowRight size={16} />
              </Link>
            </section>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
