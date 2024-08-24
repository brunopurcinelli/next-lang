import Image from "next/image";
import logo from "../../../../public/img/logo.png";
import styles from './Logo.module.css'

export const Logo = () => {
    return (
        <>
            <Image
                className={styles.logo}
                src={logo}
                alt="logo"
                priority={true}
            />
        </>
    );
}
