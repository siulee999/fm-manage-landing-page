import { ReactSVG } from "react-svg";

export const Footer = () => {
  return (
    <footer className="bg-n-9 py-section-narrow sm:py-section-wide">
      <div className="limit-container flex flex-col-reverse justify-between sm:flex-row relative sm:static items-stretch gap-section-narrow sm:gap-0">
        <div className="flex flex-col-reverse justify-between sm:flex-col gap-section-narrow mb-section-wide sm:mb-0">
          <a className="text-white flex-center">
            <ReactSVG src="assets/logo.svg" />
          </a>

          <div className="flex items-center justify-around sm:justify-between sm:gap-4">
            <a href="#">
              <ReactSVG
                src="assets/icon-facebook.svg"
                className="size-8 sm:size-5 text-white hover:text-accent-4" />
            </a>
            <a href="#">
              <ReactSVG
                src="assets/icon-youtube.svg"
                className="size-8 sm:size-5 text-white hover:text-accent-4" />
            </a>
            <a href="#">
              <ReactSVG
                src="assets/icon-twitter.svg"
                className="size-8 sm:size-5 text-white hover:text-accent-4" />
            </a>
            <a href="#">
              <ReactSVG
                src="assets/icon-pinterest.svg"
                className="size-8 sm:size-5 text-white hover:text-accent-4" />
            </a>
            <a href="#">
              <ReactSVG
                src="assets/icon-instagram.svg"
                className="size-8 sm:size-5 text-white hover:text-accent-4" />
            </a>
          </div>
        </div>

        <nav>
          <ul className="grid grid-rows-4 grid-cols-2 grid-flow-col text-sm pl-[16vw] py-2 gap-x-[10vw] gap-y-2 sm:gap-x-[7vw] sm:gap-y-4 sm:p-0">
            <li><a href="#" className="hover:text-accent-4">Home</a></li>
            <li><a href="#" className="hover:text-accent-4">Pricing</a></li>
            <li><a href="#" className="hover:text-accent-4">Products</a></li>
            <li><a href="#" className="hover:text-accent-4">About Us</a></li>
            <li><a href="#" className="hover:text-accent-4">Careers</a></li>
            <li><a href="#" className="hover:text-accent-4">Community</a></li>
            <li><a href="#" className="hover:text-accent-4">Privacy Policy</a></li>
          </ul>
        </nav>

        <div className="flex flex-col justify-between items-center sm:w-1/4 sm:items-end">
          <form className="grid grid-cols-[1fr_auto]" noValidate>
            <input
              placeholder="Updates in your inbox..."
              type="email"
              required
              className="bg-n-1 rounded-3xl px-4 py-2 text-sm text-accent-4 outline-0 overflow-ellipsis w-full placeholder:text-xs placeholder:text-n-5 focus:outline-accent-4 focus:outline-1 peer" />
            <button type="submit"
              className="primary-btn ml-2 hover:bg-[#ffa068]">
              Go
            </button>
            <p className="col-span-full text-red-700 text-xs italic p-2 hidden peer-user-invalid:block">Please insert a valid email.</p>
          </form>
          <p className="text-right text-xs absolute bottom-0 sm:static">
            Copyright 2020.All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
