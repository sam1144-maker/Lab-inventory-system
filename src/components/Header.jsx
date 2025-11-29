import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute text-white top-0 left-0 w-full bg-transparent z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand - Left Side */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              lab<span className="text-purple-500">Invo</span>
            </h1>
          </div>

          {/* Navigation Links - Center (Hidden on Mobile) */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#benefits"
              className="hover:text-gray-300 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#specifications"
              className="hover:text-gray-300 transition-colors"
            >
              Specifications
            </a>
            <a href="#how-to" className="hover:text-gray-300 transition-colors">
              How-to
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Right Side: Auth + Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Auth Buttons - Desktop */}
            <div className="hidden md:block">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-purple-700/90 hover:bg-purple-900 text-white px-4 py-2 rounded-lg transition-colors text-sm md:text-base font-medium">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 md:w-12 md:h-12",
                    },
                  }}
                />
              </SignedIn>
            </div>

            {/* Hamburger Button - Mobile Only */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pt-4 pb-2 border-t border-gray-700 mt-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#benefits"
                className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#specifications"
                className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Specifications
              </a>
              <a
                href="#how-to"
                className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How-to
              </a>
              <a
                href="#contact"
                className="hover:text-gray-300 hover:bg-gray-700 px-3 py-2 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>

              {/* Auth Section in Mobile Menu */}
              <div className="pt-3 border-t border-gray-700">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <div className="flex items-center space-x-3 px-3 py-2">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10",
                        },
                      }}
                    />
                    <span className="text-sm text-gray-300">My Account</span>
                  </div>
                </SignedIn>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
