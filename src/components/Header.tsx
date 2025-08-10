import Image from "next/image";
import Link from "next/link";
import HeaderButton from "./ui/HeaderButton";
import { HeaderProps } from "@/types/types";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ scrollToSection, refs }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (
    e: React.MouseEvent,
    section: "home" | "about"
  ) => {
    e.preventDefault();
    const targetRef = section === 'about' ? refs.AboutRef : refs.HomeRef;

    if (pathname === "/") {
      if(typeof(scrollToSection) === "function") {
        scrollToSection?.(targetRef);
      }
    } else {
      router.push(
        section === "about" ? "/?scroll=about" : "/"
      );
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    
  }

  return (
    <header className="realtive fixed top-0 left-0 w-full z-40 h-[110px]">

      <Image
        width={110}
        height={140}
        src="/header/header.svg"
        className="w-full absolute z-10"
        alt="."
      />

      <div className="container mx-auto flex justify-between pt-3 xl:pt-6 15xl:pt-8 2xl:p-7 items-center z-20 px-10 2xl:px-13">
        <Link
          className="z-20 cursor-pointer"
          href="/"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <Image
            width={140}
            height={130}
            src="/general/bec-logo.svg"
            alt="bec-logo"
            className="w-[100px] xl:w-[120px] 15xl:w-[140px] 2xl:w-[160px] h-[70px]"
          />
        </Link>
        <ul className="hidden lg:flex text-xl 15xl:text-2xl 2xl:text-[26px] font-base justify-between xl:w-[600px] w-[500px] z-20">
          <li className="w-1/3 text-center">
            <Link
              href="#"
              className="inline-block transition-all duration-300 ease-in-out hover:scale-107"
              onClick={(e) => handleNavClick(e, "about")}
            >
              Про івент
            </Link>
          </li>
          <li className="w-1/3 text-center">
            <Link
              href="/partners/"
              className="inline-block transition-all duration-300 ease-in-out hover:scale-107"
            >
              Партнери
            </Link>
          </li>
          <li className="w-1/3 text-center">
            <Link
              href="/organizers/"
              className="inline-block transition-all duration-300 ease-in-out hover:scale-107"
            >
              Організатори
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex gap-2">
          <Link href="#">
            <HeaderButton text="Зареєструватися" />
          </Link>
          <Link href="/becomepartner/">
            <HeaderButton text="Стати партнером" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
