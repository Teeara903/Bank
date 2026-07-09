import {
  FaWallet,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BankCard from "../components/BankCard";
import BalanceCard from "../components/BalanceCard";
import Charts from "../components/Charts";
import Transaction from "../components/Transaction";

function Dashboard() {
  const [currentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );

  // Calculate total income
  const totalIncome = currentUser.monthlyData.reduce(
    (total, month) => total + month.income,
    0,
  );

  // Calculate total expenses
  const totalExpenses = currentUser.monthlyData.reduce(
    (total, month) => total + month.expenses,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-blue-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-10">💳 SecureBank</h1>

        <ul className="flex flex-wrap md:flex-col gap-4 md:space-y-6">
          <li className="cursor-pointer hover:text-blue-300">🏠 Dashboard</li>

          <li>
            <Link to="/transactions" className="hover:text-blue-300">
              💸 Transactions
            </Link>
          </li>

          <li>
            <Link to="/transfer" className="hover:text-blue-300">
              💰 Transfer
            </Link>
          </li>
          <li>
            <Link to="/purchases" className="hover:text-blue-300">
              🛒 Purchases
            </Link>
          </li>
          <li>
            <Link to="/deposit" className="hover:text-blue-300">
              💰 Deposit
            </Link>
          </li>
          <li>
            <Link to="/withdraw" className="hover:text-blue-300">
              🏧 Withdraw
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="hover:text-blue-300">
              🔔 Notifications
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-300">
              👤 Profile
            </Link>
          </li>
          <li>
            <Link to="/logout" className="hover:text-blue-300">
              🚪 Logout
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:text-blue-300">
              ⚙ Settings
            </Link>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <Navbar currentUser={currentUser} />

        <h2 className="text-2xl md:text-4xl font-bold my-8">
          Welcome Back, {currentUser.name} 👋
        </h2>

        <BankCard currentUser={currentUser} />

        {/* Balance Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <BalanceCard
            icon={<FaWallet />}
            title="Account Balance"
            amount={`₦${currentUser.balance.toLocaleString()}`}
            color="text-blue-600"
          />

          <BalanceCard
            icon={<FaMoneyBillWave />}
            title="Income"
            amount={`₦${totalIncome.toLocaleString()}`}
            color="text-green-600"
          />

          <BalanceCard
            icon={<FaExchangeAlt />}
            title="Expenses"
            amount={`₦${totalExpenses.toLocaleString()}`}
            color="text-red-500"
          />
        </div>

        {/* Recent Transactions */}

        <div className="bg-white rounded-2xl shadow-lg mt-10 p-4 md:p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>

          {currentUser.transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg mt-10 p-4 md:p-6 overflow-x-auto">
          <Charts data={currentUser.monthlyData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
