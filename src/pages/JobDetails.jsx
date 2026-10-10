
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Bookmark,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  Share2,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const jobs = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Noida, India",
    type: "Internship",
    experience: "Fresher",
    salary: "₹3–6 LPA",
    match: 94,
    posted: "1 day ago",
    skills: ["React", "JavaScript", "CSS"],
    description:
      "Join our frontend team to build responsive, accessible, and user-friendly web applications. You will work with experienced developers and contribute to real-world products.",
    responsibilities: [
      "Build responsive interfaces using React and JavaScript.",
      "Create reusable components and maintain clean code.",
      "Collaborate with designers and backend developers.",
      "Test and debug UI features across different devices.",
    ],
    requirements: [
      "Knowledge of HTML, CSS, and JavaScript.",
      "Basic understanding of React and component-based development.",
      "Familiarity with Git and GitHub.",
      "Strong problem-solving and communication skills.",
    ],
    benefits: ["Mentorship", "Hands-on projects", "Internship certificate"],
  },
  {
    id: "2",
    title: "Software Developer Intern",
    company: "CodeSphere",
    location: "Bengaluru, India",
    type: "Internship",
    experience: "Fresher",
    salary: "₹4–8 LPA",
    match: 88,
    posted: "2 days ago",
    skills: ["C++", "DSA", "Git"],
    description:
      "Work with our engineering team to develop, test, and improve software solutions. This role is suitable for candidates with strong programming fundamentals and an interest in software engineering.",
    responsibilities: [
      "Implement and test software features.",
      "Write readable, maintainable, and efficient code.",
      "Debug issues and help improve application performance.",
      "Collaborate with the team using Git.",
    ],
    requirements: [
      "Good understanding of programming fundamentals.",
      "Knowledge of data structures and algorithms.",
      "Experience with C++ or another programming language.",
      "Willingness to learn new tools and technologies.",
    ],
    benefits: ["Technical mentorship", "Code reviews", "Project experience"],
  },
  {
    id: "3",
    title: "Junior Data Analyst",
    company: "DataBridge",
    location: "Remote",
    type: "Full-time",
    experience: "0–1 years",
    salary: "₹4–7 LPA",
    match: 82,
    posted: "3 days ago",
    skills: ["Python", "SQL", "Excel"],
    description:
      "Help transform raw data into useful insights. You will work with datasets, prepare reports, and support business decisions through data analysis and visualization.",
    responsibilities: [
      "Clean and analyze datasets.",
      "Write SQL queries to retrieve and organize data.",
      "Prepare reports and dashboards.",
      "Communicate insights to relevant stakeholders.",
    ],
    requirements: [
      "Knowledge of Python and SQL.",
      "Comfortable working with spreadsheets.",
      "Basic understanding of statistics.",
      "Attention to detail and analytical thinking.",
    ],
    benefits: ["Remote work", "Learning opportunities", "Team collaboration"],
  },
  {
    id: "4",
    title: "Full Stack Developer",
    company: "PixelWorks",
    location: "Noida, India",
    type: "Full-time",
    experience: "1–3 years",
    salary: "₹7–12 LPA",
    match: 79,
    posted: "4 days ago",
    skills: ["React", "Node.js", "MongoDB"],
    description:
      "Develop and maintain web applications across the frontend and backend. Work with a cross-functional team to deliver reliable and scalable product features.",
    responsibilities: [
      "Build frontend features using React.",
      "Develop backend APIs using Node.js.",
      "Work with databases and data models.",
      "Troubleshoot bugs and improve application quality.",
    ],
    requirements: [
      "Experience with React and JavaScript.",
      "Knowledge of Node.js and REST APIs.",
      "Familiarity with MongoDB.",
      "Understanding of Git and web application architecture.",
    ],
    benefits: ["Product ownership", "Collaborative team", "Career growth"],
  },
  {
    id: "5",
    title: "Python Developer Intern",
    company: "DataNest",
    location: "Remote",
    type: "Internship",
    experience: "Fresher",
    salary: "₹3–5 LPA",
    match: 91,
    posted: "1 day ago",
    skills: ["Python", "SQL", "Git"],
    description:
      "Contribute to Python-based applications and data-focused tools. You will help implement features, write tests, and learn development practices from the engineering team.",
    responsibilities: [
      "Write and maintain Python code.",
      "Work with databases using SQL.",
      "Test, debug, and document application features.",
      "Use Git for version control.",
    ],
    requirements: [
      "Fundamentals of Python programming.",
      "Basic knowledge of SQL.",
      "Understanding of functions, modules, and data structures.",
      "Curiosity and a willingness to learn.",
    ],
    benefits: ["Remote internship", "Mentorship", "Practical experience"],
  },
  {
    id: "6",
    title: "UI/UX Designer",
    company: "CreativeLabs",
    location: "Delhi, India",
    type: "Full-time",
    experience: "1–3 years",
    salary: "₹5–9 LPA",
    match: 68,
    posted: "5 days ago",
    skills: ["Figma", "Prototyping", "UI Design"],
    description:
      "Design intuitive digital experiences by turning user needs into clear user flows, wireframes, and polished interface designs.",
    responsibilities: [
      "Create wireframes, mockups, and interactive prototypes.",
      "Design consistent and accessible interfaces.",
      "Collaborate with product managers and developers.",
      "Iterate on designs using feedback and usability insights.",
    ],
    requirements: [
      "Knowledge of UI/UX design principles.",
      "Familiarity with Figma and prototyping.",
      "Understanding of responsive design.",
      "A portfolio demonstrating design work.",
    ],
    benefits: ["Creative ownership", "Team collaboration", "Design mentorship"],
  },
];

