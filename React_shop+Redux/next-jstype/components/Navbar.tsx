import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss"

const navigation = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Contacts', path: '/contacts'}
]

const Navbar = () => {
    const {pathname} = useRouter();

    return (
        <nav className={styles.nav}>
            <Link href={navigation[0].path}><a className={styles.logo}>
                <Image src="/logo.png" width="60" height="60" alt="webDev" />
            </a></Link>
            <div className={styles.links}>
                {navigation.map(({id, title, path}) => (
                      <Link key={id} href={path}><a className={pathname === path ? styles.active : null}>{title}</a></Link>
                )) }

                
                
            </div>
        </nav>
    )
}

export default Navbar;