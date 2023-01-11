import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='Navbar relative'>
      <nav className="fixed top-0 left-0 right-0 md:bg-[#0000001a] shadow-sm backdrop-blur-md z-10 p-4">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <div className="text-2xl text-black font-bold ">
                  <svg className='w-4 h-4' color='black' fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="currentColor" d="M41.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 41.4 86.6zM288 416H576c17.7 0 32 14.3 32 32s-14.3 32-32 32H288c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image className='invert' src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex sm:text-base text-lg font-bold  ">
                <li className=" md:text-white   py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 hover:underline  md:hover:bg-transparent">
                  <Link className=" no-underline font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md " href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className=" md:text-white   py-2 px-6 text-center  border-b-2 md:border-b-0 border-purple-900 hover:underline md:hover:bg-transparent">
                  <Link className=" no-underline font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md " href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="md:text-white    py-2 px-6 text-center  border-b-2 md:border-b-0 border-purple-900 hover:underline  md:hover:bg-transparent">
                  <Link className=" no-underline font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md " href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="md:text-white    py-2 px-6 text-center  border-b-2 md:border-b-0 border-purple-900 hover:underline md:hover:bg-transparent">
                  <Link className=" no-underline font-semibold py-2 px-4 rounded-lg hover:bg-[#ffffff33] hover:shadow-md hover:backdrop-blur-md " href="#projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;