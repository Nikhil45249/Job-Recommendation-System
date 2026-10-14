import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  FileText,
  MapPin,
  Palette,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  BrainCircuit,
  GraduationCap,
  ShieldCheck,
  Zap,
} from "lucide-react";
import PublicNavbar from "../components/PublicNavbar";

const jobs = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "TechNova",
    location: "Noida, India",
    type: "Internship",
    salary: "₹3–6 LPA",
    match: 94,
    logo: "T",
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    id: "2",
    title: "Software Developer Intern",
    company: "CodeSphere",
    location: "Bengaluru, India",
    type: "Internship",
    salary: "₹4–8 LPA",
    match: 88,
    logo: "C",
    skills: ["C++", "DSA", "Git"],
  },
  {
    id: "3",
    title: "Junior Data Analyst",
    company: "DataBridge",
    location: "Remote",
    type: "Full-time",
    salary: "₹4–7 LPA",
    match: 82,
    logo: "D",
    skills: ["Python", "SQL", "Excel"],
  },
];

const features = [
  {
    icon: FileText,
    title: "Resume-Based Matching",
    description:
      "Discover opportunities aligned with your resume, education, experience, and technical skills.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Target,
    title: "Smart Recommendations",
    description:
      "Find relevant roles based on your career goals, preferred location, and experience level.",
    color: "text-secondary",
    bg: "bg-secondary/15",
  },
  {
    icon: TrendingUp,
    title: "Skill-Gap Analysis",
    description:
      "Identify missing skills and understand what you can improve for your target roles.",
    color: "text-success",
    bg: "bg-success/10",
  },
];

const steps = [
  {
    number: "01",
    icon: Users,
    title: "Create Your Profile",
    description:
      "Add your education, technical skills, experience, and career preferences.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Analyze Your Skills",
    description:
      "Use your resume and profile to identify relevant opportunities and skill gaps.",
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Discover Opportunities",
    description:
      "Explore matching roles, save jobs, and keep your applications organized.",
  },
];

const categories = [
  { icon: Code2, name: "Software Development", category: "Development" },
  { icon: Database, name: "Data & Analytics", category: "Data" },
  { icon: Palette, name: "UI/UX Design", category: "Design" },
  { icon: BrainCircuit, name: "AI & Machine Learning", category: "AI & ML" },
];

const benefits = [
  "Recommendations based on your skills",
  "Easy access to relevant opportunities",
  "Resume and profile-based discovery",
  "A clearer path to your career goals",
];

