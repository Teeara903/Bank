import { useState } from "react";
import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";

function Transactions() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar currentUser={currentUser} />

      <div className="bg-white rounded-2xl shadow-lg mt-8 p-6">
        <h2 className="text-3xl font-bold mb-6">Transaction History</h2>

        {currentUser.transactions.length > 0 ? (
          currentUser.transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <p className="text-gray-500">No transactions yet.</p>
        )}
      </div>
    </div>
  );
}

export default Transactions;
