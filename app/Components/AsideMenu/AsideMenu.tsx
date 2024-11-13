import styles from "./AsideMenu.module.scss"
import Image from "next/image";
import { IconEnum } from "@/global/Icon.enum";
import IPDisplay from "./Components/IPDisplay/IPDisplay";
import Button from "../Button/Button";
import RecentConnection from "./Components/RecentConnection/RecentConnection";

const AsideMenu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={IconEnum.Logo} width={32} height={32} alt="Logo"/>
                <p className={styles.logoTitle}>H-VPN</p>
            </div>

            <IPDisplay/>
            <Button type="Fill">Quick connection</Button>

            <RecentConnection/>
        </div>
    )
}

export default AsideMenu;