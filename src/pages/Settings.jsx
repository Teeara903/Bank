import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Settings() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar currentUser={currentUser} />

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg mt-8 p-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-5">
          <Link
            to="/profile"
            className="block p-4 border rounded-lg hover:bg-gray-100"
          >
            👤 Profile
          </Link>

          <Link
            to="/change-password"
            className="block p-4 border rounded-lg hover:bg-gray-100"
          >
            🔑 Change Password
          </Link>

          <Link
            to="/forgot-password"
            className="block p-4 border rounded-lg hover:bg-gray-100"
          >
            ❓ Forgot Password
          </Link>

          <Link
            to="/notifications"
            className="block p-4 border rounded-lg hover:bg-gray-100"
          >
            🔔 Notifications
          </Link>

          <Link
            to="/logout"
            className="block p-4 border rounded-lg text-red-600 hover:bg-red-50"
          >
            🚪 Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Settings;
