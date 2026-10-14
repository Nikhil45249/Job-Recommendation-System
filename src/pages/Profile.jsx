import { useRef, useState } from "react";
import {
  UserRound,
  GraduationCap,
  Code2,
  FileText,
  BriefcaseBusiness,
  MapPin,
  Mail,
  Phone,
  Pencil,
  Save,
  X,
  Plus,
  Trash2,
  Upload,
  Download,
  CheckCircle2,
  Sparkles,
  CalendarDays,
  Building2,
} from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const initialProfile = {
  fullName: "Nikhil Rajput",
  email: "nikhil@example.com",
  phone: "",
  location: "Bhagalpur, Bihar",
  college: "GL Bajaj Institute of Technology and Management",
  degree: "B.Tech",
  branch: "Computer Science and Engineering (Data Science)",
  graduationYear: "2028",
  experience: "Fresher",
  desiredRole: "Software Developer",
  preferredLocation: "Noida, Bengaluru, Remote",
  jobType: "Internship",
  about:
    "Computer Science student interested in software development, problem-solving, and building practical applications.",
};

const initialSkills = [
  "C++",
  "Python",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Data Structures & Algorithms",
  "Git",
];

const Field = ({
  label,
  name,
  value,
  onChange,
  editing,
  type = "text",
  placeholder = "",
}) => (
  <div className="min-w-0">
    <label
      htmlFor={name}
      className="mb-2 block text-sm font-medium text-text-secondary"
    >
      {label}
    </label>

    {editing ? (
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary"
      />
    ) : (
      <div className="min-h-11 break-words rounded-xl border border-border-default bg-bg-dark/50 px-4 py-3 text-sm text-text-primary">
        {value || (
          <span className="text-text-muted">Not provided</span>
        )}
      </div>
    )}
  </div>
);

