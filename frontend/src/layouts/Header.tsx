import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <Image src="https://placehold.co/400" width={400} height={400} alt="placeholder" className="logo" />
                <ul>
                    <li><Link href="/index">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </header>
            <section className="lime">
                {children}
            </section>
        </>
    );
}
