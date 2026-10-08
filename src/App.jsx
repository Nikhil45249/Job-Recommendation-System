import { Routes, Route } from "react-router-dom";

import PublicNavbar from "./components/PublicNavbar";
import DashboardLayout from "./layouts/DashboardLayout";


// ====================
// Public Pages
// ====================

function Home() {
  return (
    <div className="min-h-screen bg-bg-main">
      <PublicNavbar />

      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center">
        <h1 className="text-4xl font-bold text-text-primary">
          Job Recommendation System
        </h1>
      </main>
    </div>
  );
}

function Login() {
  return (
    <div className="min-h-screen bg-bg-main">
      <h1 className="text-text-primary">Login</h1>
    </div>
  );
}

function SignUp() {
  return (
    <div className="min-h-screen bg-bg-main">
      <h1 className="text-text-primary">Sign Up</h1>
    </div>
  );
}

function CompleteProfile() {
  return (
    <div className="min-h-screen bg-bg-main">
      <h1 className="text-text-primary">Complete Profile</h1>
    </div>
  );
}


// ====================
// Dashboard Pages
// ====================

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-1 flex-col rounded-xl border border-border bg-bg-card">
        <div className="flex flex-1 items-center justify-center">
          <h1 className="text-3xl font-bold text-text-primary">
            Dashboard
          </h1>
        </div>
      </div>
    </DashboardLayout>
  );
}

function Jobs() {
  return (
    <DashboardLayout>
      <div className="flex min-h-full items-center justify-center rounded-xl border border-border bg-bg-card">
        <h1 className="text-3xl font-bold text-text-primary">
          All Jobs
        </h1>
      </div>
    </DashboardLayout>
  );
}

function JobDetails() {
  return (
    <DashboardLayout>
      <div className="flex min-h-full items-center justify-center rounded-xl border border-border bg-bg-card">
        <h1 className="text-3xl font-bold text-text-primary">
          Job Details
        </h1>
      </div>
    </DashboardLayout>
  );
}

function Applications() {
  return (
    <DashboardLayout>
      <div className="flex min-h-full items-center justify-center rounded-xl border border-border bg-bg-card">
        <h1 className="text-3xl font-bold text-text-primary">
          My Applications
        </h1>
      </div>
    </DashboardLayout>
  );
}

function SavedJobs() {
  return (
    <DashboardLayout>
      <div className="flex min-h-full items-center justify-center rounded-xl border border-border bg-bg-card">
        <h1 className="text-3xl font-bold text-text-primary">
          Saved Jobs
        </h1>
      </div>
    </DashboardLayout>
  );
}

function Profile() {
  return (
    <DashboardLayout>
      <div className="flex min-h-full items-center justify-center rounded-xl border border-border bg-bg-card">
        <h1 className="text-3xl font-bold text-text-primary">
          My Profile
        </h1>
      </div>
    </DashboardLayout>
  );
}


// ====================
// App Routes
// ====================

const App = () => {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/complete-profile"
        element={<CompleteProfile />}
      />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Jobs */}
      <Route path="/jobs" element={<Jobs />} />

      <Route
        path="/jobs/:id"
        element={<JobDetails />}
      />

      {/* Applications */}
      <Route
        path="/applications"
        element={<Applications />}
      />

      {/* Saved Jobs */}
      <Route
        path="/saved-jobs"
        element={<SavedJobs />}
      />

      {/* Profile */}
      <Route
        path="/profile"
        element={<Profile />}
      />

    </Routes>
  );
};

export default App;