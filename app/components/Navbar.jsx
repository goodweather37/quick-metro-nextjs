import Image from "next/image";
import Link from "next/link";
import Logo from "./goldbitcoin.svg";

export default function Navbar() {
    return (
        <nav>
            <Image src={Logo} alt="Logo" width={70} quality={100} />
            <h1>Metro</h1>
            <Link href={"/"}>Home</Link>
            <Link href={"/tickets"}>Tickets</Link>
        </nav>
    )
}