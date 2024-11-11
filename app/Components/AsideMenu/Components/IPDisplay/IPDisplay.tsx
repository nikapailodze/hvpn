import { IconEnum } from "@/global/Icon.enum"
import styles from "./IPDisplay.module.scss"
import Image from "next/image"



const IPDisplay = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.title}>Your real IP </p>

                <p className={styles.ipAddress}>95.104.43.252</p>
            </div>
            <div>
                <Image src={IconEnum.rightArrow} width={24} height={24} alt="Right Arrow" />
            </div>
            <div className={styles.content}>
                <p className={styles.title}>VPN IP</p>

                <p className={styles.ipAddress}>**********</p>
            </div>
        </div>
    )
}

export default IPDisplay