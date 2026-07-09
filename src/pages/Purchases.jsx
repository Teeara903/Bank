import { useState } from "react";
import Navbar from "../components/Navbar";
import AirtimeForm from "../components/AirtimeForm";
import DataForm from "../components/DataForm";
import ElectricityForm from "../components/ElectricityForm";
import CableForm from "../components/CableForm";

function Purchases() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );

  const [activeTab, setActiveTab] = useState("airtime");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar currentUser={currentUser} />

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg mt-8 p-8">
        <h1 className="text-3xl font-bold mb-8">Purchases</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button
            onClick={() => setActiveTab("airtime")}
            className={`p-4 rounded-xl font-semibold ${
              activeTab === "airtime" ? "bg-blue-700 text-white" : "bg-gray-100"
            }`}
          >
            📱 Airtime
          </button>

          <button
            onClick={() => setActiveTab("data")}
            className={`p-4 rounded-xl font-semibold ${
              activeTab === "data" ? "bg-blue-700 text-white" : "bg-gray-100"
            }`}
          >
            📶 Data
          </button>

          <button
            onClick={() => setActiveTab("electricity")}
            className={`p-4 rounded-xl font-semibold ${
              activeTab === "electricity"
                ? "bg-blue-700 text-white"
                : "bg-gray-100"
            }`}
          >
            💡 Electricity
          </button>

          <button
            onClick={() => setActiveTab("cable")}
            className={`p-4 rounded-xl font-semibold ${
              activeTab === "cable" ? "bg-blue-700 text-white" : "bg-gray-100"
            }`}
          >
            📺 Cable TV
          </button>
        </div>

        {activeTab === "airtime" && <AirtimeForm />}
        {activeTab === "data" && <DataForm />}
        {activeTab === "electricity" && <ElectricityForm />}
        {activeTab === "cable" && <CableForm />}
      </div>
    </div>
  );
}

export default Purchases;