function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}) {
  return (
    <div
      className={`mb-12 max-w-3xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      <div
        className={`mb-5 flex items-center gap-3 ${
          center ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-9 bg-primary" />
        <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border-default bg-bg-main p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5 sm:p-7 lg:p-8">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-xl font-bold text-primary sm:h-16 sm:w-16 sm:text-2xl">
            {job.logo}
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-bold leading-snug text-text-primary transition-colors group-hover:text-primary sm:text-xl">
              {job.title}
            </h3>
            <p className="mt-2 text-base text-text-secondary">
              {job.company}
            </p>
          </div>
        </div>

        <div className="shrink-0 rounded-xl border border-success/25 bg-success/10 px-3 py-2 text-center">
          <p className="text-lg font-bold text-success">{job.match}%</p>
          <p className="text-xs font-medium text-text-secondary">Match</p>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-text-secondary sm:text-base">
        <span className="flex items-center gap-2">
          <MapPin size={18} className="shrink-0 text-primary" />
          {job.location}
        </span>
        <span className="flex items-center gap-2">
          <BriefcaseBusiness size={18} className="shrink-0 text-secondary" />
          {job.type}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-border-default bg-bg-input px-3.5 py-2 text-sm font-medium text-text-secondary"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-border-subtle pt-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
            Salary
          </p>
          <p className="mt-1 text-lg font-bold text-text-primary sm:text-xl">
            {job.salary}
          </p>
        </div>

        <Link
          to={`/jobs/${job.id}`}
          className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-[#101318]"
        >
          View details
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    const params = new URLSearchParams();

    if (role.trim()) params.set("role", role.trim());
    if (location.trim()) params.set("location", location.trim());

    const query = params.toString();
    window.location.href = query ? `/jobs?${query}` : "/jobs";
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-outer text-text-primary">
      <PublicNavbar />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative isolate overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/10 blur-[110px]" />
            <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-secondary/10 blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "radial-gradient(#858b91 0.7px, transparent 0.7px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-20 sm:px-8 sm:pt-24 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-20 lg:pt-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2">
                <Sparkles size={15} className="text-primary" />
                <span className="text-xs text-text-secondary sm:text-sm">
                  A smarter way to discover your next opportunity
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Find the right job.
                <span className="mt-2 block bg-gradient-to-r from-primary via-[#a0a2dc] to-secondary bg-clip-text text-transparent">
                  Build your future.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
                Discover relevant jobs, understand your skill gaps, and take
                the next step in your career with personalized recommendations.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/signup"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-[#101318] transition hover:bg-primary-hover"
                >
                  Get Started <ArrowRight size={17} />
                </Link>

                <Link
                  to="/jobs"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border-strong bg-bg-main px-6 py-3 text-sm font-semibold transition hover:border-primary/50"
                >
                  <Search size={17} /> Explore Jobs
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-text-secondary sm:text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-success" />
                  Skills-first discovery
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-success" />
                  Personalized job search
                </span>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-secondary/15 blur-2xl" />

              <div className="relative rounded-2xl border border-border-strong bg-bg-main p-4 shadow-2xl sm:p-6">
                <div className="flex items-center justify-between border-b border-border-subtle pb-5">
                  <div>
                    <p className="text-xs text-text-muted">YOUR CAREER SPACE</p>
                    <h2 className="mt-1 text-lg font-semibold">
                      Your next opportunity
                    </h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15">
                    <BrainCircuit size={21} className="text-secondary" />
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-secondary">
                        Example profile match
                      </p>
                      <p className="mt-1 text-2xl font-bold text-text-primary">
                        Frontend Developer
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-success">94%</p>
                      <p className="text-xs text-text-secondary">Match score</p>
                    </div>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-bg-card">
                    <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-primary to-success" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React", "JavaScript", "CSS"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border-default bg-bg-card px-3 py-2 text-sm font-medium text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border-default bg-bg-dark p-4">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <BriefcaseBusiness size={17} className="text-primary" />
                      <span className="text-sm">Relevant jobs</span>
                    </div>
                    <p className="mt-3 text-2xl font-bold">24+</p>
                    <p className="mt-1 text-xs text-text-muted">
                      Example opportunities
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-bg-dark p-4">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <TrendingUp size={17} className="text-success" />
                      <span className="text-sm">Skill readiness</span>
                    </div>
                    <p className="mt-3 text-2xl font-bold">85%</p>
                    <p className="mt-1 text-xs text-text-muted">
                      Illustrative score
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-xl border border-border-default bg-bg-dark p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-success/10">
                    <CheckCircle2 size={20} className="text-success" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      Your career journey starts here
                    </p>
                    <p className="mt-1 text-xs leading-5 text-text-secondary">
                      Build your profile to explore relevant opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
                {/* 2. TRUST / VALUE STRIP */}
        <section className="border-y border-border-default bg-bg-main">
          <div className="mx-auto grid max-w-7xl divide-y divide-border-subtle px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
            {[
              {
                icon: Target,
                title: "Skills-first discovery",
                text: "Focus on what you can do",
              },
              {
                icon: ShieldCheck,
                title: "Your career, your choice",
                text: "Explore opportunities your way",
              },
              {
                icon: TrendingUp,
                title: "Grow with direction",
                text: "Understand your next steps",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 py-6 sm:px-5 sm:py-8 lg:px-8"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-default bg-bg-card">
                    <Icon size={21} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. HOW IT WORKS */}
        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="Simple process"
            title="From your skills to your next opportunity"
            description="A clearer job search starts with understanding your strengths and knowing where you want to go."
            center
          />

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="h-full rounded-2xl border border-border-default bg-bg-main p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon size={27} className="text-primary" />
                    </div>
                    <span className="text-3xl font-bold text-border-strong">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-text-secondary">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* 4. FEATURES */}
        <section
          id="features"
          className="border-y border-border-default bg-bg-main"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <SectionHeading
              eyebrow="Why JobRecommender"
              title="A job search built around you"
              description="Go beyond browsing endless listings. Understand your profile and focus on opportunities that make sense for your career."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="group h-full rounded-2xl border border-border-default bg-bg-dark p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 sm:p-9"
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg}`}
                      >
                        <Icon size={27} className={feature.color} />
                      </div>
                      <span className="text-sm font-semibold tracking-widest text-text-muted">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-bold sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-text-secondary">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. JOB CATEGORIES */}
        <section
          id="categories"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="Explore by interest"
            title="Find your field"
            description="Explore career paths that fit your interests, strengths, and the skills you want to develop."
            center
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.category}
                  to={`/jobs?category=${encodeURIComponent(category.category)}`}
                  className="group rounded-2xl border border-border-default bg-bg-main p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-bg-card sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition group-hover:bg-primary/15">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold leading-snug">
                      {category.name}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-text-muted transition group-hover:text-primary"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    Explore opportunities and build relevant skills.
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 6. FEATURED JOBS */}
        <section
          id="featured-jobs"
          className="border-y border-border-default bg-bg-main"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-9 bg-primary" />
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                    Featured opportunities
                  </span>
                </div>
                <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Opportunities worth exploring
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
                  Browse example roles and discover the skills employers may
                  be looking for.
                </p>
              </div>
              <Link
                to="/jobs"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-border-strong px-5 py-3 text-sm font-semibold transition hover:border-primary/50 hover:bg-bg-dark sm:self-auto"
              >
                Browse all jobs <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            <p className="mt-5 text-xs leading-6 text-text-muted">
              Featured roles, companies, salaries, and match percentages are
              illustrative demo content and are not live job listings.
            </p>
          </div>
        </section>
                {/* 7. SKILL-GAP ANALYSIS */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-primary" />
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Career growth
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Know your strengths. Close your skill gaps.
            </h2>

            <p className="mt-5 text-base leading-8 text-text-secondary sm:text-lg">
              Understand how your current skills align with your target role.
              Use the insights to plan what to learn next and make your profile
              stronger.
            </p>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-success"
                  />
                  <p className="text-base leading-7 text-text-secondary">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/signup"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-[#101318] transition hover:bg-primary-hover"
            >
              Build Your Profile <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl" />

            <div className="relative rounded-2xl border border-border-strong bg-bg-main p-6 shadow-xl sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-border-subtle pb-5">
                <div>
                  <p className="text-sm text-text-secondary">
                    Example skill analysis
                  </p>
                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    Frontend Developer
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <TrendingUp size={24} className="text-primary" />
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-text-secondary">
                    Illustrative readiness
                  </p>
                  <p className="mt-2 text-4xl font-bold text-text-primary">
                    85%
                  </p>
                </div>
                <span className="rounded-full border border-success/25 bg-success/10 px-3 py-2 text-sm font-semibold text-success">
                  Example score
                </span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-bg-card">
                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-primary to-success" />
              </div>

              <div className="mt-7 space-y-5">
                {[
                  {
                    title: "React",
                    text: "Strong foundation",
                    width: "w-[90%]",
                    color: "bg-success",
                  },
                  {
                    title: "JavaScript",
                    text: "Good foundation",
                    width: "w-[78%]",
                    color: "bg-primary",
                  },
                  {
                    title: "Testing",
                    text: "Room to improve",
                    width: "w-[48%]",
                    color: "bg-secondary",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-base font-semibold">
                        {item.title}
                      </span>
                      <span className="text-sm text-text-secondary">
                        {item.text}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-bg-card">
                      <div
                        className={`h-full rounded-full ${item.color} ${item.width}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-xl border border-secondary/20 bg-secondary/5 p-4">
                <Sparkles size={20} className="mt-0.5 shrink-0 text-secondary" />
                <div>
                  <p className="text-sm font-semibold">
                    Suggested next step
                  </p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    Strengthen testing fundamentals and practice writing
                    maintainable components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHY CHOOSE THIS PLATFORM */}
        <section className="border-y border-border-default bg-bg-main">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <SectionHeading
              eyebrow="Your career, made clearer"
              title="Make your next move with more confidence"
              description="Keep your career information organized and make it easier to explore opportunities that fit your direction."
              center
            />

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-2xl border border-border-default bg-bg-dark p-7 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <FileText size={27} className="text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                  One profile, a clearer picture
                </h3>
                <p className="mt-4 text-base leading-8 text-text-secondary">
                  Bring your resume, skills, education, and preferences
                  together so you can present your strengths consistently.
                </p>
              </article>

              <article className="rounded-2xl border border-border-default bg-bg-dark p-7 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/15">
                  <Target size={27} className="text-secondary" />
                </div>
                <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                  A focused job search
                </h3>
                <p className="mt-4 text-base leading-8 text-text-secondary">
                  Explore roles based on your interests, save opportunities
                  for later, and keep track of your application journey.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* 9. TESTIMONIALS / PRODUCT PROMISE */}
        <section className="border-y border-border-default bg-bg-main">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <SectionHeading
              eyebrow="Built for job seekers"
              title="Put your skills at the center of your search"
              description="A focused experience designed to help you organize your profile, explore roles, and plan your next steps."
              center
            />

            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: FileText,
                  title: "Showcase your strengths",
                  text: "Keep your resume, education, and technical skills together in one profile.",
                },
                {
                  icon: Search,
                  title: "Search with purpose",
                  text: "Explore opportunities by role, skill, location, and career interests.",
                },
                {
                  icon: TrendingUp,
                  title: "Keep moving forward",
                  text: "Save interesting jobs and track your application progress in one place.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="h-full rounded-2xl border border-border-default bg-bg-dark p-7 transition-all duration-300 hover:border-primary/40 sm:p-9"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon size={25} className="text-primary" />
                    </div>
                    <h3 className="mt-6 text-xl font-bold sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-text-secondary">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
                {/* 10. FAQ */}
        <section
          id="faq"
          className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-24"
        >
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Questions about JobRecommender?"
            description="Here are a few details to help you get started."
            center
          />

          <div className="space-y-3">
            {[
              {
                question: "How does the job recommendation system work?",
                answer:
                  "The planned system will use profile details, skills, resume information, and job requirements to help identify relevant opportunities. Recommendations are currently demo content until the backend is connected.",
              },
              {
                question: "Do I need to upload my resume?",
                answer:
                  "You can create your profile with your education and skills. Resume upload is part of the profile flow and will support richer matching once the backend is integrated.",
              },
              {
                question: "Can I search for internships and remote jobs?",
                answer:
                  "Yes. The Jobs page is intended to support job types, locations, and other filters. The search form can pass role and location as URL query parameters.",
              },
              {
                question: "Are the match percentages real?",
                answer:
                  "No. The percentages and featured jobs on this Home page are illustrative demo data. A real match score requires a recommendation algorithm and connected job data.",
              },
            ].map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-border-default bg-bg-main p-5 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-text-primary sm:text-lg">
                  {item.question}
                  <span className="text-xl text-primary transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-8 text-text-secondary">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section className="relative overflow-hidden px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/10 blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-4xl rounded-3xl border border-border-strong bg-bg-main px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <GraduationCap size={28} className="text-primary" />
            </div>

            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Your next opportunity starts with one step.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-text-secondary sm:text-lg">
              Create your profile, showcase your skills, and start exploring
              opportunities aligned with your goals.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/signup"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-[#101318] transition hover:bg-primary-hover"
              >
                Create Your Profile <ArrowRight size={17} />
              </Link>

              <Link
                to="/login"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border-strong px-6 py-3 text-sm font-semibold transition hover:border-primary/50 hover:bg-bg-dark"
              >
                I already have an account
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 12. FOOTER */}
      <footer
        id="contact"
        className="border-t border-border-default bg-bg-main"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <BriefcaseBusiness size={22} className="text-primary" />
              </span>
              <span className="text-lg font-bold">
                Job<span className="text-primary">Recommender</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-base leading-7 text-text-secondary">
              Helping job seekers discover relevant opportunities and make
              more informed career decisions.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Explore</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-text-secondary">
              <a href="#how-it-works" className="transition hover:text-primary">
                How It Works
              </a>
              <a href="#features" className="transition hover:text-primary">
                Features
              </a>
              <a href="#categories" className="transition hover:text-primary">
                Categories
              </a>
              <Link to="/jobs" className="transition hover:text-primary">
                Browse Jobs
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Your Account</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-text-secondary">
              <Link to="/login" className="transition hover:text-primary">
                Sign In
              </Link>
              <Link to="/signup" className="transition hover:text-primary">
                Create Account
              </Link>
              <Link to="/profile" className="transition hover:text-primary">
                My Profile
              </Link>
              <a href="#faq" className="transition hover:text-primary">
                FAQs
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
            <p>
              © {new Date().getFullYear()} JobRecommender. All rights reserved.
            </p>
            <p>Built to help you take the next step in your career.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}