import { useState } from "react";

function AirtimeForm() {
  const [phone, setPhone] = useState("");
  const [network, setNetwork] = useState("MTN");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const sender = users.find((user) => user.id === currentUser.id);

    if (!phone || !amount) {
      alert("Please fill all fields.");
      return;
    }

    if (phone.length !== 11) {
      alert("Phone number must be 11 digits.");
      return;
    }

    if (sender.balance < Number(amount)) {
      alert("Insufficient balance.");
      return;
    }

    sender.balance -= Number(amount);

    sender.notifications.unshift({
      id: Date.now(),
      title: "Airtime Purchase",
      message: `${network} Airtime worth ₦${amount} purchased.`,
      date: new Date().toLocaleString(),
      read: false,
    });

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(sender));

    alert("Airtime purchase successful!");

    setPhone("");
    setNetwork("MTN");
    setAmount("");
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
        <label className="block mb-2 font-medium">Amount</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="₦100"
          className="w-full border rounded-lg p-3"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold"
      >
        Buy Airtime
      </button>
    </form>
  );
}

export default AirtimeForm;
