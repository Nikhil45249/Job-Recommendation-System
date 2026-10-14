
import { useState } from "react";
import {
  Settings as SettingsIcon,
  UserRound,
  Bell,
  BriefcaseBusiness,
  ShieldCheck,
  Mail,
  LockKeyhole,
  MapPin,
  Save,
  RotateCcw,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
} from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const initialSettings = {
  email: "nikhil@example.com",
  jobAlerts: true,
  applicationUpdates: true,
  weeklyRecommendations: false,
  productUpdates: false,
  jobType: "Any",
  workMode: "Any",
  location: "Greater Noida",
  minMatch: 70,
  profileVisibility: true,
  showSkills: true,
  twoFactor: false,
};

const SectionHeading = ({ icon: Icon, title, description }) => (
  <div className="mb-5 flex items-start gap-3">
    <div className="rounded-xl border border-border-default bg-bg-dark p-2.5">
      <Icon size={19} className="text-primary" />
    </div>
    <div>
      <h2 className="font-semibold text-text-primary">{title}</h2>
      <p className="mt-1 text-sm text-text-muted">{description}</p>
    </div>
  </div>
);

const Toggle = ({ label, description, checked, onChange }) => (
  <div className="flex items-center justify-between gap-4 py-4">
    <div>
      <p className="text-sm font-medium text-text-primary">{label}</p>
      <p className="mt-1 text-xs leading-5 text-text-muted">
        {description}
      </p>
    </div>

    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        checked ? "bg-primary" : "bg-border-strong"
      }`}
    >
      <span
        className={`absolute top-1 h-4 w-4 rounded-full transition ${
          checked ? "left-6 bg-bg-outer" : "left-1 bg-text-secondary"
        }`}
      />
    </button>
  </div>
);

const Field = ({ label, children }) => (
  <label className="block">
    <span className="mb-2 block text-sm font-medium text-text-secondary">
      {label}
    </span>
    {children}
  </label>
);

const inputClass =
  "w-full rounded-xl border border-border-default bg-bg-input px-4 py-3 text-sm text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary";

const Settings = () => {
  const [settings, setSettings] = useState(initialSettings);
  const [saved, setSaved] = useState(false);

  // Change password form state
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    setSaved(true);
  };

  const handleReset = () => {
    setSettings(initialSettings);
    setSaved(false);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPasswordError("");
    setPasswordMessage("");

    const {
      currentPassword,
      newPassword,
      confirmPassword,
    } = passwordData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Please fill in all password fields.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError(
        "New password must contain at least 8 characters."
      );
      return;
    }

    if (currentPassword === newPassword) {
      setPasswordError(
        "Your new password must be different from your current password."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirmation do not match.");
      return;
    }

    setPasswordMessage(
      "Validation successful. Connect your backend to update your password securely."
    );
  };

  const resetPasswordForm = () => {
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setPasswordError("");
    setPasswordMessage("");
  };

  return (
    <DashboardLayout>
      <div className="h-full overflow-y-auto pr-1">
        <div className="mx-auto max-w-5xl space-y-6 pb-8">
          {/* Page header */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-text-muted">
                <SettingsIcon size={16} />
                <span>Dashboard / Settings</span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                Settings
              </h1>

              <p className="mt-2 text-sm text-text-secondary">
                Customize your account and job discovery experience.
              </p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-default px-4 py-2.5 text-sm font-medium text-text-secondary transition hover:bg-bg-card hover:text-text-primary"
            >
              <RotateCcw size={16} />
              Reset changes
            </button>
          </div>

          {saved && (
            <div className="flex items-center gap-3 rounded-xl border border-status-success/30 bg-status-success/10 p-4 text-sm text-status-success">
              <CheckCircle2 size={19} />
              Settings updated in this session. Connect a backend to persist them.
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            {/* Account settings */}
            <section className="rounded-2xl border border-border-default bg-bg-main p-5 sm:p-7">
              <SectionHeading
                icon={UserRound}
                title="Account settings"
                description="Manage your basic account information."
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email address">
                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                    />

                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) =>
                        updateSetting("email", e.target.value)
                      }
                      className={`${inputClass} pl-10`}
                      required
                    />
                  </div>
                </Field>

                {/* Change password */}
                <Field label="Password">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border-default bg-bg-input px-4 py-3">
                      <div className="flex items-center gap-3">
                        <LockKeyhole
                          size={17}
                          className="text-text-muted"
                        />
                        <span className="text-sm text-text-secondary">
                          Change your account password
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          if (showPasswordForm) {
                            resetPasswordForm();
                          }
                          setShowPasswordForm((prev) => !prev);
                        }}
                        className="rounded-lg bg-primary/10 px-3 py-2 text-sm font-semibold text-primary transition hover:bg-primary/20"
                      >
                        {showPasswordForm ? "Cancel" : "Change Password"}
                      </button>
                    </div>

                    {showPasswordForm && (
                      <div className="space-y-4 rounded-xl border border-border-default bg-bg-dark p-4">
                        <div className="flex items-center gap-2">
                          <KeyRound
                            size={18}
                            className="text-primary"
                          />
                          <h3 className="font-semibold text-text-primary">
                            Update password
                          </h3>
                        </div>

                        <form
                          onSubmit={handlePasswordChange}
                          className="space-y-4"
                        >
                          {[
                            {
                              key: "currentPassword",
                              label: "Current Password",
                              autocomplete: "current-password",
                            },
                            {
                              key: "newPassword",
                              label: "New Password",
                              autocomplete: "new-password",
                            },
                            {
                              key: "confirmPassword",
                              label: "Confirm New Password",
                              autocomplete: "new-password",
                            },
                          ].map((field) => (
                            <div key={field.key}>
                              <label
                                htmlFor={field.key}
                                className="mb-2 block text-sm font-medium text-text-secondary"
                              >
                                {field.label}
                              </label>

                              <input
                                id={field.key}
                                type={showPasswords ? "text" : "password"}
                                autoComplete={field.autocomplete}
                                value={passwordData[field.key]}
                                onChange={(e) => {
                                  setPasswordData((prev) => ({
                                    ...prev,
                                    [field.key]: e.target.value,
                                  }));
                                  setPasswordError("");
                                  setPasswordMessage("");
                                }}
                                className={inputClass}
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                                minLength={field.key !== "currentPassword" ? 8 : undefined}
                                required
                              />
                            </div>
                          ))}

                          <button
                            type="button"
                            onClick={() =>
                              setShowPasswords((prev) => !prev)
                            }
                            className="flex items-center gap-2 text-sm text-text-secondary transition hover:text-text-primary"
                          >
                            {showPasswords ? (
                              <EyeOff size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                            {showPasswords
                              ? "Hide passwords"
                              : "Show passwords"}
                          </button>

                          {passwordError && (
                            <p
                              role="alert"
                              className="text-sm text-status-danger"
                            >
                              {passwordError}
                            </p>
                          )}

                          {passwordMessage && (
                            <p
                              role="status"
                              className="text-sm text-status-success"
                            >
                              {passwordMessage}
                            </p>
                          )}

                          <button
                            type="submit"
                            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
                          >
                            Update Password
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                </Field>
              </div>

              <p className="mt-4 text-xs leading-5 text-text-muted">
                Password changes are not connected to authentication yet.
                Connect a secure backend endpoint to update a real password.
              </p>
            </section>

            {/* Notifications */}
            <section className="rounded-2xl border border-border-default bg-bg-main p-5 sm:p-7">
              <SectionHeading
                icon={Bell}
                title="Notifications"
                description="Choose which updates you want to receive."
              />

              <div className="divide-y divide-border-subtle">
                <Toggle
                  label="Job alerts"
                  description="Get notified when new jobs match your preferences."
                  checked={settings.jobAlerts}
                  onChange={(value) => updateSetting("jobAlerts", value)}
                />

                <Toggle
                  label="Application updates"
                  description="Receive updates about your application status."
                  checked={settings.applicationUpdates}
                  onChange={(value) =>
                    updateSetting("applicationUpdates", value)
                  }
                />

                <Toggle
                  label="Weekly recommendations"
                  description="Review a weekly selection of recommended jobs."
                  checked={settings.weeklyRecommendations}
                  onChange={(value) =>
                    updateSetting("weeklyRecommendations", value)
                  }
                />

                <Toggle
                  label="Product updates"
                  description="Hear about new features and improvements."
                  checked={settings.productUpdates}
                  onChange={(value) =>
                    updateSetting("productUpdates", value)
                  }
                />
              </div>
            </section>

            {/* Recommendation preferences */}
            <section className="rounded-2xl border border-border-default bg-bg-main p-5 sm:p-7">
              <SectionHeading
                icon={BriefcaseBusiness}
                title="Recommendation preferences"
                description="Help us find jobs that fit your career goals."
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Preferred job type">
                  <select
                    value={settings.jobType}
                    onChange={(e) =>
                      updateSetting("jobType", e.target.value)
                    }
                    className={inputClass}
                  >
                    <option value="Any">Any job type</option>
                    <option value="Internship">Internship</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                  </select>
                </Field>

                <Field label="Preferred work mode">
                  <select
                    value={settings.workMode}
                    onChange={(e) =>
                      updateSetting("workMode", e.target.value)
                    }
                    className={inputClass}
                  >
                    <option value="Any">Any work mode</option>
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </Field>

                <Field label="Preferred location">
                  <div className="relative">
                    <MapPin
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
                    />

                    <input
                      type="text"
                      value={settings.location}
                      onChange={(e) =>
                        updateSetting("location", e.target.value)
                      }
                      className={`${inputClass} pl-10`}
                      placeholder="e.g. Noida, Remote"
                    />
                  </div>
                </Field>

                <Field label="Minimum job match">
                  <div className="rounded-xl border border-border-default bg-bg-input p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-sm text-text-secondary">
                        Match score
                      </span>
                      <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-sm font-semibold text-primary">
                        {settings.minMatch}%
                      </span>
                    </div>

                    <input
                      type="range"
                      min="40"
                      max="100"
                      step="5"
                      value={settings.minMatch}
                      onChange={(e) =>
                        updateSetting("minMatch", Number(e.target.value))
                      }
                      className="w-full accent-primary"
                    />

                    <div className="mt-2 flex justify-between text-xs text-text-muted">
                      <span>40% match</span>
                      <span>100% match</span>
                    </div>
                  </div>
                </Field>
              </div>
            </section>

            {/* Privacy and security */}
            <section className="rounded-2xl border border-border-default bg-bg-main p-5 sm:p-7">
              <SectionHeading
                icon={ShieldCheck}
                title="Privacy & security"
                description="Control your profile visibility and security preferences."
              />

              <div className="divide-y divide-border-subtle">
                <Toggle
                  label="Profile visibility"
                  description="Allow recruiters to discover your profile."
                  checked={settings.profileVisibility}
                  onChange={(value) =>
                    updateSetting("profileVisibility", value)
                  }
                />

                <Toggle
                  label="Show skills to recruiters"
                  description="Display your listed skills when recruiters view your profile."
                  checked={settings.showSkills}
                  onChange={(value) => updateSetting("showSkills", value)}
                />

                <Toggle
                  label="Two-factor authentication"
                  description="This is a UI preference only; authentication is not connected."
                  checked={settings.twoFactor}
                  onChange={(value) => updateSetting("twoFactor", value)}
                />
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-border-default bg-bg-dark p-4">
                <Eye
                  size={18}
                  className="mt-0.5 shrink-0 text-text-muted"
                />
                <p className="text-xs leading-5 text-text-muted">
                  These privacy options currently update the interface state
                  only. They do not change recruiter access or account security
                  until backend functionality is implemented.
                </p>
              </div>
            </section>

            {/* Save settings */}
            <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-xl border border-border-default px-5 py-3 text-sm font-semibold text-text-secondary transition hover:bg-bg-card"
              >
                Discard changes
              </button>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-bg-outer transition hover:bg-primary-hover"
              >
                <Save size={17} />
                Save settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
