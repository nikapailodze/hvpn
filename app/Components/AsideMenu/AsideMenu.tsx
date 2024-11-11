import styles from "./AsideMenu.module.scss"
import Image from "next/image";
import { IconEnum } from "@/global/Icon.enum";
import IPDisplay from "./Components/IPDisplay/IPDisplay";

const AsideMenu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={IconEnum.Logo} width={32} height={32} alt="Logo"/>
                <p className={styles.logoTitle}>H-VPN</p>
            </div>

            <IPDisplay/>
        </div>
    )
}

export default AsideMenu;