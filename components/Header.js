import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRouter } from "next/router";

const Header = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const router = useRouter()
  const handleClick = () => {
    logout()
    router.push("/")

  }
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image src="/Logo_Trans.png" alt="Logo" width={150} height={50} />
          <Link href="/">
            <span className="ml-3 text-xl">DermInspect</span>
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/about">
            <div className="mr-5 hover:text-green-600">About us</div>
          </Link>
          <Link href="/features">
            <div className="mr-5 hover:text-green-600">Features</div>
          </Link>
          <Link href="/contact">
            <div className="mr-5 hover:text-green-600">Contact us</div>
          </Link>
          <Link href="/articles">
            <div className="mr-5 hover:text-green-600">Articles</div>
          </Link>
          
            {user? <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg text-center" onClick={handleClick}>Log out</button > :""}
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
