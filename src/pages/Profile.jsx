import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
function Profile() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );
 const [preview, setPreview] = useState(currentUser.profilePicture || "");
 const [isEditing, setIsEditing] = useState(false);
 const [name, setName] = useState(currentUser.name);
 const [email, setEmail] = useState(currentUser.email);
 const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setPreview(reader.result);
  };

  reader.readAsDataURL(file);

 }; 
 const handleSave = () => {
  const updatedUser = {
    ...currentUser,
    name,
    email,
    profilePicture: preview,
  };
  localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const updatedUsers = users.map((user) =>
    user.id === currentUser.id ? updatedUser : user,
  );

  localStorage.setItem("users", JSON.stringify(updatedUsers));

  setIsEditing(false);
 };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar currentUser={currentUser} />

      <div className="bg-white rounded-2xl shadow-lg mt-8 p-8 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={
              preview || "https://ui-avatars.com/api/?name=" + currentUser.name
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600"
          />

          <input type="file" accept="image/*" onChange={handleImageChange} />
          <h2 className="text-3xl font-bold mt-4">{currentUser.name}</h2>

          <p className="text-gray-500">{currentUser.accountType} Account</p>
        </div>
        <div>
          <p className="text-gray-500">Full Name</p>

          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg p-3 mt-2"
            />
          ) : (
            <h2 className="text-xl font-semibold">{currentUser.name}</h2>
          )}
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg p-3 mt-2"
            />
          ) : (
            <h2 className="text-xl font-semibold">{currentUser.email}</h2>
          )}
        </div>
        <div className="mt-8 space-y-4">
          <Link
            to="/change-password"
            className="block bg-blue-700 text-white text-center py-3 rounded-lg hover:bg-blue-800"
          >
            🔑 Change Password
          </Link>
        </div>
        {isEditing && (
          <button
            onClick={handleSave}
            className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg"
          >
            Save Changes
          </button>
        )}

        <div>
          <p className="text-gray-500">Account Number</p>
          <h2 className="text-xl font-semibold">{currentUser.accountNumber}</h2>
        </div>

        <div>
          <p className="text-gray-500">Account Type</p>
          <h2 className="text-xl font-semibold">{currentUser.accountType}</h2>
        </div>

        <div>
          <p className="text-gray-500">Available Balance</p>
          <h2 className="text-2xl font-bold text-blue-700">
            ₦{currentUser.balance.toLocaleString()}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Profile;
