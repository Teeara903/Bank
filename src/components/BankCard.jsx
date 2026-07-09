import { motion } from "framer-motion";

function BankCard({ currentUser }) {
  const copyAccountNumber = () => {
    navigator.clipboard.writeText(currentUser.accountNumber);

    alert("Account number copied!");
  };
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-linear-to-r from-blue-800 to-blue-500 text-white rounded-3xl p-8 shadow-xl mt-8 max-w-md"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">SecureBank</h2>
        <span className="text-xl font-semibold">VISA</span>
      </div>

      {/* <div className="mt-10">
        <p className="tracking-[6px] text-xl">{currentUser.accountNumber}</p> */}
<div className="mt-4">
  <p className="text-sm opacity-80">Account Number</p>

  <div className="flex items-center justify-between">
    <h2 className="text-2xl font-semibold">
      {currentUser.accountNumber}
    </h2>

    <button
      onClick={copyAccountNumber}
      className="bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition"
    >
      Copy
    </button>
  </div>
        <div className="flex justify-between mt-8">
          <div>
            <p className="text-sm opacity-80">Card Holder</p>
            <h3 className="font-semibold">{currentUser.name.toUpperCase()}</h3>
          </div>
          <p className="text-sm opacity-80">Expires</p>
          <h3 className="font-semibold">12/28</h3>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm opacity-80">Available Balance</p>

        <h2 className="text-3xl font-bold">
          ₦{currentUser.balance.toLocaleString()}
        </h2>
      </div>
      <div className="mt-6">
        <p className="text-sm opacity-80">Account Number</p>
        <h3 className="text-xl font-semibold">{currentUser.accountNumber}</h3>
      </div>
    </motion.div>
  );
}

export default BankCard;
