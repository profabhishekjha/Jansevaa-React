import '../Style.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer-img relative py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full px-4 lg:w-6/12">
              <h4 className="text-3xl font-semibold text-white">{`Let's keep in touch!`}</h4>
              <h3 className="my-2 text-lg leading-tight text-white">
                {`Find us on any of these platforms, we respond 1-2 business days.`}
              </h3>
              <div className="mb-6 mt-6 flex gap-8 lg:mb-0">
                <a href="https://www.twitter.com/">
                  <button
                    className=" text-lightBlue-400 align-center mr-2 h-10 w-10 items-center justify-center rounded-full font-normal outline-none focus:outline-none"
                    type="button">
                    <img src="/images/socials/twitter.svg" alt="logo" className="w-[90%]" />
                  </button>
                </a>
                <a href="https://www.facebook.com/">
                  <button
                    className=" text-lightBlue-600 align-center mr-2 h-10 w-10 items-center justify-center rounded-full font-normal outline-none focus:outline-none"
                    type="button">
                    <img src="/images/socials/facebook.svg" alt="logo" className="w-[80%]" />
                  </button>
                </a>
                <a href="https://www.youtube.com/">
                  <button
                    className=" align-center mr-2 h-10 w-10 items-center justify-center rounded-full font-normal text-pink-400 outline-none focus:outline-none"
                    type="button">
                    <img src="/images/socials/youtube.svg" alt="logo" />
                  </button>
                </a>
                <a href="https://www.instagram.com/">
                  <button
                    className=" text-blueGray-800  align-center mr-2 h-10 w-10 items-center justify-center rounded-full font-normal outline-none focus:outline-none"
                    type="button">
                    <img src="/images/socials/instagram.svg" alt="logo" className="w-[80%]" />
                  </button>
                </a>
              </div>
            </div>
            <div className="flex w-full gap-1 justify-between lg:w-6/12">
              <div className="lg:w-4/12">
                <span className="text-blueGray-500 text-md mb-2 block font-bold uppercase text-white">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold text-white"
                      href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold text-white"
                      href="https://blog.creative-tim.com?ref=njs-profile">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold text-white"
                      href="https://www.github.com/creativetimofficial?ref=njs-profile">
                      Medical Aid
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold text-white"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">
                      Student Education
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold text-white"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">
                      Training Programs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="border border-white lg:hidden" />
              <div className="lg:w-4/12">
                <span className="text-blueGray-500 text-md mb-2 block font-semibold uppercase text-white">
                  Contact Us
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold text-white"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">
                      jansevaa31@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800 block pb-2 text-sm font-semibold text-white"
                      href="https://creative-tim.com/terms?ref=njs-profile">
                      +91-9968966660
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="border-blueGray-300 my-6" />
          <div className="w-full text-center">
            Copyright © 2023 Jan Sevaa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
