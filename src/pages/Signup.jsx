import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      accountNumber: Math.floor(
        1000000000 + Math.random() * 9000000000,
      ).toString(),
      balance: 100000,
      accountType: "Standard",
      transactions: [],
      notifications: [],
      monthlyData: [
        { month: "Jan", income: 50000, expenses: 10000 },
        { month: "Feb", income: 70000, expenses: 15000 },
        { month: "Mar", income: 90000, expenses: 30000 },
        { month: "Apr", income: 60000, expenses: 25000 },
        { month: "May", income: 80000, expenses: 20000 },
        { month: "Jun", income: 100000, expenses: 35000 },
      ],
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Sign Up
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
