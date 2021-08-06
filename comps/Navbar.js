import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <div>
            <nav>
                <div className = "logo">
                    <Image src="/logo.png" width={128} height={77}/> {/*pake tag Image dari next harus menggunakan width height att kalo ga pake error */}
                    {/* <img src="/logo.png"/> */} {/* pake img tag biasa bisa,..tag img biasa bisa digunakan tanpa width height att */}
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninja"><a>Ninja List</a></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;