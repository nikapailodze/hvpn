import styles from './TabSelector.module.scss'

const TabSelector = () => {
    return (
        <div className={styles.container}>
            <div className={styles.option}>
                <p>Premium</p>
            </div>
            <div className={styles.option}>
                Frees
            </div>
        </div>
    )
}

export default TabSelector;