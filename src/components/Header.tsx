import Image from "next/image";
import Link from "next/link";
import HeaderButton from "./ui/HeaderButton";
import { HeaderProps } from "@/types/types";
import { useRouter, usePathname } from "next/navigation";

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

  return (
    <header className="realtive fixed top-0 left-0 w-full z-40">
      <Image
        width={1510}
        height={140}
        src="/header/header.svg"
        className="w-full absolute z-3"
        alt="."
      />
      <div className="container mx-auto flex justify-between pt-6 items-center z-5">
        <a
          className="z-5 cursor-pointer"
          href="/"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <Image
            width={140}
            height={130}
            src="/general/bec-logo.svg"
            alt="bec-logo"
          />
        </a>
        <ul className="text-2xl font-base flex justify-between w-[600px] z-5">
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
        <div className="flex gap-2">
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
