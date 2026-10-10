
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    BriefcaseBusiness,
    UserRound,
    Phone,
    MapPin,
    GraduationCap,
    Code2,
    BriefcaseBusiness as ExperienceIcon,
    FileUp,
    X,
    ArrowRight,
    CheckCircle2,
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
    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setMessage("");
    };

    const addSkill = (event) => {
        event.preventDefault();

        const skill = skillInput.trim();

        if (
            skill &&
            !formData.skills.some(
                (item) => item.toLowerCase() === skill.toLowerCase()
            )
        ) {
            setFormData((prev) => ({
                ...prev,
                skills: [...prev.skills, skill],
            }));
        }

        setSkillInput("");
    };

    const removeSkill = (skillToRemove) => {
        setFormData((prev) => ({
            ...prev,
            skills: prev.skills.filter((skill) => skill !== skillToRemove),
        }));
    };

    const handleResumeChange = (event) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(file.type)) {
            setMessage("Please upload a PDF or Word document.");
            event.target.value = "";
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setMessage("Resume size must be 5 MB or less.");
            event.target.value = "";
            return;
        }

        setResume(file);
        setMessage("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.skills.length === 0) {
            setMessage("Please add at least one technical skill.");
            return;
        }

        if (!resume) {
            setMessage("Please upload your resume to continue.");
            return;
        }

        // Profile API and resume storage will be connected later.
        console.log("Profile form ready:", {
            ...formData,
            resumeName: resume.name,
        });

        setMessage(
            "Profile validated successfully. Backend integration is still pending."
        );
    };

    const inputClass =
        "h-12 w-full rounded-xl border border-border-dark bg-bg-input px-4 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15";

    const labelClass =
        "mb-2 block text-sm font-medium text-text-light";

    return (
        <main className="relative min-h-screen overflow-hidden bg-bg-outer px-4 py-8 text-text-primary sm:px-6 lg:py-10">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10 mx-auto w-full max-w-4xl">

                {/* Logo */}
                <Link
                    to="/"
                    className="mb-8 flex items-center justify-center gap-3"
                >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                        <BriefcaseBusiness
                            size={27}
                            className="text-primary"
                        />
                    </div>

                    <h1 className="text-[25px] font-bold tracking-tight">
                        <span className="text-text-light">Job</span>
                        <span className="text-primary">Recommender</span>
                    </h1>
                </Link>

                {/* Page Heading */}
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-text-light sm:text-4xl">
                        Complete Your Profile
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">
                        Tell us about yourself so we can recommend jobs that match
                        your skills, education, and career goals.
                    </p>

                    {/* Progress */}
                    <div className="mx-auto mt-6 max-w-sm">
                        <div className="mb-2 flex items-center justify-between text-xs text-text-secondary">
                            <span>Profile Setup</span>
                            <span>33% Complete</span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-bg-dark">
                            <div className="h-full w-1/3 rounded-full bg-primary" />
                        </div>
                    </div>
                </div>

                {/* Profile Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    {/* Personal Information */}
                    <section className="rounded-2xl border border-border-dark bg-bg-dark p-5 sm:p-7">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <UserRound className="text-primary" size={21} />
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

                    {/* Education */}
                    <section className="rounded-2xl border border-border-dark bg-bg-dark p-5 sm:p-7">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <GraduationCap className="text-primary" size={22} />
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

                    {/* Skills and Career Preferences */}
                    <section className="rounded-2xl border border-border-dark bg-bg-dark p-5 sm:p-7">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <Code2 className="text-primary" size={21} />
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-text-light">
                                    Skills & Career Preferences
                                </h3>
                                <p className="mt-1 text-xs text-text-secondary">
                                    Help us understand what jobs suit you
                                </p>
                            </div>
                        </div>

                        <div className="mb-5">
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
                                    className="h-12 rounded-xl border border-primary/40 px-5 text-sm font-semibold text-primary transition hover:bg-primary/10"
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
                                    <ExperienceIcon
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

                    {/* Resume Upload */}
                    <section className="rounded-2xl border border-border-dark bg-bg-dark p-5 sm:p-7">
                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <FileUp className="text-primary" size={21} />
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

                            <span className="text-sm font-semibold text-text-light">
                                {resume ? "Resume selected" : "Choose a resume to upload"}
                            </span>

                            <span className="mt-2 max-w-full break-all text-xs text-text-secondary">
                                {resume
                                    ? resume.name
                                    : "Click here to browse your files"}
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
                            <div className="mt-3 flex items-center gap-2 text-sm text-success">
                                <CheckCircle2 size={17} />
                                Resume selected successfully.
                            </div>
                        )}
                    </section>

                    {/* Status Message */}
                    {message && (
                        <p
                            role="status"
                            aria-live="polite"
                            className={`rounded-xl border p-4 text-sm ${message.startsWith("Profile validated")
                                    ? "border-success/30 bg-success/10 text-success"
                                    : "border-danger/30 bg-danger/10 text-danger"
                                }`}
                        >
                            {message}
                        </p>
                    )}

                    {/* Submit */}
                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                        <Link
                            to="/login"
                            className="flex h-12 items-center justify-center rounded-xl border border-border-dark px-6 text-sm font-medium text-text-secondary transition hover:bg-bg-dark hover:text-text-light"
                        >
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

                <p className="mt-6 text-center text-xs leading-5 text-text-muted">
                    Your profile information will help us personalize job recommendations.
                </p>

            </div>
        </main>
    );
};

export default CompleteProfile;
