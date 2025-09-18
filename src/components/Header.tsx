import Image from 'next/image';
import Link from 'next/link';
import HeaderButton from './ui/HeaderButton';
import { HeaderProps } from '@/types/types';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import HeroButton from './ui/HeroButton';

const Header = ({ scrollToSection, refs }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, section: 'home' | 'about') => {
    e.preventDefault();
    const targetRef = section === 'about' ? refs.AboutRef : refs.HomeRef;

    if (pathname === '/') {
      if (typeof scrollToSection === 'function') {
        scrollToSection?.(targetRef);
      }
    } else {
      router.push(section === 'about' ? '/?scroll=about' : '/');
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-10 h-[80px] sm:h-[100px] xl:h-[115px] backdrop-blur border-b-1 border-bec">
      <div className="container mx-auto flex justify-between pt-1.5 xl:pt-6 2xl:p-5.5 items-center z-20 px-10 2xl:px-13">
        <Link
          className="z-20 cursor-pointer"
          href="/"
          onClick={e => handleNavClick(e, 'home')}
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
              onClick={e => handleNavClick(e, 'about')}
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
          <Link
            href="https://t.me/bec2025b_bot"
            target="_blank"
          >
            <HeaderButton text="Зареєструватися" />
          </Link>
          <Link href="/becomepartner/">
            <HeaderButton text="Стати партнером" />
          </Link>
        </div>
        {/* Burger Button */}
        <div className="lg:hidden z-50">
          <button
            className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-8 bg-bec transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-8 bg-bec transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-8 bg-bec transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-header opacity-100 backdrop-blur-xl text-white flex flex-col items-center justify-center gap-5 text-2xl transition-transform duration-300 ease-in-out z-40 
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div>
          <a
            onClick={e => handleNavClick(e, 'home')}
            className="cursor-pointer absolute top-5 left-5"
          >
            <Image
              src="/general/bec-logo.svg"
              className=""
              alt="Logo"
              width={134}
              height={44}
            />
          </a>
        </div>
        <ul className="flex flex-col gap-7 text-center text-[26px] font-bold pt-10">
          <li>
            <a
              className="hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out cursor-pointer"
              onClick={e => handleNavClick(e, 'home')}
            >
              Про івент
            </a>
          </li>
          <li>
            <a
              className="hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out cursor-pointer"
              href="/partners/"
            >
              Партнери
            </a>
          </li>
          <li>
            <a
              className="hover:text-white hover:text-shadow-sm/30 hover:text-shadow-white transition-all duration-400 ease-in-out cursor-pointer"
              href="/organizers/"
            >
              Організатори
            </a>
          </li>
        </ul>
        <div className="flex flex-col gap-2 max-w-[300px]">
          <Link
            href="https://t.me/bec2025b_bot"
            target="_blank"
          >
            <button className="relative group cursor-pointer w-[250px] pt-12 flex items-center justify-center">
              <Image
                width={570}
                height={50}
                src="/hero/hero-btn.svg"
                alt="button background"
                className="absolute top-7 left-0 transition-opacity duration-300 ease-in-out opacity-100 "
              />
              <span className="relative z-8 transition-transform duration-300 ease-in-out group-hover:scale-102 text-2xl">
                Зареєструватися
              </span>
            </button>
          </Link>
          <Link href="/becomepartner/">
            <button className="relative group cursor-pointer w-[250px] pt-12 flex items-center justify-center">
              <Image
                width={570}
                height={50}
                src="/hero/hero-btn.svg"
                alt="button background"
                className="absolute top-7 left-0 transition-opacity duration-300 ease-in-out opacity-100 "
              />
              <span className="relative z-8 transition-transform duration-300 ease-in-out group-hover:scale-102 text-2xl">
                Стати партнером
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
