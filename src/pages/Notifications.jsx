import { useState } from "react";
import Navbar from "../components/Navbar";

function Notifications() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar currentUser={currentUser} />

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg mt-8 p-8">
        <h1 className="text-3xl font-bold mb-8">Notifications</h1>

        {currentUser.notifications.length > 0 ? (
          currentUser.notifications.map((notification) => (
            <div key={notification.id} className="border-b py-4">
              <h2 className="font-bold text-lg">{notification.title}</h2>

              <p className="text-gray-600">{notification.message}</p>

              <small className="text-gray-400">{notification.date}</small>
            </div>
          ))
        ) : (
          <p>No notifications yet.</p>
        )}
      </div>
    </div>
  );
}

export default Notifications;
