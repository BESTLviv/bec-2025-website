import Image from "next/image"
import Link from "next/link"
import HeaderButton from "./ui/HeaderButton"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <div className="container mx-auto flex justify-between pt-6 items-center">
        <div>
          <Image 
            width={130}
            height={130}
            src="/general/bec-logo.svg"
            alt="bec-logo"
          />
        </div>
        <ul className="text-2xl font-base flex justify-between w-[600px]">
          <li className="w-1/3 text-center transition-all duration-300 ease-in-out hover:font-semibold">
            <Link href="#">Про івент</Link>
          </li>
          <li className="w-1/3 text-center transition-all duration-300 ease-in-out hover:font-semibold">
            <Link href="#">Партнери</Link>
          </li>
          <li className="w-1/3 text-center transition-all duration-300 ease-in-out hover:font-semibold">
            <Link href="#">Організатори</Link>
          </li>
        </ul>
        <div className="flex gap-2">
          <Link href="#">
            <HeaderButton text="Зареєструватися"/>
          </Link>
          <Link href="#">
            <HeaderButton text="Стати партнером"/>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header