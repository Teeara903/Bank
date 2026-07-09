import { useState } from "react";

import { useNavigate } from "react-router-dom";
function Transfer() {
  const [recipientName, setRecipientName] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
const navigate = useNavigate();
const handleRecipientChange = (e) => {
  const accountNumber = e.target.value;

  setRecipient(accountNumber);

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((user) => user.accountNumber === accountNumber);

  if (user) {
    setRecipientName(user.name);
  } else {
    setRecipientName("");
  }
};
  const handleTransfer = (e) => {
    
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // Find the sender
    const sender = users.find((user) => user.email === currentUser.email);

    // Find the receiver using the account number
    const receiver = users.find((user) => user.accountNumber === recipient);

    if (!receiver) {
      alert("Recipient not found.");
      return;
    }

    if (sender.balance < Number(amount)) {
      alert("Insufficient balance.");
      return;
    }

    // Debit sender
    sender.balance -= Number(amount);

    // Credit receiver
    receiver.balance += Number(amount);
    sender.notifications.unshift({
      id: Date.now(),
      title: "Transfer Successful",
      message: `₦${amount} sent to ${receiver.name}`,
      date: new Date().toLocaleString(),
      read: false,
    });

    receiver.notifications.unshift({
      id: Date.now() + 1,
      title: "Money Received",
      message: `₦${amount} received from ${sender.name}`,
      date: new Date().toLocaleString(),
      read: false,
    });
    // Save all users
    localStorage.setItem("users", JSON.stringify(users));

    // Update current logged-in user
    localStorage.setItem("currentUser", JSON.stringify(sender));
    alert(`₦${amount} sent to ${recipient}`);
    navigate("/dashboard");
    setRecipient("");
    setAmount("");
    setDescription("");
  };;;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Transfer Money</h1>

        <form onSubmit={handleTransfer} className="space-y-6">
          <div>
            <label className="block font-medium mb-2">Recipient</label>

            {/* <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="Enter recipient name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            /> */}
            <label className="block font-medium mb-2">Account Number</label>

            <input
              type="text"
              value={recipient}
              onChange={handleRecipientChange}
              placeholder="Enter 10-digit account number"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {recipientName && (
              <p className="text-green-600 font-semibold mt-2">
                ✓ {recipientName}
              </p>
            )}
          </div>

          <div>
            <label className="block font-medium mb-2">Amount</label>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="₦0.00"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Description</label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Money
          </button>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
