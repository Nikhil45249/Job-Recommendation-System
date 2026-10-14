
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  UserRound,
  Phone,
  MapPin,
  GraduationCap,
  Code2,
  FileUp,
  X,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Camera,
  ImagePlus,
  Trash2,
} from "lucide-react";

const CompleteProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    degree: "",
    specialization: "",
    graduationYear: "",
    experience: "",
    preferredRole: "",
    skills: [],
  });

  const [skillInput, setSkillInput] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  const requiredFields = [
    formData.fullName,
    formData.phone,
    formData.location,
    formData.degree,
    formData.specialization,
    formData.graduationYear,
    formData.experience,
    formData.preferredRole,
  ];

  const completedFields =
    requiredFields.filter((field) => String(field).trim() !== "").length +
    (formData.skills.length > 0 ? 1 : 0) +
    (resume ? 1 : 0);

  const completion = Math.round((completedFields / 10) * 100);

  const inputClass =
    "h-12 w-full min-w-0 rounded-xl border border-border-dark bg-bg-input px-4 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15";

  const labelClass = "mb-2 block text-sm font-medium text-text-light";

  const showMessage = (text, type = "error") => {
    setMessage(text);
    setMessageType(type);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  };

  // Profile photo upload and validation
  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      showMessage("Please select a JPG, PNG, or WebP image.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showMessage("Profile photo must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setProfilePhoto(file);
        setPhotoPreview(reader.result);
        setMessage("");
      }
    };

    reader.onerror = () => {
      showMessage("Unable to read this image. Please try another photo.");
    };

    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const removePhoto = () => {
    setProfilePhoto(null);
    setPhotoPreview("");
    setMessage("");
  };

  // Add a technical skill
  const addSkill = (event) => {
    event.preventDefault();

    const skill = skillInput.trim();

    if (!skill) return;

    const alreadyExists = formData.skills.some(
      (item) => item.toLowerCase() === skill.toLowerCase()
    );

    if (alreadyExists) {
      showMessage("This skill has already been added.");
      return;
    }

    setFormData((previous) => ({
      ...previous,
      skills: [...previous.skills, skill],
    }));

    setSkillInput("");
    setMessage("");
  };

  const removeSkill = (skillToRemove) => {
    setFormData((previous) => ({
      ...previous,
      skills: previous.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  // Resume upload and validation
  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedExtensions = /\.(pdf|doc|docx)$/i;

    if (!allowedExtensions.test(file.name)) {
      showMessage("Please select a PDF or Word document.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showMessage("Your resume must be 5 MB or smaller.");
      event.target.value = "";
      return;
    }

    setResume(file);
    setMessage("");
  };

  // Frontend form validation
  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.skills.length === 0) {
      showMessage("Please add at least one technical skill.");
      return;
    }

    if (!resume) {
      showMessage("Please upload your resume to continue.");
      return;
    }

    console.log("Profile form ready:", {
      ...formData,
      profilePhotoName: profilePhoto?.name || null,
      resumeName: resume.name,
    });

    showMessage(
      "Profile validated successfully. Backend integration is still pending.",
      "success"
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto overscroll-y-contain bg-bg-outer text-text-primary">
      {/* Background decorations */}
      <div className="pointer-events-none fixed -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-32 -right-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      {/* Growing content with a dedicated scrollbar */}
      <div className="relative z-10 min-h-full w-full px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="mx-auto w-full max-w-4xl">
          {/* Header and logo */}
          <header className="mb-8">
            <Link
              to="/"
              className="mb-8 flex items-center justify-center gap-3"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <BriefcaseBusiness size={26} className="text-primary" />
              </div>

              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                <span className="text-text-light">Job</span>
                <span className="text-primary">Recommender</span>
              </h1>
            </Link>

            <div className="text-center">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                <UserRound size={14} />
                Personalize your experience
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl">
                Complete Your Profile
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">
                Tell us about yourself so we can recommend jobs that match
                your skills, education, and career goals.
              </p>
            </div>

            {/* Dynamic progress */}
            <div className="mx-auto mt-7 max-w-md rounded-2xl border border-border-dark bg-bg-dark p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-text-light">
                    Profile Setup
                  </p>
                  <p className="mt-1 text-xs text-text-secondary">
                    Complete all sections to continue
                  </p>
                </div>

                <span className="text-lg font-bold text-primary">
                  {completion}%
                </span>
              </div>

              <div
                className="h-2 overflow-hidden rounded-full bg-bg-card"
                role="progressbar"
                aria-valuenow={completion}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Profile completion"
              >
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${completion}%` }}
                />
              </div>
            </div>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Section 1: Profile Photo */}
            <section className="rounded-2xl border border-border-dark bg-bg-dark p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Camera size={22} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-light">
                    Profile Photo
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    Add a photo to personalize your profile
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
                {/* Circular photo preview */}
                <div className="relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-border-default bg-bg-input">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Profile preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <UserRound size={48} className="text-text-muted" />
                  )}
                </div>

                <div className="flex w-full flex-col items-center gap-3 sm:items-start">
                  <p className="text-center text-sm text-text-secondary sm:text-left">
                    Upload a clear, professional photo. A square image works
                    best.
                  </p>

                  <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
                    <label
                      htmlFor="profilePhoto"
                      className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-[#111214] transition hover:bg-primary-hover"
                    >
                      {profilePhoto ? (
                        <Camera size={17} />
                      ) : (
                        <ImagePlus size={17} />
                      )}
                      {profilePhoto ? "Replace Photo" : "Upload Photo"}
                    </label>

                    <input
                      id="profilePhoto"
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handlePhotoChange}
                      className="sr-only"
                    />

                    {profilePhoto && (
                      <button
                        type="button"
                        onClick={removePhoto}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border-default px-4 text-sm font-medium text-text-secondary transition hover:border-danger/50 hover:text-danger"
                      >
                        <Trash2 size={16} />
                        Remove
                      </button>
                    )}
                  </div>

                  <p className="text-xs text-text-muted">
                    JPG, PNG, or WebP · Maximum 5 MB · Optional
                  </p>

                  {profilePhoto && (
                    <p className="flex max-w-full items-center gap-2 break-all text-xs text-success">
                      <CheckCircle2 size={15} className="shrink-0" />
                      {profilePhoto.name}
                    </p>
                  )}
                </div>
              </div>
            </section>

            {/* Section 2: Personal Information */}
            <section className="rounded-2xl border border-border-dark bg-bg-dark p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <UserRound size={22} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-light">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    Basic details about you
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClass}>
                    Full Name *
                  </label>

                  <div className="relative">
                    <UserRound
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                    />
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number *
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="location" className={labelClass}>
                    Current Location *
                  </label>

                  <div className="relative">
                    <MapPin
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                    />
                    <input
                      id="location"
                      name="location"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="e.g. Greater Noida, Uttar Pradesh"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Education */}
            <section className="rounded-2xl border border-border-dark bg-bg-dark p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <GraduationCap size={23} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-light">
                    Education
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    Your academic background
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="degree" className={labelClass}>
                    Highest / Current Degree *
                  </label>

                  <select
                    id="degree"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select degree</option>
                    <option value="B.Tech">B.Tech / B.E.</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="B.Sc">B.Sc.</option>
                    <option value="M.Tech">M.Tech / M.E.</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specialization" className={labelClass}>
                    Specialization *
                  </label>

                  <input
                    id="specialization"
                    name="specialization"
                    type="text"
                    placeholder="e.g. Computer Science"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="graduationYear" className={labelClass}>
                    Expected / Completed Graduation Year *
                  </label>

                  <select
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select year</option>
                    {Array.from(
                      { length: 11 },
                      (_, index) => 2024 + index
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* Section 4: Skills and Career Preferences */}
            <section className="rounded-2xl border border-border-dark bg-bg-dark p-5 sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Code2 size={22} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-light">
                    Skills & Career Preferences
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    Tell us what kind of work interests you
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="skillInput" className={labelClass}>
                  Technical Skills *
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="skillInput"
                    type="text"
                    placeholder="e.g. React, Python, SQL"
                    value={skillInput}
                    onChange={(event) => setSkillInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        addSkill(event);
                      }
                    }}
                    className={`${inputClass} flex-1`}
                  />

                  <button
                    type="button"
                    onClick={addSkill}
                    className="h-12 shrink-0 rounded-xl border border-primary/40 px-5 text-sm font-semibold text-primary transition hover:bg-primary/10"
                  >
                    Add Skill
                  </button>
                </div>

                <p className="mt-2 text-xs text-text-muted">
                  Add your skills one at a time.
                </p>

                {formData.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {formData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-sm text-text-light"
                      >
                        {skill}

                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          aria-label={`Remove ${skill}`}
                          className="text-text-muted transition hover:text-danger"
                        >
                          <X size={15} />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="experience" className={labelClass}>
                    Experience Level *
                  </label>

                  <div className="relative">
                    <BriefcaseBusiness
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                    />

                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className={`${inputClass} pl-10`}
                    >
                      <option value="">Select experience</option>
                      <option value="Fresher">Fresher</option>
                      <option value="Internship">Internship experience</option>
                      <option value="0-2 years">0–2 years</option>
                      <option value="2-5 years">2–5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredRole" className={labelClass}>
                    Preferred Job Role *
                  </label>

                  <select
                    id="preferredRole"
                    name="preferredRole"
                    value={formData.preferredRole}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="">Select job role</option>
                    <option value="Software Developer">
                      Software Developer
                    </option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">
                      Backend Developer
                    </option>
                    <option value="Full Stack Developer">
                      Full Stack Developer
                    </option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Machine Learning Engineer">
                      Machine Learning Engineer
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Section 5: Resume Upload */}
            <section className="rounded-2xl border border-border-dark bg-bg-dark p-5 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <FileUp size={22} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-text-light">
                    Upload Your Resume
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    PDF or Word document, maximum 5 MB
                  </p>
                </div>
              </div>

              <label
                htmlFor="resume"
                className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border-dark bg-bg-input/50 px-5 py-8 text-center transition hover:border-primary hover:bg-primary/5"
              >
                <FileUp size={30} className="mb-3 text-primary" />

                <span className="break-words text-sm font-semibold text-text-light">
                  {resume ? "Resume selected" : "Choose a resume to upload"}
                </span>

                <span className="mt-2 max-w-full break-all text-xs text-text-secondary">
                  {resume ? resume.name : "Click here to browse your files"}
                </span>

                <input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="sr-only"
                />
              </label>

              {resume && (
                <div className="mt-4 flex items-center gap-2 text-sm text-success">
                  <CheckCircle2 size={17} />
                  Resume selected successfully.
                </div>
              )}
            </section>

            {/* Status message */}
            {message && (
              <div
                role="status"
                aria-live="polite"
                className={`rounded-xl border p-4 text-sm ${
                  messageType === "success"
                    ? "border-success/30 bg-success/10 text-success"
                    : "border-danger/30 bg-danger/10 text-danger"
                }`}
              >
                {message}
              </div>
            )}

            {/* Form actions */}
            <div className="flex flex-col-reverse gap-3 pb-4 sm:flex-row sm:justify-between">
              <Link
                to="/login"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border-dark px-6 text-sm font-medium text-text-secondary transition hover:bg-bg-dark hover:text-text-light"
              >
                <ChevronLeft size={17} />
                Back to Login
              </Link>

              <button
                type="submit"
                className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-[#111214] transition hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-outer"
              >
                Save Profile & Continue
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </form>

          <p className="mt-3 pb-4 text-center text-xs leading-5 text-text-muted">
            Your information will help us personalize job recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
