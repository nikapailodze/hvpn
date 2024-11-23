import { IconEnum } from '@/global/Icon.enum';
import DropOption from '../DropOption/DropOption';
import styles from './DropOptionList.module.scss'
import { useRouter } from 'next/navigation';


const DropOptionList = ()=>{
    const router  = useRouter()

    const onSettingsClick = ()=>{
        // router.push('/AccountSettings')
    }

    return(
        <div className={styles.container}>
            <div className={styles.personalInfo}>
                <p className={styles.name}>Wade Warren</p>
                <p className={styles.email}>alma.lawson@example.com</p>
            </div>

            <div className={styles.options}>
                <DropOption onClick={onSettingsClick} image={IconEnum.Settings}  title='Account Settings' />
                <DropOption image={IconEnum.Wallet}  title='Billing and subscription' />
                <DropOption image={IconEnum.Currency}  title='Payment methods' />
                <DropOption image={IconEnum.logout}  title='Logout' />

            </div>


        </div>
    )
}

export default DropOptionList;