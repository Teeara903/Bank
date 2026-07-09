import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar(currentUser) {
  return (
    <header className="bg-white shadow-md p-5 flex items-center justify-between rounded-2xl">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-96">
        <FaSearch className="text-gray-500 mr-3" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        <FaBell className="text-2xl text-gray-600 cursor-pointer hover:text-blue-600" />

        <div className="flex items-center gap-3">
          <FaUserCircle className="text-4xl text-blue-600" />

          <div>
            <h3 className="font-semibold">{currentUser.name}</h3>

            <p className="text-sm text-gray-500">{currentUser.accountType}</p>
          </div>
        </div>
      </div>
      {/* <Link
        to="/dashboard"
        className="bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        🏠 Dashboard
      </Link> */}
      <Link
        to="/dashboard"
        className="bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Menu
      </Link>
    </header>
  );
}

export default Navbar;
