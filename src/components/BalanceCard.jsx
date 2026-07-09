import { motion } from "framer-motion";

function BalanceCard({ icon, title, amount, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-6"
    >
      <div className={`text-4xl mb-4 ${color}`}>{icon}</div>

      <h3 className="text-gray-500">{title}</h3>

      <p className="text-3xl font-bold mt-2">{amount}</p>
      
    </motion.div>
  );
}

export default BalanceCard;