const Section = ({ icon: Icon, title, description, children }) => (
  <section className="rounded-2xl border border-border-default bg-bg-card p-5 sm:p-6">
    <div className="mb-6 flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bg-dark text-primary">
        <Icon size={20} />
      </div>

      <div>
        <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
        <p className="mt-1 text-sm text-text-secondary">{description}</p>
      </div>
    </div>

    {children}
  </section>
);

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState("");
  const [editing, setEditing] = useState(false);
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const updateField = (event) => {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const addSkill = (event) => {
    event.preventDefault();

    const skill = newSkill.trim();

    if (!skill) return;

    if (
      skills.some(
        (existing) => existing.toLowerCase() === skill.toLowerCase()
      )
    ) {
      setMessage("This skill is already in your list.");
      return;
    }

    setSkills((current) => [...current, skill]);
    setNewSkill("");
    setMessage("");
  };

  const removeSkill = (skillToRemove) => {
    setSkills((current) =>
      current.filter((skill) => skill !== skillToRemove)
    );
  };

  const handleResumeUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const allowedExtension = /\.(pdf|doc|docx)$/i.test(file.name);

    if (!allowedTypes.includes(file.type) && !allowedExtension) {
      setMessage("Please upload a PDF, DOC, or DOCX file.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage("Your resume must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }

    setResume(file);
    setMessage("Resume selected successfully.");
  };

  const saveProfile = () => {
    setEditing(false);
    setMessage("Profile changes applied in this session.");
  };

  const cancelEditing = () => {
    setProfile((current) => ({ ...current }));
    setEditing(false);
    setMessage("");
  };

  const completionItems = [
    Boolean(profile.fullName.trim()),
    Boolean(profile.email.trim()),
    Boolean(profile.phone.trim()),
    Boolean(profile.location.trim()),
    Boolean(profile.college.trim()),
    Boolean(profile.degree.trim()),
    skills.length > 0,
    Boolean(profile.desiredRole.trim()),
    Boolean(resume),
  ];

  const completion = Math.round(
    (completionItems.filter(Boolean).length / completionItems.length) * 100
  );

  return (
    <DashboardLayout>
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        {/* Page header */}
        <header className="shrink-0 border-b border-border-default px-4 py-5 sm:px-6">
          <p className="text-sm text-text-muted">
            Dashboard / My Profile
          </p>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
                My Profile
              </h1>

              <p className="mt-2 text-sm text-text-secondary">
                Manage your information and improve your job recommendations.
              </p>
            </div>

            {!editing ? (
              <button
                type="button"
                onClick={() => {
                  setEditing(true);
                  setMessage("");
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
              >
                <Pencil size={16} />
                Edit Profile
              </button>
            ) : (
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="inline-flex items-center gap-2 rounded-xl border border-border-default px-4 py-3 text-sm font-medium text-text-primary transition hover:border-primary"
                >
                  <X size={16} />
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={saveProfile}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Scrollable content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
          <div className="mx-auto max-w-7xl">
            {message && (
              <div className="mb-5 flex items-start gap-2 rounded-xl border border-border-default bg-bg-card p-4 text-sm text-text-secondary">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-primary"
                />
                <p>{message}</p>
                <button
                  type="button"
                  onClick={() => setMessage("")}
                  className="ml-auto text-text-muted hover:text-text-primary"
                  aria-label="Dismiss message"
                >
                  <X size={17} />
                </button>
              </div>
            )}

            {/* Profile overview */}
            <section className="rounded-2xl border border-border-default bg-bg-card p-5 sm:p-7">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-border-default bg-bg-dark text-primary">
                    <UserRound size={38} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="break-words text-xl font-bold text-text-primary sm:text-2xl">
                      {profile.fullName || "Your Name"}
                    </h2>

                    <p className="mt-1 text-sm text-text-secondary">
                      {profile.desiredRole || "Add your desired role"}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {profile.location || "Location not provided"}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <GraduationCap size={15} />
                        {profile.degree || "Degree not provided"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full rounded-xl border border-border-default bg-bg-dark/50 p-4 md:max-w-xs">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-text-primary">
                      Profile completion
                    </span>
                    <span className="text-lg font-bold text-primary">
                      {completion}%
                    </span>
                  </div>

                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-bg-card">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${completion}%` }}
                    />
                  </div>

                  <p className="mt-3 text-xs leading-5 text-text-muted">
                    Add your contact details and upload a resume to complete
                    your profile.
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-6 grid grid-cols-1 items-start gap-6 xl:grid-cols-3">
              {/* Main sections */}
              <div className="space-y-6 xl:col-span-2">
                {/* Personal information */}
                <Section
                  icon={UserRound}
                  title="Personal Information"
                  description="Your basic contact and personal details."
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      name="fullName"
                      value={profile.fullName}
                      onChange={updateField}
                      editing={editing}
                      placeholder="Enter your full name"
                    />

                    <Field
                      label="Email Address"
                      name="email"
                      value={profile.email}
                      onChange={updateField}
                      editing={editing}
                      type="email"
                      placeholder="you@example.com"
                    />

                    <Field
                      label="Phone Number"
                      name="phone"
                      value={profile.phone}
                      onChange={updateField}
                      editing={editing}
                      type="tel"
                      placeholder="Enter your phone number"
                    />

                    <Field
                      label="Location"
                      name="location"
                      value={profile.location}
                      onChange={updateField}
                      editing={editing}
                      placeholder="City, State"
                    />
                  </div>

                  {!editing && (
                    <div className="mt-5 flex flex-wrap gap-4 text-xs text-text-muted">
                      <span className="flex items-center gap-2">
                        <Mail size={14} />
                        {profile.email || "Email not provided"}
                      </span>

                      <span className="flex items-center gap-2">
                        <Phone size={14} />
                        {profile.phone || "Phone not provided"}
                      </span>
                    </div>
                  )}
                </Section>

                {/* Education */}
                <Section
                  icon={GraduationCap}
                  title="Education"
                  description="Your academic background and qualifications."
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="College / University"
                      name="college"
                      value={profile.college}
                      onChange={updateField}
                      editing={editing}
                      placeholder="Enter college name"
                    />

                    <Field
                      label="Degree"
                      name="degree"
                      value={profile.degree}
                      onChange={updateField}
                      editing={editing}
                      placeholder="e.g. B.Tech"
                    />

                    <Field
                      label="Branch / Specialization"
                      name="branch"
                      value={profile.branch}
                      onChange={updateField}
                      editing={editing}
                      placeholder="Enter your branch"
                    />

                    <Field
                      label="Graduation Year"
                      name="graduationYear"
                      value={profile.graduationYear}
                      onChange={updateField}
                      editing={editing}
                      placeholder="e.g. 2028"
                    />
                  </div>

                  <div className="mt-5 flex items-start gap-3 rounded-xl border border-border-default bg-bg-dark/50 p-4">
                    <Building2
                      size={19}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Academic profile
                      </p>
                      <p className="mt-1 text-xs leading-5 text-text-muted">
                        Keep your education details up to date so recruiters
                        can better understand your background.
                      </p>
                    </div>
                  </div>
                </Section>

                {/* Skills */}
                <Section
                  icon={Code2}
                  title="Technical Skills"
                  description="Highlight the skills relevant to your target jobs."
                >
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-bg-dark px-3 py-2 text-sm text-text-primary"
                      >
                        {skill}

                        {editing && (
                          <button
                            type="button"
                            onClick={() => removeSkill(skill)}
                            aria-label={`Remove ${skill}`}
                            className="text-text-muted transition hover:text-status-danger"
                          >
                            <X size={14} />
                          </button>
                        )}
                      </span>
                    ))}
                  </div>

                  {editing && (
                    <form
                      onSubmit={addSkill}
                      className="mt-5 flex flex-col gap-3 sm:flex-row"
                    >
                      <input
                        value={newSkill}
                        onChange={(event) => setNewSkill(event.target.value)}
                        placeholder="Add a skill, e.g. Node.js"
                        className="min-w-0 flex-1 rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-muted focus:border-primary"
                      />

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-default px-4 py-3 text-sm font-medium text-text-primary transition hover:border-primary hover:text-primary"
                      >
                        <Plus size={16} />
                        Add Skill
                      </button>
                    </form>
                  )}

                  <p className="mt-4 text-xs text-text-muted">
                    {skills.length} skills added
                  </p>
                </Section>

                {/* Career preferences */}
                <Section
                  icon={BriefcaseBusiness}
                  title="Career Preferences"
                  description="Tell us what kind of opportunities you're looking for."
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <Field
                      label="Desired Role"
                      name="desiredRole"
                      value={profile.desiredRole}
                      onChange={updateField}
                      editing={editing}
                      placeholder="e.g. Software Developer"
                    />

                    <div>
                      <label
                        htmlFor="experience"
                        className="mb-2 block text-sm font-medium text-text-secondary"
                      >
                        Experience Level
                      </label>

                      {editing ? (
                        <select
                          id="experience"
                          name="experience"
                          value={profile.experience}
                          onChange={updateField}
                          className="w-full rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
                        >
                          <option>Fresher</option>
                          <option>0–1 years</option>
                          <option>1–3 years</option>
                          <option>3–5 years</option>
                          <option>5+ years</option>
                        </select>
                      ) : (
                        <div className="min-h-11 rounded-xl border border-border-default bg-bg-dark/50 px-4 py-3 text-sm text-text-primary">
                          {profile.experience}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="jobType"
                        className="mb-2 block text-sm font-medium text-text-secondary"
                      >
                        Preferred Job Type
                      </label>

                      {editing ? (
                        <select
                          id="jobType"
                          name="jobType"
                          value={profile.jobType}
                          onChange={updateField}
                          className="w-full rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm text-text-primary outline-none focus:border-primary"
                        >
                          <option>Internship</option>
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Contract</option>
                        </select>
                      ) : (
                        <div className="min-h-11 rounded-xl border border-border-default bg-bg-dark/50 px-4 py-3 text-sm text-text-primary">
                          {profile.jobType}
                        </div>
                      )}
                    </div>

                    <Field
                      label="Preferred Locations"
                      name="preferredLocation"
                      value={profile.preferredLocation}
                      onChange={updateField}
                      editing={editing}
                      placeholder="e.g. Noida, Remote"
                    />
                  </div>
                </Section>

                {/* About */}
                <Section
                  icon={Sparkles}
                  title="About Me"
                  description="Write a short introduction for recruiters."
                >
                  {editing ? (
                    <textarea
                      id="about"
                      name="about"
                      value={profile.about}
                      onChange={updateField}
                      rows={5}
                      maxLength={600}
                      placeholder="Describe your interests, strengths, and career goals..."
                      className="w-full resize-y rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm leading-6 text-text-primary outline-none placeholder:text-text-muted focus:border-primary"
                    />
                  ) : (
                    <p className="whitespace-pre-wrap text-sm leading-7 text-text-secondary">
                      {profile.about || "Add a short introduction about yourself."}
                    </p>
                  )}

                  {editing && (
                    <p className="mt-2 text-right text-xs text-text-muted">
                      {profile.about.length}/600 characters
                    </p>
                  )}
                </Section>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Resume */}
                <section className="rounded-2xl border border-border-default bg-bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-dark text-primary">
                      <FileText size={20} />
                    </div>
                    <div>
                      <h2 className="font-semibold text-text-primary">
                        My Resume
                      </h2>
                      <p className="mt-1 text-xs text-text-muted">
                        PDF, DOC, or DOCX · Max 5 MB
                      </p>
                    </div>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeUpload}
                    className="hidden"
                  />

                  <div className="mt-5 rounded-xl border border-dashed border-border-strong bg-bg-dark/40 p-5 text-center">
                    <Upload
                      size={25}
                      className="mx-auto text-text-muted"
                    />

                    <p className="mt-3 text-sm font-medium text-text-primary">
                      {resume ? resume.name : "Upload your resume"}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-text-muted">
                      {resume
                        ? `${(resume.size / 1024 / 1024).toFixed(2)} MB`
                        : "Choose a recent version of your resume."}
                    </p>

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border-default px-4 py-2.5 text-sm font-medium text-text-primary transition hover:border-primary hover:text-primary"
                    >
                      <Upload size={15} />
                      {resume ? "Replace Resume" : "Choose File"}
                    </button>
                  </div>

                  {resume && (
                    <button
                      type="button"
                      onClick={() => {
                        const url = URL.createObjectURL(resume);
                        const link = document.createElement("a");
                        link.href = url;
                        link.download = resume.name;
                        link.click();
                        URL.revokeObjectURL(url);
                      }}
                      className="mt-3 inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover"
                    >
                      <Download size={15} />
                      Download selected file
                    </button>
                  )}

                  <p className="mt-4 text-xs leading-5 text-text-muted">
                    The selected file stays in this browser session. It is not
                    uploaded to a server.
                  </p>
                </section>

                {/* Profile tips */}
                <section className="rounded-2xl border border-border-default bg-bg-card p-5">
                  <div className="flex items-center gap-2">
                    <Sparkles size={19} className="text-primary" />
                    <h2 className="font-semibold text-text-primary">
                      Profile Tips
                    </h2>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-status-success"
                      />
                      <p className="text-sm leading-6 text-text-secondary">
                        Add skills that match your target job roles.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-status-success"
                      />
                      <p className="text-sm leading-6 text-text-secondary">
                        Keep your education and contact details accurate.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-status-success"
                      />
                      <p className="text-sm leading-6 text-text-secondary">
                        Upload an updated resume before applying.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Education reminder */}
                <section className="rounded-2xl border border-border-default bg-bg-card p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-dark text-primary">
                      <CalendarDays size={19} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Graduation
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">
                        {profile.graduationYear || "Year not provided"}
                      </p>
                    </div>
                  </div>
                </section>
              </aside>
            </div>

            {/* Bottom save action */}
            {editing && (
              <div className="mt-6 flex flex-wrap justify-end gap-3 border-t border-border-default py-5">
                <button
                  type="button"
                  onClick={cancelEditing}
                  className="rounded-xl border border-border-default px-5 py-3 text-sm font-medium text-text-primary transition hover:border-primary"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={saveProfile}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;