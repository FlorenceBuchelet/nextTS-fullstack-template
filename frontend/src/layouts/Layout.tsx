import Image from "next/image";
import Link from "next/link";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
        <header>
            <Image src="https://placehold.co/400" alt="placeholder" className="logo" />
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Else</Link></li>
            </ul>
        </header>
        <section className="lime">
            {children}
        </section>
        </>
    );
}
