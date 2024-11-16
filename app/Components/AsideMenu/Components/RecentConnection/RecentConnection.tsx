import { IconEnum } from "@/global/Icon.enum";
import styles from "./RecentConnection.module.scss"
import Image from "next/image";

interface Props {
    isLocationSelected: boolean;
    id?: number,
    countryFlag?: string;
    country?: string;
    locations?: string;
    isPremum?: boolean;
}

const RecentConnection = (props: Props) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Recent Connection</p>

            <div className={`${props.isLocationSelected && styles.selectedContent} ${styles.content}`}>
                <div className={styles.contentWrapper}>
                    <Image src={props.isLocationSelected ? props?.countryFlag || IconEnum.Location : IconEnum.Location} width={24} height={24} alt='location' />
                    <div className={styles.detils}>
                        <p className={styles.detilsTitle}>{props.isLocationSelected ? props.country : 'No location selected'}</p>
                        <p className={styles.detilsSubtext}>{props.isLocationSelected ? props.locations : 'No available locations'} </p>
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <Image src={IconEnum.DropDown} width={24} height={24} alt='Drop Down' />
                </div>

            </div>


        </div>

    )
}

export default RecentConnection;