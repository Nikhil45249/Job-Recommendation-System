
import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-bg-outer text-text-primary">
      {/* Fixed Navbar */}
      <div className="z-10 shrink-0">
        <DashboardNavbar />
      </div>

      {/* Dashboard Body */}
      <div className="flex min-h-0 flex-1 gap-5 overflow-hidden px-5 py-4">
        {/* Fixed Sidebar */}
        <div className="h-full shrink-0">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <main className="h-full min-h-0 min-w-0 flex-1 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
