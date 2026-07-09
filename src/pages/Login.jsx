import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";
import users from "../data/users";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const allUsers = [...users, ...storedUsers];

    const user = allUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));

      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

    // if (email === "success@gmail.com" && password === "12345678") {
    //   setError("");
    //   navigate("/dashboard");
    // } else {
    //   setError("Invalid email or password.");
    // }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8"
      >
        <div className="flex justify-center mb-4">
          <FaUniversity className="text-5xl text-blue-600" />
        </div>

        <h1 className="text-3xl font-bold text-center">SecureBank</h1>

        <p className="text-center text-gray-500 mt-2">Welcome Back 👋</p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-4 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-blue-600 text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          
          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
          <div className="text-center mt-6">
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-semibold hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>

        {/* <div className="mt-8 bg-blue-50 rounded-xl p-4">
          <h2 className="font-semibold">Demo Account</h2>

          <p className="text-sm mt-2">
            Email: <strong>success@gmail.com</strong>
          </p>

          <p className="text-sm">
            Password: <strong>12345678</strong>
          </p>
        </div> */}
      </motion.div>
    </div>
  );
}

export default Login;
