import { useState } from "react";

function ElectricityForm() {
  const [meterNumber, setMeterNumber] = useState("");
  const [provider, setProvider] = useState("IKEDC");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const sender = users.find((user) => user.id === currentUser.id);

    if (!meterNumber || !amount) {
      alert("Please fill all fields.");
      return;
    }

    if (sender.balance < Number(amount)) {
      alert("Insufficient balance.");
      return;
    }

    sender.balance -= Number(amount);

    sender.notifications.unshift({
      id: Date.now(),
      title: "Electricity Payment",
      message: `${provider} Electricity payment successful.`,
      date: new Date().toLocaleString(),
      read: false,
    });

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(sender));

    alert("Electricity payment successful!");

    setMeterNumber("");
    setProvider("IKEDC");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium">Meter Number</label>

        <input
          type="text"
          value={meterNumber}
          onChange={(e) => setMeterNumber(e.target.value)}
          placeholder="Enter meter number"
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
          <option>IKEDC</option>
          <option>EKEDC</option>
          <option>IBEDC</option>
          <option>AEDC</option>
          <option>EEDC</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium">Amount</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="₦1000"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800"
      >
        Pay Electricity Bill
      </button>
    </form>
  );
}

export default ElectricityForm;
