import { NavLink } from "react-router-dom";

const NavBar = () => {
  const NAVITEMS = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    { label: "Cart", link: "/cart" },
    { label: "Contact Us", link: "/contact" },
    { label: "Dashboard", link: "/dashboard" },
    { label: "Login", link: "/login" }
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          V-Shop
        </h1>

        {/* Links */}
        <div className="flex gap-8 text-lg">
          {NAVITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.link}
              className={({ isActive }) =>
                `transition duration-200 hover:text-yellow-400 ${
                  isActive
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "text-gray-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;