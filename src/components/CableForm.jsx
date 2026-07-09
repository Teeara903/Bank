import { useState } from "react";

function CableForm() {
  const [smartCard, setSmartCard] = useState("");
  const [provider, setProvider] = useState("DSTV");
  const [bouquet, setBouquet] = useState("DSTV Padi - ₦3600");

  const bouquets = {
    "DSTV Padi - ₦3600": 3600,
    "DSTV Yanga - ₦5100": 5100,
    "DSTV Confam - ₦9300": 9300,
    "GOtv Smallie - ₦1900": 1900,
    "GOtv Max - ₦7200": 7200,
    "StarTimes Basic - ₦2500": 2500,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const sender = users.find((user) => user.id === currentUser.id);

    if (!smartCard) {
      alert("Enter Smart Card Number.");
      return;
    }

    const amount = bouquets[bouquet];

    if (sender.balance < amount) {
      alert("Insufficient balance.");
      return;
    }

    sender.balance -= amount;

    sender.notifications.unshift({
      id: Date.now(),
      title: "Cable Subscription",
      message: `${provider} subscription successful.`,
      date: new Date().toLocaleString(),
      read: false,
    });

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(sender));

    alert("Cable subscription successful!");

    setSmartCard("");
    setProvider("DSTV");
    setBouquet("DSTV Padi - ₦3600");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">Smart Card Number</label>

        <input
          type="text"
          value={smartCard}
          onChange={(e) => setSmartCard(e.target.value)}
          placeholder="Enter Smart Card Number"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Provider</label>

        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value)}
          className="w-full border rounded-lg p-3"
        >
          <option>DSTV</option>
          <option>GOtv</option>
          <option>StarTimes</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Bouquet</label>

        <select
          value={bouquet}
          onChange={(e) => setBouquet(e.target.value)}
          className="w-full border rounded-lg p-3"
        >
          {Object.keys(bouquets).map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
      >
        Subscribe
      </button>
    </form>
  );
}

export default CableForm;