const Section = ({ title, children }) => (
  <section className="rounded-2xl border border-border-default bg-bg-card p-5 sm:p-6">
    <h2 className="mb-4 text-lg font-semibold text-text-primary">{title}</h2>
    {children}
  </section>
);

const BulletList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-text-secondary">
        <CheckCircle2
          size={17}
          className="mt-1 shrink-0 text-status-success"
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((item) => item.id === id);

  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);
  const [showApplyMessage, setShowApplyMessage] = useState(false);

  if (!job) {
    return (
      <DashboardLayout>
        <div className="flex h-full min-h-0 items-center justify-center overflow-y-auto p-6">
          <div className="max-w-md text-center">
            <BriefcaseBusiness
              size={44}
              className="mx-auto mb-4 text-text-muted"
            />
            <h1 className="text-2xl font-semibold text-text-primary">
              Job not found
            </h1>
            <p className="mt-2 text-sm text-text-secondary">
              This job may have been removed or the link may be incorrect.
            </p>
            <Link
              to="/jobs"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
            >
              <ArrowLeft size={17} />
              Back to All Jobs
            </Link>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  const similarJobs = jobs
    .filter(
      (item) =>
        item.id !== job.id &&
        item.skills.some((skill) =>
          job.skills.some(
            (jobSkill) => jobSkill.toLowerCase() === skill.toLowerCase()
          )
        )
    )
    .slice(0, 3);

  const handleApply = () => {
    if (applied) return;
    setApplied(true);
    setShowApplyMessage(true);
  };

  return (
    <DashboardLayout>
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        {/* Page header */}
        <div className="shrink-0 border-b border-border-default px-4 py-4 sm:px-6">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-primary"
          >
            <ArrowLeft size={17} />
            Back to All Jobs
          </Link>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm text-text-muted">Jobs / Job Details</p>
              <h1 className="mt-1 text-2xl font-bold text-text-primary sm:text-3xl">
                Job Details
              </h1>
            </div>
            <button
              type="button"
              onClick={() => {
                const url = window.location.href;
                if (navigator.clipboard?.writeText) {
                  navigator.clipboard.writeText(url);
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-border-default px-4 py-2.5 text-sm text-text-secondary transition hover:border-primary hover:text-primary"
            >
              <Share2 size={16} />
              Share job
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
          <div className="mx-auto max-w-6xl">
            {/* Job summary */}
            <section className="rounded-2xl border border-border-default bg-bg-card p-5 sm:p-7">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border-default bg-bg-dark">
                    <Building2 size={27} className="text-primary" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-status-success/30 bg-status-success/10 px-3 py-1 text-xs font-medium text-status-success">
                        {job.match}% profile match
                      </span>
                      <span className="rounded-full bg-bg-dark px-3 py-1 text-xs text-text-secondary">
                        {job.type}
                      </span>
                    </div>

                    <h2 className="mt-3 text-2xl font-bold leading-tight text-text-primary sm:text-3xl">
                      {job.title}
                    </h2>
                    <p className="mt-2 font-medium text-text-secondary">
                      {job.company}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-sm text-text-muted">
                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <BriefcaseBusiness size={16} />
                        {job.experience}
                      </span>
                      <span className="flex items-center gap-2">
                        <Wallet size={16} />
                        {job.salary}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock3 size={16} />
                        Posted {job.posted}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3 lg:flex-col">
                  <button
                    type="button"
                    onClick={() => setSaved((current) => !current)}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                      saved
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border-strong text-text-primary hover:border-primary hover:text-primary"
                    }`}
                  >
                    <Bookmark size={17} fill={saved ? "currentColor" : "none"} />
                    {saved ? "Saved" : "Save Job"}
                  </button>

                  <button
                    type="button"
                    onClick={handleApply}
                    disabled={applied}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {applied ? "Application Recorded" : "Apply Now"}
                    {applied ? (
                      <CheckCircle2 size={17} />
                    ) : (
                      <ArrowUpRight size={17} />
                    )}
                  </button>
                </div>
              </div>

              {showApplyMessage && (
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-status-success/30 bg-status-success/10 p-4">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-status-success"
                  />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      Demo application recorded
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      This is a frontend demonstration only. No application has
                      been sent to the company or saved to a backend.
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Main content and sidebar */}
            <div className="mt-6 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <Section title="About the role">
                  <p className="text-sm leading-7 text-text-secondary">
                    {job.description}
                  </p>
                </Section>

                <Section title="Key responsibilities">
                  <BulletList items={job.responsibilities} />
                </Section>

                <Section title="Requirements">
                  <BulletList items={job.requirements} />
                </Section>

                <Section title="Skills required">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border-default bg-bg-dark px-3 py-2 text-sm text-text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Section>
              </div>

              <aside className="space-y-6">
                {/* Match card */}
                <section className="rounded-2xl border border-border-default bg-bg-card p-5">
                  <div className="flex items-center gap-2">
                    <Sparkles size={19} className="text-primary" />
                    <h2 className="font-semibold text-text-primary">
                      Your profile match
                    </h2>
                  </div>

                  <div className="mt-5 flex items-center gap-4">
                    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[5px] border-primary/30">
                      <div className="absolute inset-0 rounded-full border-[5px] border-primary border-r-transparent border-b-transparent" />
                      <span className="text-xl font-bold text-text-primary">
                        {job.match}%
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-text-primary">
                        {job.match >= 90
                          ? "Excellent match!"
                          : job.match >= 80
                            ? "Strong match"
                            : "Potential match"}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-text-muted">
                        Based on the demo profile and job skills.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-border-default pt-4">
                    <p className="mb-3 text-sm font-medium text-text-primary">
                      Matching skills
                    </p>
                    <div className="space-y-3">
                      {job.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-status-success"
                          />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Job information */}
                <section className="rounded-2xl border border-border-default bg-bg-card p-5">
                  <h2 className="font-semibold text-text-primary">
                    Job overview
                  </h2>

                  <div className="mt-5 space-y-5">
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-dark text-primary">
                        <Wallet size={19} />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">Salary range</p>
                        <p className="mt-1 text-sm font-medium text-text-primary">
                          {job.salary}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-dark text-primary">
                        <BriefcaseBusiness size={19} />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">Job type</p>
                        <p className="mt-1 text-sm font-medium text-text-primary">
                          {job.type}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-dark text-primary">
                        <CalendarDays size={19} />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">Date posted</p>
                        <p className="mt-1 text-sm font-medium text-text-primary">
                          {job.posted}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-dark text-primary">
                        <FileText size={19} />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">Experience</p>
                        <p className="mt-1 text-sm font-medium text-text-primary">
                          {job.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Benefits */}
                <section className="rounded-2xl border border-border-default bg-bg-card p-5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={19} className="text-primary" />
                    <h2 className="font-semibold text-text-primary">
                      What you'll gain
                    </h2>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="rounded-lg bg-bg-dark px-3 py-2 text-xs text-text-secondary"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </section>
              </aside>
            </div>

            {/* Similar jobs */}
            {similarJobs.length > 0 && (
              <section className="mt-8 pb-4">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-text-primary">
                    Similar jobs
                  </h2>
                  <p className="mt-1 text-sm text-text-secondary">
                    Other opportunities with overlapping skills.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {similarJobs.map((similarJob) => (
                    <Link
                      key={similarJob.id}
                      to={`/jobs/${similarJob.id}`}
                      className="rounded-2xl border border-border-default bg-bg-card p-5 transition hover:-translate-y-0.5 hover:border-primary/60"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-dark text-primary">
                          <Building2 size={21} />
                        </div>
                        <span className="rounded-full bg-status-success/10 px-2.5 py-1 text-xs font-medium text-status-success">
                          {similarJob.match}% match
                        </span>
                      </div>
                      <h3 className="mt-4 font-semibold text-text-primary">
                        {similarJob.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary">
                        {similarJob.company}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-muted">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {similarJob.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Wallet size={14} />
                          {similarJob.salary}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {similarJob.skills.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-bg-dark px-2 py-1 text-xs text-text-secondary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex items-center justify-between border-t border-border-default pt-4 text-sm">
                        <span className="text-text-muted">
                          {similarJob.posted}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-primary">
                          View details <ArrowUpRight size={15} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobDetails;