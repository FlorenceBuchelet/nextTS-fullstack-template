import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="header">
                <Image src="https://placehold.co/400" width={400} height={400} alt="placeholder" className="header__logo" />
                <ul className="header__links">
                    <li className="header__link"><Link href="/">Home</Link></li>
                    <li className="header__link"><Link href="/about">About</Link></li>
                    <li className="header__link"><Link href="/contact">Contact</Link></li>
                </ul>
            </header>
        </>
    );
}
