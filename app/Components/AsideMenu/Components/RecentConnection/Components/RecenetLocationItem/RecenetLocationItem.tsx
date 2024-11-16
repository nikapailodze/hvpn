import styles from './RecenetLocationItem.module.scss'
import Image from 'next/image';

interface Props {
    locationName?: string;
    isChecked?: boolean;

}

const RecenetLocationItem = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.text}>{props.locationName}</p>
                <div className={styles.speed}>
                    <Image src={'/Icons/msBlue.svg'} width={24} height={24} alt='speed in milliseconds' />
                    <p>107 Ms</p>
                </div>
                <input className={styles.checkBox} type="checkbox" />
            </div>
        </div>
    )
}

export default RecenetLocationItem;