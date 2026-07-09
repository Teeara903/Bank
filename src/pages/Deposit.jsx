import { useState } from "react";
import Navbar from "../components/Navbar";

function Deposit() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );

  const [amount, setAmount] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const sender = users.find((user) => user.id === currentUser.id);

    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid amount.");
      return;
    }

    // Credit account
    sender.balance += Number(amount);

    // Transaction
    sender.transactions.unshift({
      id: Date.now(),
      type: "credit",
      title: "Cash Deposit",
      amount: Number(amount),
      date: new Date().toLocaleString(),
    });

    // Notification
    sender.notifications.unshift({
      id: Date.now() + 1,
      title: "Deposit Successful",
      message: `₦${Number(amount).toLocaleString()} deposited into your account.`,
      date: new Date().toLocaleString(),
      read: false,
    });

    // Save
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(sender));

    alert("Deposit Successful!");

    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar currentUser={currentUser} />

      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold mb-8">Deposit Money</h1>

        <form onSubmit={handleDeposit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Amount</label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="₦0"
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg"
          >
            Deposit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Deposit;
