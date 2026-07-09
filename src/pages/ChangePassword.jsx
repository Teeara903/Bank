import { useState } from "react";
import Navbar from "../components/Navbar";

function ChangePassword() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
  if (currentPassword !== currentUser.password) {
    alert("Current password is incorrect.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }
  const updatedUser = {
    ...currentUser,
    password: newPassword,
  };
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map((user) =>
    user.id === currentUser.id ? updatedUser : user,
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));

//   alert("Password updated successfully!");
updatedUser.notifications.unshift({
  id: Date.now(),
  title: "Password Changed",
  message: "Your password has been changed successfully.",
  date: new Date().toLocaleString(),
  read: false,
});
  setCurrentPassword("");
  setNewPassword("");
  setConfirmPassword("");
};
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar currentUser={currentUser} />

      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold mb-8">Change Password</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-medium">Current Password</label>

            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">New Password</label>

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Confirm Password</label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
