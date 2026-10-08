import DashboardNavbar from "../components/DashboardNavbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg-main text-text-primary">

      {/* Dashboard Navbar */}
      <DashboardNavbar />

      {/* Main Area */}
      <div className="flex items-stretch gap-5 px-5 py-4">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex flex-1 flex-col">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;