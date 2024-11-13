import { IconEnum } from "@/global/Icon.enum";
import styles from "./RecentConnection.module.scss"
import Image from "next/image";

const RecentConnection = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Recent Connection</p>

            <div className={styles.content}>
                <Image src={IconEnum.Location} width={24} height={24} alt="location"/>
                <div className={styles.detils}>
                    <p className={styles.detilsTitle}>No location selected</p>
                    <p className={styles.detilsSubtext}>No available locations </p>
                </div>
            </div>
        </div>
    )
}

export default RecentConnection;