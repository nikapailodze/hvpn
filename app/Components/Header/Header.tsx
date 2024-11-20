import { IconEnum } from '@/global/Icon.enum'
import styles from './Header.module.scss'
import Image from 'next/image'

const Header = ()=>{
    return(
        <header className={styles.conatiner}>
            <div className={styles.contnet}>
                <div className={styles.profilePic}>
                    <Image src={'/bing.png'} width={40} height={40} alt='profile picture'/>
                </div>
                <p className={styles.title}>Wade Warren</p>
                <div className={styles.dropdown}>
                    <Image src={IconEnum.DropDown} width={24} height={24} alt='Drop Down'/>
                </div>
            </div>
        </header>
    )
        
}

export default Header;