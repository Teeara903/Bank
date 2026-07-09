import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function Transaction({ transaction }) {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-full ${
            transaction.type === "credit" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {transaction.type === "credit" ? (
            <FaArrowUp className="text-green-600 text-xl" />
          ) : (
            <FaArrowDown className="text-red-500 text-xl" />
          )}
        </div>

        <div>
          <h3 className="font-semibold">{transaction.title}</h3>

          <p className="text-gray-500 text-sm">{transaction.date}</p>
        </div>
      </div>

      <p
        className={`font-bold ${
          transaction.type === "credit" ? "text-green-600" : "text-red-500"
        }`}
      >
        {transaction.type === "credit" ? "+" : "-"}₦
        {transaction.amount.toLocaleString()}
      </p>
    </div>
  );
}

export default Transaction;
