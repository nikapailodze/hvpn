import { useState } from 'react';
import styles from './TabSelector.module.scss'

const TabSelector = () => {
    const [isPremiumActive, setisPremiumActive] = useState(true)
    const [isFreeActive, setisFreeActive] = useState(false)

    const onPremiumClick = ()=>{
        setisPremiumActive(!isPremiumActive)
        setisFreeActive(!isFreeActive)
    }
    const onFreeClick = ()=>{
        setisPremiumActive(!isPremiumActive)
        setisFreeActive(!isFreeActive)
    }
    return (
        <div className={styles.container}>
            <div onClick={onPremiumClick} className={`${isPremiumActive && styles.activeTab} ${styles.option}`}>
                <p>Premium</p>
            </div>
            <div onClick={onFreeClick} className={`${isFreeActive && styles.activeTab} ${styles.option}`}>
                Frees
            </div>
        </div>
    )
}

export default TabSelector;