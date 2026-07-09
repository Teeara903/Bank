import { useState } from "react";

function DataForm() {
  const [phone, setPhone] = useState("");
  const [network, setNetwork] = useState("MTN");
  const [plan, setPlan] = useState("1GB - ₦500");

  const plans = {
    "1GB - ₦500": 500,
    "2GB - ₦1000": 1000,
    "5GB - ₦2000": 2000,
    "10GB - ₦4000": 4000,
    "20GB - ₦8000": 8000,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const sender = users.find((user) => user.id === currentUser.id);

    if (!phone) {
      alert("Enter a phone number.");
      return;
    }

    if (phone.length !== 11) {
      alert("Phone number must be 11 digits.");
      return;
    }

    const amount = plans[plan];

    if (sender.balance < amount) {
      alert("Insufficient balance.");
      return;
    }

    sender.balance -= amount;

    sender.notifications.unshift({
      id: Date.now(),
      title: "Data Purchase",
      message: `${network} ${plan} purchased.`,
      date: new Date().toLocaleString(),
      read: false,
    });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(sender));

    alert("Data purchase successful!");

    setPhone("");
    setNetwork("MTN");
    setPlan("1GB - ₦500");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">Phone Number</label>

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="08012345678"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Network</label>

        <select
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
          className="w-full border rounded-lg p-3"
        >
          <option>MTN</option>
          <option>Airtel</option>
          <option>Glo</option>
          <option>9mobile</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Data Plan</label>

        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="w-full border rounded-lg p-3"
        >
          {Object.keys(plans).map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold"
      >
        Buy Data
      </button>
    </form>
  );
}

export default DataForm;
