import { useState } from "react";
import { ReactSVG } from "react-svg";

export const Header = () => {
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  function toggleNavbar() {
    setIsNavbarOpened(!isNavbarOpened);
  }

  return (
    <header className="limit-container mt-section-narrow mb-section-wide">
      <div className="flex-between">
        <a href="#">
          <div className="w-40 text-logo">
            <ReactSVG src="assets/logo.svg" />
          </div>
        </a>

        <button className="sm:hidden" onClick={toggleNavbar}>
          <div className="size-6 flex-center">
            {
              isNavbarOpened
                ? <img src="assets/icon-close.svg" width={"100%"} />
                : <img src="assets/icon-hamburger.svg" width={"100%"} />
            }
          </div>
        </button>

        <nav className={`fixed top-20 left-0 right-0 z-50 mx-4 ${isNavbarOpened ? "block bg-white" : "hidden"} text-primary-9 font-bold text-sm sm:static sm:block sm:p-0 bg-transparent`}>
          <ul className="flex flex-col items-center py-10 gap-6 sm:flex-row sm:p-0">
            <li className="hover:text-primary-9/70"><a href="#">Pricing</a></li>
            <li className="hover:text-primary-9/70"><a href="#">Product</a></li>
            <li className="hover:text-primary-9/70"><a href="#">About Us</a></li>
            <li className="hover:text-primary-9/70"><a href="#">Careers</a></li>
            <li className="hover:text-primary-9/70"><a href="#">Community</a></li>
          </ul>
        </nav>

        <div className={`${isNavbarOpened ? "block" : "hidden"} sm:hidden fixed inset-0 z-10 bg-gradient-to-b from-white/30 to-black/20`} onClick={toggleNavbar}></div>

        <button className="primary-btn hidden lg:block">Get Started</button>
      </div>
    </header>
  )
}