import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function StudentLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">

      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
}

export default StudentLayout;