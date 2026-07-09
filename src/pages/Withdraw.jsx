import { useState } from "react";
import Navbar from "../components/Navbar";

function Withdraw() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );

  const [amount, setAmount] = useState("");

  const handleWithdraw = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const sender = users.find((user) => user.id === currentUser.id);

    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid amount.");
      return;
    }

    if (sender.balance < Number(amount)) {
      alert("Insufficient balance.");
      return;
    }

    sender.balance -= Number(amount);

    sender.transactions.unshift({
      id: Date.now(),
      type: "debit",
      title: "Cash Withdrawal",
      amount: Number(amount),
      date: new Date().toLocaleString(),
    });

    sender.notifications.unshift({
      id: Date.now() + 1,
      title: "Withdrawal Successful",
      message: `₦${Number(amount).toLocaleString()} withdrawn successfully.`,
      date: new Date().toLocaleString(),
      read: false,
    });

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(sender));

    alert("Withdrawal Successful");

    setAmount("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar currentUser={currentUser} />

      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8">
        <h1 className="text-3xl font-bold mb-8">Withdraw Money</h1>

        <form onSubmit={handleWithdraw} className="space-y-6">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="₦0"
            className="w-full border rounded-lg p-3"
          />

          <button className="w-full bg-red-700 text-white py-3 rounded-lg">
            Withdraw
          </button>
        </form>
      </div>
    </div>
  );
}

export default Withdraw;
