import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
        <div className="nav">
            <Image src="/arrow-fly.png" width="50" height="30" alt='logo' />
            <div className="logo"></div>
            <Link href='/'>Home</Link>&nbsp;&nbsp;
            <Link href='/about'>About</Link>&nbsp;&nbsp;
            <Link href='/ninjas'>Ninja Listing</Link>
        </div>
     );
}
 
export default Navbar;